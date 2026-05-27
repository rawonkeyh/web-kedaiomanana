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
        <div style={{ display:'flex', gap:40, alignItems:'center' }}>
          <a href="/menu/"
            style={{ fontFamily:"'Caveat',cursive", fontSize:36, transform:'rotate(-2deg)', display:'inline-block', color:'inherit', textDecoration:'none' }}>menu</a>
          <a href="https://maps.app.goo.gl/16mdYQC8e3piZpWR9" target="_blank" rel="noreferrer"
            style={{ fontFamily:"'Caveat',cursive", fontSize:36, transform:'rotate(-1deg)', display:'inline-block', color:'inherit', textDecoration:'none' }}>visit</a>
          <a href="https://pos.kon.cafe/prebook" target="_blank" rel="noreferrer"
            style={{ fontFamily:"'Caveat',cursive", fontSize:36, transform:'rotate(2deg)', display:'inline-block', color:'var(--accent)', textDecoration:'none' }}>prebook</a>
        </div>
        <div className="stamp" style={{ fontSize:10, padding:'5px 10px' }}>open today</div>
      </div>

      {/* ── HERO ──────────────────────────────── */}
      {s.hero && (
        <section style={{ position:'relative', padding:'40px 56px 120px' }}>
          <div style={{ position:'relative', minHeight:900 }}>
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

            {/* YouTube Shorts in polaroid frames */}
            {[
              { id:'nfF57jOoURs', cap:'a peek inside ✶',  top:340, right:340, rot:-3 },
              { id:'ddDWqwyVwbk', cap:'morning at oma\'s', top:390, right:40,  rot:4  },
            ].map(v => (
              <div key={v.id} style={{
                position:'absolute', top:v.top, right:v.right, width:260,
                padding:'14px 14px 42px', background:'#FBFAF1',
                boxShadow:'0 14px 36px rgba(20,30,15,0.22)',
                transform:`rotate(${v.rot}deg)`,
              }}>
                <div style={{ width:'100%', aspectRatio:'9 / 16', background:'#000', borderRadius:2, overflow:'hidden' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${v.id}&controls=0&modestbranding=1&rel=0`}
                    title={v.cap}
                    style={{ width:'100%', height:'100%', border:0, display:'block' }}
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div style={{ position:'absolute', left:20, bottom:10, fontFamily:"'Caveat',cursive", fontSize:20, color:'#3a3a30' }}>
                  {v.cap}
                </div>
                <div className="tape" style={{ top:-12, left:'50%', transform:'translateX(-50%) rotate(-3deg)' }}/>
              </div>
            ))}

            {/* Intro card with paragraph */}
            <div style={{ position:'absolute', left:0, top:430, maxWidth:520, background:'#FBFAF1', padding:'28px 32px', boxShadow:'0 6px 18px rgba(20,30,15,0.1)', transform:'rotate(-1deg)' }}>
              <div style={{ fontFamily:"'Caveat',cursive", fontSize:22, color:'var(--accent)', marginBottom:8 }}>what we do, in short:</div>
              <p style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:22, lineHeight:1.4, margin:0, color:'var(--espresso)' }}>
                Slow coffee. Warm bread. A green little room that doesn't ask you to hurry. We open early and stay until the last conversation winds down.
              </p>
              <div style={{ marginTop:20, display:'flex', alignItems:'center', gap:12 }}>
                <a href="/menu/" style={btnB}>see the menu</a>
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
              <div key={d.name} style={{ background:'#FBFAF1', padding:'24px 26px', boxShadow:'0 4px 12px rgba(20,30,15,0.06)', position:'relative', transform:`rotate(${[-0.6,0.4,-0.3,0.5,-0.5,0.3,-0.4][i]}deg)` }}>
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
                no days off — come whenever.
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
            <a href="https://instagram.com/kedaiomanana" target="_blank" rel="noreferrer" style={btnB}>Follow Us →</a>
          </div>
          <InstaFeed feedId="GIstEmcXuNk3WTtdBQs4" count={6} />
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

// ── Mobile variant ───────────────────────────────────────────────
function LandingBMobile() {
  const PAD = 20;
  return (
    <div style={{ position:'relative', background:'var(--paper)', color:'var(--espresso)', fontFamily:"'Inter Tight',sans-serif", overflow:'hidden' }}>
      <div className="paper-tex" style={{ position:'absolute', inset:0, pointerEvents:'none' }}/>

      {/* NAV */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:`16px ${PAD}px 4px` }}>
        <KcLogo size={18} tag={false}/>
        <div className="stamp" style={{ fontSize:9, padding:'4px 8px' }}>open today</div>
      </div>
      <div style={{ display:'flex', justifyContent:'center', gap:22, padding:`6px ${PAD}px 14px`, flexWrap:'wrap' }}>
        <a href="/menu/"
          style={{ fontFamily:"'Caveat',cursive", fontSize:26, transform:'rotate(-2deg)', display:'inline-block', color:'inherit', textDecoration:'none' }}>menu</a>
        <a href="https://maps.app.goo.gl/16mdYQC8e3piZpWR9" target="_blank" rel="noreferrer"
          style={{ fontFamily:"'Caveat',cursive", fontSize:26, transform:'rotate(-1deg)', display:'inline-block', color:'inherit', textDecoration:'none' }}>visit</a>
        <a href="https://pos.kon.cafe/prebook" target="_blank" rel="noreferrer"
          style={{ fontFamily:"'Caveat',cursive", fontSize:26, transform:'rotate(2deg)', display:'inline-block', color:'var(--accent)', textDecoration:'none' }}>prebook</a>
      </div>

      {/* HERO */}
      <section style={{ position:'relative', padding:`28px ${PAD}px 48px` }}>
        <div style={{ fontFamily:"'Caveat',cursive", fontSize:28, color:'var(--accent)', transform:'rotate(-3deg)', display:'inline-block' }}>
          hai, you found us —
        </div>
        <h1 style={{ fontFamily:"'Inter Tight',sans-serif", fontWeight:600, letterSpacing:'-0.055em', fontSize:'min(24vw, 120px)', lineHeight:0.9, margin:'10px 0 18px' }}>
          kon<span style={{color:'var(--accent)'}}>.</span><span style={{fontWeight:300}}>cafe</span>
        </h1>
        <div style={{ display:'inline-block', transform:'rotate(-2deg)', background:'var(--espresso)', color:'var(--cream)', padding:'8px 14px', fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', marginBottom:24 }}>
          kedai oma nana · since 2025
        </div>
        <div style={{ background:'#FBFAF1', padding:'20px 22px', boxShadow:'0 6px 18px rgba(20,30,15,0.1)', transform:'rotate(-1deg)', marginBottom:28 }}>
          <div style={{ fontFamily:"'Caveat',cursive", fontSize:20, color:'var(--accent)', marginBottom:6 }}>what we do, in short:</div>
          <p style={{ fontFamily:"'Fraunces',serif", fontSize:17, lineHeight:1.4, margin:0 }}>
            Slow coffee. Warm bread. A green little room that doesn't ask you to hurry. We open early and stay until the last conversation winds down.
          </p>
          <div style={{ marginTop:16, display:'flex', alignItems:'center', gap:10 }}>
            <a href="/menu/" style={btnB}>see the menu</a>
            <Scribble kind="arrow-r" w={50} h={28} stroke="var(--accent)"/>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
          {[
            { id:'nfF57jOoURs', cap:'a peek inside ✶',  rot:-3 },
            { id:'ddDWqwyVwbk', cap:'morning at oma\'s', rot:3  },
          ].map(v => (
            <div key={v.id} style={{ position:'relative', padding:'10px 10px 32px', background:'#FBFAF1', boxShadow:'0 10px 24px rgba(20,30,15,0.18)', transform:`rotate(${v.rot}deg)` }}>
              <div style={{ width:'100%', aspectRatio:'9 / 16', background:'#000', borderRadius:2, overflow:'hidden' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${v.id}&controls=0&modestbranding=1&rel=0`}
                  title={v.cap}
                  style={{ width:'100%', height:'100%', border:0, display:'block' }}
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div style={{ position:'absolute', left:12, right:12, bottom:8, fontFamily:"'Caveat',cursive", fontSize:14, color:'#3a3a30', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
                {v.cap}
              </div>
              <div className="tape" style={{ top:-8, left:'50%', width:50, transform:'translateX(-50%) rotate(-3deg)' }}/>
            </div>
          ))}
        </div>
      </section>

      {/* DRINKS */}
      <section style={{ position:'relative', padding:`44px ${PAD}px`, background:'#F1EDD9' }}>
        <div className="mono" style={{ fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)' }}>01 — drinks</div>
        <h2 style={{ fontFamily:"'Fraunces',serif", fontWeight:400, fontSize:52, margin:'8px 0 14px', lineHeight:0.95, letterSpacing:'-0.03em' }}>what's<br/>brewing</h2>
        <Scribble kind="underline" w={160} h={22} stroke="var(--accent)" style={{ marginBottom:18 }}/>
        <div style={{ marginBottom:22, width:'85%', background:'#E8D976', padding:'14px 16px', transform:'rotate(-2deg)', boxShadow:'2px 4px 10px rgba(0,0,0,0.1)', fontFamily:"'Shadows Into Light',cursive", fontSize:15, lineHeight:1.4 }}>
          we change the filter coffee every two weeks. ask what's on today!
          <div style={{ marginTop:6, fontFamily:"'Caveat',cursive", fontSize:17 }}>— oma</div>
        </div>
        {KC_COFFEE.map((d, i) => <MenuRowB key={d.name} item={d} alt={i % 2 === 0}/>)}
        <div style={{ marginTop:20, fontFamily:"'Caveat',cursive", fontSize:18, color:'var(--muted)' }}>
          prices in idr · thousands. cash, qris, or a song.
        </div>
      </section>

      {/* FOOD */}
      <section style={{ padding:`44px ${PAD}px` }}>
        <div className="mono" style={{ fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)' }}>02 — from the kitchen</div>
        <h2 style={{ fontFamily:"'Fraunces',serif", fontWeight:300, fontSize:42, margin:'8px 0 24px', lineHeight:1.0, letterSpacing:'-0.03em' }}>
          mostly things <em style={{ fontStyle:'italic', color:'var(--accent)' }}>grandma</em> made.
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
          {KC_FOOD.map((d, i) => (
            <div key={d.name} style={{ background:'#FBFAF1', padding:'14px 14px', boxShadow:'0 4px 12px rgba(20,30,15,0.06)', position:'relative', transform:`rotate(${[-0.6,0.4,-0.3,0.5,-0.5,0.3,-0.4][i]}deg)` }}>
              <div style={{ fontFamily:"'Fraunces',serif", fontSize:15, fontWeight:400, lineHeight:1.15 }}>{d.name}</div>
              <div className="mono" style={{ fontSize:12, color:'var(--accent)', marginTop:4 }}>{d.price}</div>
              <div style={{ fontSize:11, color:'var(--muted)', marginTop:4 }}>{d.note}</div>
              {d.star && <div style={{ position:'absolute', top:-8, right:-8 }}>
                <Scribble kind="star" w={24} h={24} stroke="var(--accent)"/>
              </div>}
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section style={{ padding:`44px ${PAD}px`, background:'var(--espresso)', color:'var(--cream)' }}>
        <div className="mono" style={{ fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--tan)' }}>03 — come over</div>
        <h2 style={{ fontFamily:"'Caveat',cursive", fontWeight:700, fontSize:68, margin:'8px 0 16px', lineHeight:0.92, color:'var(--accent-light)' }}>
          we're<br/>right here.
        </h2>
        <div style={{ fontFamily:"'Fraunces',serif", fontSize:22, fontWeight:300, marginBottom:22 }}>
          Jl. Medokan Asri Timur<br/>Blok I/21, Surabaya
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:28 }}>
          <a href="https://maps.app.goo.gl/16mdYQC8e3piZpWR9" target="_blank" rel="noreferrer"
            style={{ ...btnB, background:'var(--accent-light)', color:'var(--espresso)', textAlign:'center' }}>open in maps</a>
          <a href="https://wa.me/6282230337337" target="_blank" rel="noreferrer"
            style={{ fontFamily:"'Caveat',cursive", fontSize:22, color:'var(--accent-light)', textDecoration:'none' }}>chat us on whatsapp →</a>
        </div>
        <div style={{ background:'#FBFAF1', color:'var(--espresso)', padding:'24px 22px', transform:'rotate(1deg)', boxShadow:'0 14px 40px rgba(0,0,0,0.3)' }}>
          <div className="mono" style={{ fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)', marginBottom:14 }}>hours</div>
          {KC_COPY.hours.map(([d, h]) => (
            <div key={d} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:'1px dashed var(--tan)', fontSize:17 }}>
              <span style={{ fontFamily:"'Fraunces',serif" }}>{d}</span>
              <span className="mono" style={{ color:'var(--accent)' }}>{h}</span>
            </div>
          ))}
          <div style={{ marginTop:14, fontFamily:"'Caveat',cursive", fontSize:19, color:'var(--accent)' }}>
            no days off — come whenever.
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section style={{ padding:`44px ${PAD}px` }}>
        <div className="mono" style={{ fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)', marginBottom:24 }}>04 — kind words</div>
        <div style={{ display:'flex', flexDirection:'column', gap:22 }}>
          {KC_PRESS.map((p, i) => (
            <div key={i} style={{ background:'#FBFAF1', padding:'20px 22px 24px', position:'relative',
              transform:`rotate(${[-1.5,0.8,-0.6][i]}deg)`, boxShadow:'0 6px 16px rgba(20,30,15,0.08)' }}>
              <div className="tape" style={{ top:-10, left:'50%', transform:'translateX(-50%) rotate(-3deg)' }}/>
              <div style={{ fontFamily:"'Caveat',cursive", fontSize:32, color:'var(--accent)', lineHeight:0.6, marginBottom:4 }}>"</div>
              <div style={{ fontFamily:"'Fraunces',serif", fontSize:17, lineHeight:1.4 }}>{p.quote}</div>
              <div className="mono" style={{ marginTop:14, fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--muted)' }}>— {p.src}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ padding:`44px ${PAD}px`, background:'#F1EDD9' }}>
        <div style={{ marginBottom:22 }}>
          <div className="mono" style={{ fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--muted)' }}>05 — the feed</div>
          <h3 style={{ fontFamily:"'Caveat',cursive", fontWeight:700, fontSize:52, margin:'4px 0 12px', color:'var(--accent)' }}>@kon.cafe</h3>
          <a href="https://instagram.com/kedaiomanana" target="_blank" rel="noreferrer" style={btnB}>Follow Us →</a>
        </div>
        <InstaFeed feedId="GIstEmcXuNk3WTtdBQs4" count={6} columns={2} />
      </section>

      {/* FOOTER */}
      <footer style={{ padding:`48px ${PAD}px 32px`, background:'var(--espresso)', color:'var(--cream)' }}>
        <KcLogo size={32} tag={true} dark/>
        <div style={{ marginTop:18, fontFamily:"'Caveat',cursive", fontSize:20, color:'var(--accent-light)', maxWidth:300 }}>
          thanks for scrolling all the way down. come say hi.
        </div>
        <div style={{ marginTop:32, display:'flex', flexDirection:'column', gap:22 }}>
          <FooterColB head="visit"  lines={['Jl. Medokan Asri Timur','Blok I/21, Surabaya']}/>
          <FooterColB head="say hi" lines={['wa: ' + KC_COPY.contact.wa, KC_COPY.contact.email]}/>
          <FooterColB head="follow" lines={[KC_COPY.contact.ig, 'newsletter →']}/>
        </div>
        <div style={{ marginTop:36, paddingTop:18, borderTop:'1px dashed rgba(184,196,163,0.3)', display:'flex', flexDirection:'column', gap:6, fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--tan)' }}>
          <span>© 2025 kon.cafe · kedai oma nana</span>
          <span>made slowly, in surabaya</span>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { LandingB, LandingBMobile });
