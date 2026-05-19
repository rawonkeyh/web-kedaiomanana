// shared.jsx — copy, data, and small primitives shared by all 3 variations.

const KC_COPY = {
  tagline: 'kedai oma nana — since 2025',
  intro: 'a little green room for slow coffee, warm bread, and the kind of afternoon you forget to leave.',
  address: ['Jl. Medokan Asri Timur Blok I/21', 'Surabaya'],
  hours: [
    ['Mon — Thu', '7:00 — 18:00'],
    ['Fri', '7:00 — 22:00'],
    ['Sat — Sun', '8:00 — 22:00'],
  ],
  contact: { phone: '+62 822 3033 7337', wa: '+62 822 3033 7337', email: 'halo@kon.cafe', ig: '@kon.cafe', maps: 'https://maps.app.goo.gl/16mdYQC8e3piZpWR9' },
};

const KC_COFFEE = [
  { name: 'House Filter',     price: '32', note: 'rotating single-origin · v60' },
  { name: 'Espresso',         price: '28', note: 'the short one' },
  { name: 'Long Black',       price: '32', note: 'double shot, hot water' },
  { name: 'Flat White',       price: '36', note: 'whole milk · 6oz' },
  { name: 'Pandan Latte',     price: '42', note: 'house pandan syrup', star: true },
  { name: 'Matcha · oma\'s',  price: '40', note: 'ceremonial · oat milk', star: true },
  { name: 'Iced Kopi Susu',   price: '34', note: 'palm sugar · ice' },
  { name: 'Ginger Tonic',     price: '32', note: 'no caffeine · spicy' },
];

const KC_FOOD = [
  { name: 'Kue Lapis',        price: '24', note: 'oma\'s recipe · daily', star: true },
  { name: 'Pandan Roll',      price: '28', note: 'soft, green, warm' },
  { name: 'Sourdough Toast',  price: '32', note: 'butter · sea salt' },
  { name: 'Pisang Goreng',    price: '26', note: 'fried banana · gula merah' },
  { name: 'Egg Sandwich',     price: '42', note: 'soft scramble · brioche' },
  { name: 'Greens Bowl',      price: '58', note: 'rice · sambal matah · egg' },
];

const KC_PRESS = [
  { quote: 'The pandan latte tastes like a hug from someone\'s grandmother.', src: 'Manual Jakarta' },
  { quote: 'A quiet corner of the city that refuses to hurry.', src: 'Whiteboard Journal' },
  { quote: 'Three tables, one cat, the best matcha in Surabaya.', src: 'Hypebeast SEA' },
];

const KC_INSTA = [
  { cap: 'morning light · open at 7', tone: 'a' },
  { cap: 'lapis stack day', tone: 'b' },
  { cap: 'new beans from flores', tone: 'c' },
  { cap: 'oma at the counter', tone: 'd' },
  { cap: 'closed monday for a wedding', tone: 'e' },
  { cap: 'rain outside, full inside', tone: 'f' },
];

// ─── Logo ────────────────────────────────────────────────────────
function KcLogo({ size = 64, tag = true, tagSize, dark = false, style }) {
  const t = tagSize ?? Math.max(7, Math.round(size / 9.5));
  return (
    <div className={'kc-logo ' + (dark ? 'dark' : '')} style={style}>
      <div className="mark" style={{ fontSize: size }}>
        kon<span className="dot">.</span><span className="lt">cafe</span>
      </div>
      {tag && (
        <div className="tag" style={{ fontSize: t, marginTop: Math.max(4, size / 9) }}>
          {KC_COPY.tagline}
        </div>
      )}
    </div>
  );
}

// ─── Placeholder image tile ──────────────────────────────────────
// Solid-color tile with a small caption — we don't have real photos yet.
const PH_PALETTE = {
  a: ['#3F5A33', '#8FB07A'],
  b: ['#6B8253', '#C6D2AE'],
  c: ['#2F4030', '#A8B895'],
  d: ['#566C42', '#DCE2C9'],
  e: ['#1E2B1C', '#7E9466'],
  f: ['#4F7A3A', '#E0E6CE'],
};
function PhotoTile({ tone = 'a', cap, style, rotate = 0, children }) {
  const [bg, fg] = PH_PALETTE[tone] || PH_PALETTE.a;
  return (
    <div style={{
      position:'relative', background:`linear-gradient(135deg, ${bg} 0%, ${fg} 100%)`,
      borderRadius:2, overflow:'hidden', transform:`rotate(${rotate}deg)`,
      ...style,
    }}>
      {/* soft grain */}
      <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.15), transparent 60%)',pointerEvents:'none'}}/>
      <div style={{position:'absolute',left:10,bottom:10,fontFamily:"'JetBrains Mono',monospace",fontSize:9,color:'rgba(255,255,255,0.85)',letterSpacing:'0.12em',textTransform:'uppercase'}}>
        {cap || 'photo · placeholder'}
      </div>
      {children}
    </div>
  );
}

// ─── Polaroid (taped) ────────────────────────────────────────────
function Polaroid({ tone='a', caption, rotate=0, w=200, h=240, style, tape='top' }) {
  return (
    <div style={{
      position:'relative', width:w, padding:'12px 12px 36px', background:'#FBFAF1',
      boxShadow:'0 6px 16px rgba(20,30,15,0.18)', transform:`rotate(${rotate}deg)`,
      ...style,
    }}>
      <PhotoTile tone={tone} cap={caption} style={{width:'100%',height:h-60}}/>
      <div style={{position:'absolute',left:18,bottom:8,fontFamily:"'Caveat',cursive",fontSize:18,color:'#3a3a30'}}>
        {caption || '—'}
      </div>
      {tape==='top' && <div className="tape" style={{top:-10,left:'50%',transform:'translateX(-50%) rotate(-3deg)'}}/>}
      {tape==='corner' && <>
        <div className="tape" style={{top:-8,left:-12,width:60,transform:'rotate(-30deg)'}}/>
        <div className="tape" style={{top:-8,right:-12,width:60,transform:'rotate(30deg)'}}/>
      </>}
    </div>
  );
}

// ─── Hand-scribbled arrow ────────────────────────────────────────
function Scribble({ kind = 'arrow-r', stroke = '#1E2B1C', w = 80, h = 40, style }) {
  const props = { fill: 'none', stroke, strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    'arrow-r': <g {...props}>
      <path d="M5 22 C 22 18, 40 28, 62 20" />
      <path d="M55 12 L 64 20 L 55 28" />
    </g>,
    'arrow-d': <g {...props}>
      <path d="M20 5 C 16 22, 28 38, 22 58" />
      <path d="M12 50 L 22 60 L 32 50" />
    </g>,
    'arrow-curl': <g {...props}>
      <path d="M5 30 C 20 5, 50 5, 65 22" />
      <path d="M58 14 L 66 22 L 56 26" />
    </g>,
    'star': <g {...props}>
      <path d="M40 8 L 46 30 L 70 32 L 50 46 L 58 70 L 40 56 L 22 70 L 30 46 L 10 32 L 34 30 Z" />
    </g>,
    'circle': <g {...props}>
      <path d="M10 25 C 5 8, 70 5, 70 22 C 72 38, 8 42, 8 26 C 10 18, 22 16, 40 18" />
    </g>,
    'underline': <g {...props}>
      <path d="M5 18 C 20 12, 50 22, 75 14" />
    </g>,
    'swirl': <g {...props}>
      <path d="M10 30 C 15 10, 60 10, 60 30 C 60 42, 22 42, 26 28 C 30 18, 48 22, 44 32" />
    </g>,
  };
  return <svg viewBox={`0 0 ${kind==='arrow-d'?40:80} ${kind==='star'?80:40}`} width={w} height={h} style={style}>{paths[kind]}</svg>;
}

Object.assign(window, {
  KC_COPY, KC_COFFEE, KC_FOOD, KC_PRESS, KC_INSTA,
  KcLogo, PhotoTile, Polaroid, Scribble,
});
