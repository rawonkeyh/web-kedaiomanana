// landing-b.jsx — Variation B: Warm Homey
// Paper-feeling page. Polaroids, sticky notes, handwritten subheads.
// More character than A, more order than C.

function LandingB({ show = {} }) {
  const s = {
    hero: show.hero ?? true,
    coffee: show.coffee ?? true,
    food: show.food ?? true,
    location: show.location ?? true,
    press: show.press ?? true,
    insta: show.insta ?? true,
    footer: show.footer ?? true,
  };

  const W = 1440;

  return (
    <div style={{ width: W, background:'var(--paper)', color:'var(--espresso)', fontFamily:"'Inter Tight',sans-serif", position:'relative' }}>
      <div className="paper-tex" style={{position:'absolute', inset:0, pointerEvents:'none'}}/>
      {/* ── NAV ───────────────────────────────── */}
      <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'24px 56px' }}>
        <KcLogo size={20} tag={false} />
        <div style={{ display:'flex', gap:32 }}>
          {['menu','about','visit','journal'].map((t,i) => (
            <span key={t} style={{ fontFamily:"'Caveat',cursive", fontSize:24, transform:`rotate(${[-2,1,-1,2][i]}deg)`, display:'inline-block' }}>{t}</span>
          ))}
        </div>
        <div className="stamp" style={{ fontSize:10, padding:'5px 10px' }}>open today</div>
      </div>

      {/* ── HERO ──────────────────────────────── */}
      {s.hero && (
        <section style={{ position:'relative', padding:'40px 56px 120px' }}>
          <div style={{ position:'relative', minHeight:680 }}>
            {/* Big handwritten greeting */}
            <div style={{ fontFamily:"'Caveat',cursive", fontSize:48, color:'var(--accent)', transform:'rotate(-3deg)', position:'absolute', top:0, left:8 }}>
              hai, you found us —
            </div>
            <h1 style={{
              position:'absolute', top:60, left:0, right:0,
              fontFamily:"'Inter Tight',sans-serif", fontWeight:600, letterSpacing:'-0.055em',
              fontSize:240, lineHeight:0.9, margin:0,
            }}>
              kon<span style={{color:'var(--accent)'}}>.</span><span style={{fontWeight:300}}>cafe</span>
            </h1>

            {/* Tagline ribbon */}
            <div style={{ position:'absolute', left:80, top:340, transform:'rotate(-2deg)', background:'var(--espresso)', color:'var(--cream)', padding:'10px 22px', fontFamily:"'JetBrains Mono',monospace", fontSize:13, letterSpacing:'0.22em', textTransform:'uppercase' }}>
              kedai oma nana · since 2025
            </div>

            {/* Polaroids */}
            <Polaroid tone="a" caption="oma's matcha" rotate={5} w={220} h={260}
              style={{ position:'absolute', top:60, right:80 }}/>
            <Polaroid tone="b" caption="lapis day" rotate={-7} w={200} h={240}
              style={{ position:'absolute', top:330, right:260 }}/>
            <Polaroid tone="c" caption="three tables" rotate={4} w={180} h={220}
              style={{ position:'absolute', top:430, right:30, tape:'corner' }} tape="corner"/>

            {/* Intro card with paragraph */}
            <div style={{ position:'absolute', left:0, top:430, maxWidth:520, background:'#FBFAF1', padding:'28px 32px', boxShadow:'0 6px 18px rgba(20,30,15,0.1)', transform:'rotate(-1deg)' }}>
              <div style={{ fontFamily:"'Caveat',cursive", fontSize:22, color:'var(--accent)', marginBottom:8 }}>what we do, in short:</div>
              <p style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:22, lineHeight:1.4, margin:0, color:'var(--espresso)' }}>
                Slow coffee. Warm bread. A green little room that doesn't ask you to hurry. We open early and stay until the last conversation winds down.
              </p>
              <div style={{ marginTop:20, display:'flex', alignItems:'center', gap:12 }}>
                <a style={btnB}>see the menu</a>
                <Scribble kind="arrow-r" w={70} h={36} stroke="var(--accent)"/>
                <span style={{ fontFamily:"'Caveat',cursive", fontSize:22, color:'var(--accent)' }}>start here</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── MENU · COFFEE ────────────────────── */}
      {s.coffee && (
        <section style={{ position:'relative', padding:'80px 56px', background:'#F1EDD9' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:64, alignItems:'start' }}>
            <div>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)' }}>01 — drinks</div>
              <h2 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:80, margin:'12px 0 0', lineHeight:0.95, letterSpacing:'-0.03em' }}>
                what's<br/>brewing
              </h2>
              <div style={{ position:'relative', marginTop:24 }}>
                <Scribble kind="underline" w={220} h={28} stroke="var(--accent)"/>
              </div>
              {/* Sticky note */}
              <div style={{ marginTop:36, width:240, background:'#E8D976', padding:'18px 20px', transform:'rotate(-3deg)', boxShadow:'2px 4px 10px rgba(0,0,0,0.1)', fontFamily:"'Shadows Into Light',cursive", fontSize:18, lineHeight:1.4 }}>
                we change the filter coffee every two weeks. ask what's on today — we love telling people!
                <div style={{ marginTop:10, fontFamily:"'Caveat',cursive", fontSize:20 }}>— oma</div>
              </div>
            </div>
            <div>
              {KC_COFFEE.map((d, i) => <MenuRowB key={d.name} item={d} alt={i % 2 === 0}/>)}
              <div style={{ marginTop:32, fontFamily:"'Caveat',cursive", fontSize:22, color:'var(--muted)' }}>
                prices in idr · thousands. cash, qris, or a song.
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── MENU · FOOD ──────────────────────── */}
      {s.food && (
        <section style={{ padding:'80px 56px' }}>
          <div className="mono" style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)' }}>02 — from the kitchen</div>
          <h2 style={{ fontFamily:"'Fraunces',serif", fontWeight:300, fontSize:96, margin:'10px 0 48px', lineHeight:0.95, letterSpacing:'-0.03em' }}>
            mostly things <em style={{ fontStyle:'italic', color:'var(--accent)' }}>grandma</em> made.
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
            {KC_FOOD.map((d, i) => (
              <div key={d.name} style={{ background:'#FBFAF1', padding:'24px 26px', boxShadow:'0 4px 12px rgba(20,30,15,0.06)', position:'relative', transform:`rotate(${[-0.6,0.4,-0.3,0.5,-0.5,0.3][i]}deg)` }}>
                <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:12 }}>
                  <div style={{ fontFamily:"'Fraunces',serif", fontSize:28, fontWeight:400, letterSpacing:'-0.01em' }}>{d.name}</div>
                  <div className="mono" style={{ fontSize:14, color:'var(--accent)' }}>{d.price}</div>
                </div>
                <div style={{ fontSize:13, color:'var(--muted)', marginTop:6 }}>{d.note}</div>
                {d.star && <div style={{ position:'absolute', top:-10, right:-10 }}>
                  <Scribble kind="star" w={36} h={36} stroke="var(--accent)"/>
                </div>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── LOCATION ─────────────────────────── */}
      {s.location && (
        <section style={{ padding:'80px 56px', background:'var(--espresso)', color:'var(--cream)', position:'relative' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80 }}>
            <div>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--tan)' }}>03 — come over</div>
              <h2 style={{ fontFamily:"'Caveat',cursive", fontWeight:700, fontSize:140, margin:'12px 0 0', lineHeight:0.95, color:'var(--accent-light)' }}>
                we're<br/>right here.
              </h2>
              <div style={{ marginTop:32, fontFamily:"'Fraunces',serif", fontSize:34, fontWeight:300 }}>
                Jl. Medokan Asri Timur<br/>Blok I/21, Surabaya
              </div>
              <div style={{ marginTop:32, display:'flex', gap:12, alignItems:'center' }}>
                <a href="https://maps.app.goo.gl/16mdYQC8e3piZpWR9" target="_blank" rel="noreferrer" style={{...btnB, background:'var(--accent-light)', color:'var(--espresso)'}}>open in maps</a>
                <Scribble kind="arrow-r" w={70} h={36} stroke="var(--accent-light)"/>
                <a href="https://wa.me/6282230337337" target="_blank" rel="noreferrer" style={{ fontFamily:"'Caveat',cursive", fontSize:24, color:'var(--accent-light)', textDecoration:'none' }}>chat us on whatsapp →</a>
              </div>
            </div>
            <div style={{ background:'#FBFAF1', color:'var(--espresso)', padding:'40px 44px', transform:'rotate(1.5deg)', boxShadow:'0 14px 40px rgba(0,0,0,0.3)' }}>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)', marginBottom:18 }}>hours</div>
              {KC_COPY.hours.map(([d, h]) => (
                <div key={d} style={{ display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px dashed var(--tan)', fontSize:20 }}>
                  <span style={{ fontFamily:"'Fraunces',serif" }}>{d}</span>
                  <span className="mono" style={{ color:'var(--accent)' }}>{h}</span>
                </div>
              ))}
              <div style={{ marginTop:18, fontFamily:"'Caveat',cursive", fontSize:22, color:'var(--accent)' }}>
                closed on holidays + oma's birthday (sept 14).
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── PRESS ────────────────────────────── */}
      {s.press && (
        <section style={{ padding:'80px 56px', position:'relative' }}>
          <div className="mono" style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)', marginBottom:48 }}>04 — kind words</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:40 }}>
            {KC_PRESS.map((p, i) => (
              <div key={i} style={{
                background:'#FBFAF1', padding:'28px 30px 34px', position:'relative',
                transform:`rotate(${[-1.5,0.8,-0.6][i]}deg)`, boxShadow:'0 6px 16px rgba(20,30,15,0.08)',
              }}>
                <div className="tape" style={{ top:-12, left:'50%', transform:'translateX(-50%) rotate(-3deg)' }}/>
                <div style={{ fontFamily:"'Caveat',cursive", fontSize:36, color:'var(--accent)', lineHeight:0.6, marginBottom:6 }}>"</div>
                <div style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:22, lineHeight:1.35 }}>
                  {p.quote}
                </div>
                <div className="mono" style={{ marginTop:20, fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--muted)' }}>— {p.src}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── INSTAGRAM ─────────────────────────── */}
      {s.insta && (
        <section style={{ padding:'80px 56px', background:'#F1EDD9' }}>
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:40 }}>
            <div>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)' }}>05 — the feed</div>
              <h3 style={{ fontFamily:"'Caveat',cursive", fontWeight:700, fontSize:72, margin:'4px 0 0', color:'var(--accent)' }}>@kon.cafe</h3>
            </div>
            <a style={btnB}>follow along →</a>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:18 }}>
            {KC_INSTA.map((i, k) => (
              <Polaroid key={k} tone={i.tone} caption={i.cap} w={null} h={200}
                rotate={[-3,2,-1.5,1.5,-2,1][k]}
                style={{ width:'100%' }}/>
            ))}
          </div>
        </section>
      )}

      {/* ── FOOTER ───────────────────────────── */}
      {s.footer && (
        <footer style={{ padding:'72px 56px 48px', background:'var(--espresso)', color:'var(--cream)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48 }}>
            <div>
              <KcLogo size={42} tag={true} dark />
              <div style={{ marginTop:24, fontFamily:"'Caveat',cursive", fontSize:24, color:'var(--accent-light)', maxWidth:300 }}>
                thanks for scrolling all the way down. come say hi.
              </div>
            </div>
            <FooterColB head="visit" lines={['Jl. Medokan Asri Timur','Blok I/21, Surabaya']}/>
            <FooterColB head="say hi" lines={['wa: ' + KC_COPY.contact.wa, KC_COPY.contact.email]}/>
            <FooterColB head="follow" lines={[KC_COPY.contact.ig, 'newsletter →']}/>
          </div>
          <div style={{ marginTop:64, paddingTop:24, borderTop:'1px dashed rgba(184,196,163,0.3)', display:'flex', justifyContent:'space-between', fontFamily:"'JetBrains Mono',monospace", fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--tan)' }}>
            <span>© 2025 kon.cafe · kedai oma nana</span>
            <span>made slowly, in surabaya</span>
          </div>
        </footer>
      )}
    </div>
  );
}

const btnB = { display:'inline-block', background:'var(--accent)', color:'var(--cream)', padding:'12px 22px', fontSize:14, fontWeight:500, letterSpacing:'0.04em', textDecoration:'none', cursor:'pointer', transform:'rotate(-1deg)' };

function MenuRowB({ item, alt }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'auto 1fr auto', gap:18, alignItems:'baseline', padding:'14px 0', borderBottom:'1px dashed rgba(78,94,66,0.35)' }}>
      <div style={{ position:'relative', minWidth:24 }}>
        {item.star && <Scribble kind="star" w={22} h={22} stroke="var(--accent)"/>}
      </div>
      <div>
        <span style={{ fontFamily:"'Fraunces',serif", fontSize:24, fontWeight:400 }}>{item.name}</span>
        <span style={{ marginLeft:14, fontSize:14, color:'var(--muted)', fontStyle:'italic' }}>{item.note}</span>
      </div>
      <div className="mono" style={{ fontSize:14 }}>{item.price}</div>
    </div>
  );
}
function FooterColB({ head, lines }) {
  return (
    <div>
      <div className="mono" style={{ fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--tan)', marginBottom:14 }}>{head}</div>
      {lines.map((l, i) => (<div key={i} style={{ fontFamily:"'Fraunces',serif", fontSize:16, marginBottom:8 }}>{l}</div>))}
    </div>
  );
}

Object.assign(window, { LandingB });
