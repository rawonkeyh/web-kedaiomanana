// Render public/menu/index.html as A3-portrait PNG + PDF (editable text)
// via headless Chrome. Output goes to public/menu/print/ so it can be deployed
// to firebase hosting and imported into Canva by public URL.
// Usage: node scripts/render-menu-a3.cjs

const { spawn } = require('child_process');
const fs = require('fs');
const fsp = require('fs/promises');
const http = require('http');
const path = require('path');
const url = require('url');

const ROOT = path.resolve(__dirname, '..', 'public');
const MENU_FILE = path.join(ROOT, 'menu', 'index.html');
const OUT_DIR = path.resolve(ROOT, 'menu', 'print');
const TMP_DIR = path.resolve(__dirname, '..', 'print-output');

const CHROME = process.env.CHROME_PATH ||
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// A3 portrait at 96 CSS dpi = 1123 x 1587 CSS px.
// Render at deviceScaleFactor=3 -> 3369 x 4761 PNG (~287 dpi A3, print quality).
const VIEW_W = 1123;
const VIEW_H = 1587;
const SCALE = 3;

// Two-page menu on A3 paper:
//   front = drinks side (col 1: Coffee, Milk & Matcha, Tea, Sparks & Refreshers)
//   back  = kitchen side (col 2: Dari Dapur, Snacks & Toast, Donat Oma)
const SIDES = [
  { name: 'front', hideNthChild: 2 },
  { name: 'back',  hideNthChild: 1 },
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

// One side of the menu on each A3-portrait page. Hide the other column, reflow
// as a single-column page, and lay out items in 2 sub-columns so the long
// drinks/kitchen lists fit in A3 portrait without spilling.
// Rules apply to both screen (for PNG screenshot) and print (for PDF) media —
// the @page A3 portrait rule overrides the A4 default in menu/index.html.
function buildPrintCss(side) {
  return `
    @page{size:A3 portrait;margin:0;}
    html,body{background:var(--cream)!important;margin:0!important;padding:0!important;width:297mm!important;height:420mm!important;overflow:hidden!important;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;}
    .stage{padding:0!important;display:block!important;width:297mm!important;height:420mm!important;overflow:hidden!important;}
    .menu{
      width:297mm!important;
      min-height:420mm!important;
      max-width:none!important;
      box-shadow:none!important;
      padding:14mm 16mm 14mm!important;
    }
    /* Single-column flow for the visible side. */
    .body{grid-template-columns:minmax(0,1fr)!important;grid-template-rows:none!important;grid-auto-flow:row!important;gap:0!important;margin-top:14px!important;}
    .body > .col:nth-child(${side.hideNthChild}){display:none!important;}
    .body .cat{margin-bottom:14px!important;}

    /* Top hero strip — keep native ~1.23:1 wide rectangles by capping width. */
    .hero-strip{margin:14px 0 4px!important;gap:6px!important;max-width:780px!important;}
    .hero-strip image-slot{height:160px!important;}

    /* Per-category photo strip: keep the live menu's 1:1 square crop. Cap
       container width so photos don't balloon at full A3 width. */
    .cat-hero{margin:-2px 0 8px!important;gap:6px!important;max-width:520px!important;}
    .cat-hero image-slot{aspect-ratio:1!important;height:auto!important;}

    /* Donat layout — photo + price ladder + toppings */
    .donat-split{gap:12px!important;max-width:680px!important;}
    .donat-split .hero-wrap image-slot{min-height:180px!important;}

    /* Items in 2 sub-columns to fit the long drink/food lists. The base CSS
       uses display:flex on .items, which would override column-count, so
       force block. */
    .items{display:block!important;column-count:2!important;column-gap:24px!important;column-fill:balance!important;}
    .items .sub-hd,.items .row{break-inside:avoid!important;-webkit-column-break-inside:avoid!important;page-break-inside:avoid!important;}
    .items .sub-hd:first-child{margin-top:0!important;}

    /* Tighten typography for density. */
    .head{padding-bottom:12px!important;}
    .head .logo .mark{font-size:40px!important;}
    .head .rhs .big{font-size:28px!important;margin-bottom:4px!important;}
    .cat-name{font-size:24px!important;}
    .cat-hd{margin-bottom:8px!important;}
    .row{padding:3px 0!important;}
    .row .nm{font-size:12px!important;line-height:1.2!important;}
    .row .pr{font-size:11px!important;}
    .row .dots{transform:translateY(-4px)!important;}
    .sub-hd{margin:6px 0 1px!important;font-size:8px!important;}
    .addons{margin-top:8px!important;padding:8px 12px!important;column-count:1!important;}
    .addons .item{font-size:11px!important;}
    .foot{margin-top:12px!important;padding-top:10px!important;gap:16px!important;}
    .foot .blk dd{font-size:12px!important;}
    .foot .blk .small{font-size:10px!important;}
    .foot .stamp{top:-85px!important;width:70px!important;height:70px!important;}
    .foot .stamp .big{font-size:16px!important;}
  `;
}

async function readMenuHtml(side) {
  const raw = await fsp.readFile(MENU_FILE, 'utf8');
  const base = `<base href="/menu/">`;
  const tag = `<style id="print-a3">${buildPrintCss(side)}</style>`;
  return raw
    .replace(/<head[^>]*>/i, (m) => `${m}${base}`)
    .replace('</head>', `${tag}</head>`);
}

function startServer() {
  return new Promise(async (resolve, reject) => {
    const sideHtml = {};
    for (const s of SIDES) sideHtml[s.name] = await readMenuHtml(s);
    const srv = http.createServer(async (req, res) => {
      try {
        const u = url.parse(req.url);
        let p = decodeURIComponent(u.pathname);
        const m = p.match(/^\/print-a3\/(front|back)$/);
        if (m) {
          res.writeHead(200, { 'Content-Type': MIME['.html'] });
          return res.end(sideHtml[m[1]]);
        }
        // Serve files from public/menu first, then public/
        let abs = path.join(ROOT, 'menu', p);
        if (!fs.existsSync(abs) || fs.statSync(abs).isDirectory()) {
          abs = path.join(ROOT, p);
        }
        if (!fs.existsSync(abs) || fs.statSync(abs).isDirectory()) {
          res.writeHead(404); return res.end('404');
        }
        const ext = path.extname(abs).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        fs.createReadStream(abs).pipe(res);
      } catch (e) {
        res.writeHead(500); res.end(String(e));
      }
    });
    srv.listen(0, '127.0.0.1', () => {
      const port = srv.address().port;
      resolve({ srv, port });
    });
    srv.on('error', reject);
  });
}

function runChrome(args) {
  return new Promise((resolve, reject) => {
    const p = spawn(CHROME, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stderr = '';
    p.stderr.on('data', (d) => { stderr += d.toString(); });
    p.on('error', reject);
    p.on('close', (code) => code === 0 ? resolve() : reject(new Error(`chrome exit ${code}\n${stderr}`)));
  });
}

async function main() {
  await fsp.mkdir(OUT_DIR, { recursive: true });
  await fsp.mkdir(TMP_DIR, { recursive: true });
  const { srv, port } = await startServer();
  console.log(`local server: http://127.0.0.1:${port}`);
  const profile = path.join(TMP_DIR, '.chrome-profile');
  await fsp.mkdir(profile, { recursive: true });
  try {
    for (const s of SIDES) {
      const target = `http://127.0.0.1:${port}/print-a3/${s.name}`;
      const sideProfile = path.join(profile, s.name);
      await fsp.mkdir(sideProfile, { recursive: true });
      const commonArgs = [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        '--hide-scrollbars',
        `--user-data-dir=${sideProfile}`,
        `--virtual-time-budget=15000`,
      ];

      // 1) PNG preview at A3 portrait, ~287 dpi.
      const outPng = path.join(OUT_DIR, `menu-a3-${s.name}.png`);
      console.log(`rendering ${s.name} PNG...`);
      await runChrome([
        ...commonArgs,
        `--window-size=${VIEW_W},${VIEW_H}`,
        `--force-device-scale-factor=${SCALE}`,
        `--screenshot=${outPng}`,
        target,
      ]);
      const pngStat = await fsp.stat(outPng);
      console.log(`  wrote ${outPng} (${(pngStat.size / 1024).toFixed(1)} KB)`);

      // 2) PDF with real (editable) text for Canva import.
      const outPdf = path.join(OUT_DIR, `menu-a3-${s.name}.pdf`);
      console.log(`rendering ${s.name} PDF...`);
      await runChrome([
        ...commonArgs,
        `--no-pdf-header-footer`,
        `--print-to-pdf-no-header`,
        `--print-to-pdf=${outPdf}`,
        target,
      ]);
      const pdfStat = await fsp.stat(outPdf);
      console.log(`  wrote ${outPdf} (${(pdfStat.size / 1024).toFixed(1)} KB)`);
    }
  } finally {
    srv.close();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
