import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Asset paths ──────────────────────────────────────────────── */
const ASSETS = {
  texture: '/assets/banner.png',
  procurement: '/assets/Screenshot-2023-12-20-at-17.17.22.png',
  processing: '/assets/Screenshot-2023-12-20-at-15.28.33.png',
  testing: '/assets/Screenshot-2023-12-20-at-16.42.05.png',
  warehouse: '/assets/Screenshot-2023-12-20-at-16.50.53.png',
  tb1_1: '/assets/tb1 (1).png',
  tb1: '/assets/tb1.png',
  tb2_1: '/assets/tb2-1.png',
  tb3: '/assets/tb3.png',
  tb4: '/assets/tb4.png',
  tb5: '/assets/tb5.png',
}

/* ── Process Steps Data ───────────────────────────────────────── */
const PROCESS_TABS = [
  {
    label: 'Procurement',
    title: 'We procure high-quality tobacco from trusted farmers across India',
    content: (
      <>
        <p style={{ marginBottom: '1.5rem' }}>
          An integrated part of the procurement network, green tobacco, as per assessment limits (both in regards to volume, customer requirements, quality and output ratios from common origins) are tied to actions to cultivate choice tobacco with minimal environmental impact.
        </p>
        <ul style={{ fontWeight: 600, listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#1a1008' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#DA7927', flexShrink: 0 }}></span> Nurturing local farming communities
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#DA7927', flexShrink: 0 }}></span> Educating farmers on fertilizer usage
          </li>
        </ul>
      </>
    ),
    image: ASSETS.procurement,
  },
  {
    label: 'Processing',
    title: 'Our processing is done in line with the highest international standards',
    content: (
      <p style={{ marginBottom: '1.5rem' }}>
        The company threshes quality tobaccos with an installed capacity of 250 tons per day with ultra-modern machinery. (Machinery Manufactured by Evans – MacTavish – Agricraft Inc. USA)
      </p>
    ),
    image: ASSETS.processing,
  },
  {
    label: 'Testing',
    title: 'Adhering to CORESTA Guidelines',
    content: (
      <>
        <p style={{ marginBottom: '1.5rem' }}>
          Our state-of-the-art Quality Control lab, equipped with advanced testing equipment, guarantees that your product delivers consistent performance – inline with CORESTA quality standards.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          The Quality Control lab is equipped with the latest and sophisticated equipment, bought from reputed manufacturers like MacTavish, Brabender, Astell Hearson Ovens, Metler, W.S.Tyler etc.
        </p>
      </>
    ),
    image: ASSETS.testing,
  },
]

/* ── Export Products Data ─────────────────────────────────────── */
const EXPORT_PRODUCTS = [
  {
    image: ASSETS.tb1_1,
    title: 'FCV Traditional (TRDL) , Andhra Pradesh',
    marketingSeason: 'February to August',
    physicalFeatures: 'Lemon to Lemon orange, thin to medium bodied, mature to ripe',
    keyFeatures: 'Dependable source of coloury filler tobaccos. Grown under rain fed condition.',
    chemical: 'Nicotine: 1.8 to 3.5% | Sugar: 8 to 20 %'
  },
  {
    image: ASSETS.tb3,
    title: 'Air cured: Vinukonda Burley (VB), Andhra Pradesh',
    marketingSeason: 'January to March',
    physicalFeatures: 'Buff to light tan, thin to medium bodied',
    keyFeatures: 'Crop a kin to Malawi & Mozambique',
    chemical: 'Nicotine: 1.8-3% | Sugar: 2-3%'
  },
  {
    image: ASSETS.tb4,
    title: 'SUN CURED: (HDBRG), Andhra Pradesh',
    marketingSeason: 'February to May',
    physicalFeatures: 'Dark tan, medium to heavy bodied with sun cured note',
    keyFeatures: 'Crop with unique taste, Cheap substitute for Burley',
    chemical: 'Nicotine: 1.5 to 3% | Sugar: 2 to 3%'
  },
  {
    image: ASSETS.tb5,
    title: 'Fire Cured: Dark Fire Cured (DFC), Telangana',
    marketingSeason: 'April to May',
    physicalFeatures: 'Deep tan fermented, lustrous, heavy bodied',
    keyFeatures: 'Well suited for moist snus, shisha and RYO',
    chemical: 'Nicotine: 2.5 to 3.5% | Sugars: 4 to 5%'
  },
  {
    image: ASSETS.tb1,
    title: 'FCV Karnataka Light Soil, Mysore',
    marketingSeason: 'September to March',
    physicalFeatures: 'Thin bodied, ripe, lemon to orange color',
    keyFeatures: 'Grown in light soils, under well distributed rainfall. Preferred source of premium filler in the world. Natural neutral filler.',
    chemical: 'Nicotine: 1.0 to 2.0% | Sugar: 10 to 23%'
  },
  {
    image: ASSETS.tb2_1,
    title: 'FCV: Northern Light Soil (NLS), Andhra Pradesh',
    marketingSeason: 'March to August',
    physicalFeatures: 'Heavy bodied, oily lustrous, ripe styles',
    keyFeatures: 'Grown in sandy loam soils under irrigated conditions. Flavour option from India.',
    chemical: 'Nicotine: 2.0 to 4% | Sugar: 7 to 18%'
  },
]

export default function QualityExport() {
  const heroRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }

    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [location])

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#faf7f2', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          HERO & STATS
          ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${ASSETS.texture})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.5) 100%)',
        }} />
        <div ref={heroRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1, width: '100%', paddingTop: '100px', paddingBottom: '100px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
            <span style={{ color: '#DA7927', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>In every product</span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '2rem',
          }}>
            Quality & <br /><span style={{ color: '#DA7927', fontStyle: 'italic' }}>Consistency</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.7 }}>
            Delivering the finest aromatic Indian tobaccos to the world, backed by rigorous testing, sustainable practices, and decades of expertise.
          </p>
        </div>
      </section>

      {/* Floating Stats */}
      <div style={{ maxWidth: '1100px', margin: '-80px auto 0', position: 'relative', zIndex: 10, padding: '0 2rem' }}>
        <div style={{
          background: '#fff', borderRadius: '24px', padding: '3rem',
          boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', textAlign: 'center'
        }}>
          <div>
            <div className="num-font" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '4rem', fontWeight: 700, color: '#DA7927', marginBottom: '0.5rem', lineHeight: 1 }}>20+</div>
            <div style={{ color: '#1a1008', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Varieties of tobacco<br />exported</div>
          </div>
          <div style={{ borderLeft: '1px solid #f0efe9', borderRight: '1px solid #f0efe9' }}>
            <div className="num-font" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '4rem', fontWeight: 700, color: '#DA7927', marginBottom: '0.5rem', lineHeight: 1 }}>45<span style={{ fontSize: '2.5rem' }}>MT</span></div>
            <div style={{ color: '#1a1008', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quantity of tobacco<br />exported yearly</div>
          </div>
          <div>
            <div className="num-font" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '4rem', fontWeight: 700, color: '#DA7927', marginBottom: '0.5rem', lineHeight: 1 }}>56+</div>
            <div style={{ color: '#1a1008', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Number of countries<br />exported to</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          QUALITY ASSURANCE PROCESS
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', background: '#faf7f2', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '40vw', opacity: 0.03, pointerEvents: 'none' }}>
          <img src="/assets/logo (1).svg" className="no-reveal" alt="" style={{ width: '100%' }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#1a1008' }}>
              Quality Assurance <span style={{ color: '#DA7927' }}>Process</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {PROCESS_TABS.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={i} style={{ display: 'flex', flexDirection: isEven ? 'row' : 'row-reverse', alignItems: 'center', gap: '5rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 40%', position: 'relative', minWidth: '300px' }}>
                    <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
                      <img src={step.image} alt={step.label} style={{ width: '100%', height: 'auto', aspectRatio: '4/3', objectFit: 'cover' }} />
                    </div>
                    {/* Decorative element */}
                    <div style={{ position: 'absolute', top: '-20px', [isEven ? 'right' : 'left']: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(218,121,39,0.15)', zIndex: -1 }} />
                  </div>
                  <div style={{ flex: '1 1 40%', minWidth: '300px' }}>
                    <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(218,121,39,0.1)', color: '#DA7927', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                      Step 0{i + 1}
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '1.5rem', lineHeight: 1.2 }}>{step.label}</h3>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#DA7927', marginBottom: '1.5rem', lineHeight: 1.4 }}>{step.title}</h4>
                    <div style={{ color: '#6b5a4a', fontSize: '1.05rem', lineHeight: 1.8 }}>
                      {step.content}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          QUALITY CONTROL PARAMETERS
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', background: '#1a1008', position: 'relative', color: '#fff' }}>
        <div style={{ position: 'absolute', right: 0, top: '10%', bottom: 0, width: '50%', background: 'radial-gradient(circle at center, rgba(218,121,39,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff' }}>
              Quality Control <span style={{ color: '#DA7927', fontStyle: 'italic' }}>Parameters</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Chemical Analysis Laboratory', desc: 'For testing of Nicotine, Sugar & Chlorides.' },
              { title: 'Quality Control Laboratory', desc: 'Consists of a Degradation Tester, Moisture Meter, halogen moisture analyzer.' },
              { title: 'Color and Appearance Quality', desc: 'The in-built visual lines, physical inspection and grading of raw tobacco based on color, texture, and other factors.' },
              { title: 'Eliminating Non-Tobacco Related Materials', desc: 'This is achieved with laser sorters, high-efficiency rollers, magnets, metal detectors, vibro-screens & manual picking.' },
            ].map((param, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '3rem 2rem',
                transition: 'transform 0.4s ease, background 0.4s ease', cursor: 'default'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
              >
                <div style={{
                  width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, #ECA12C, #DA7927)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem',
                  color: '#fff', fontSize: '1.5rem', boxShadow: '0 10px 20px rgba(218,121,39,0.3)'
                }}>
                  {i === 0 ? '⚗️' : i === 1 ? '🔬' : i === 2 ? '👁️' : '✨'}
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '1rem', lineHeight: 1.4 }}>{param.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{param.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GROUND ZERO INSPECTION
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', background: '#faf7f2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-30px', left: '-30px', width: '100%', height: '100%', background: '#DA7927', borderRadius: '30px', opacity: 0.1 }} />
              <img src={ASSETS.warehouse} alt="Warehouse Inspection" style={{ width: '100%', borderRadius: '30px', position: 'relative', zIndex: 1, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }} />
            </div>

            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                <span style={{ color: '#DA7927', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>At the source</span>
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#1a1008', marginBottom: '3rem' }}>
                Ground Zero <span style={{ color: '#DA7927' }}>Inspection</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ color: '#DA7927', fontSize: '1.5rem', marginTop: '4px' }}>🎯</div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1008', marginBottom: '0.75rem' }}>Batch tracking</h4>
                    <p style={{ color: '#6b5a4a', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                      Our team inspects 10% of your crop bypassing for return. It meets all the customer standards. We also check the quality of packing material.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ color: '#DA7927', fontSize: '1.5rem', marginTop: '4px' }}>🔍</div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1008', marginBottom: '0.75rem' }}>Traceability</h4>
                    <p style={{ color: '#6b5a4a', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                      Our barcoded data label system tracks every part of tobacco from farm region and farmer group. It is a guaranteed traceability at all ends.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ color: '#DA7927', fontSize: '1.5rem', marginTop: '4px' }}>🏗️</div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1008', marginBottom: '0.75rem' }}>Inspection hall</h4>
                    <p style={{ color: '#6b5a4a', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                      The inspection hall is equipped with natural North lighting as well as artificial D65 lighting for perfect visual inspections.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <a href="/infrastructure" style={{
                  display: 'inline-block',
                  padding: '16px 40px',
                  background: 'linear-gradient(90deg, #DA7927, #ECA12C)', color: '#fff',
                  borderRadius: '50px', fontSize: '0.9rem', fontWeight: 700,
                  textDecoration: 'none', transition: 'transform 0.3s ease',
                  boxShadow: '0 10px 20px rgba(218,121,39,0.3)'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Learn about our infrastructure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          EXPORT EXCELLENCE
          ══════════════════════════════════════════════════════ */}
      <section id="export-excellence" style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#1a1008', marginBottom: '1.5rem' }}>
              Export <span style={{ color: '#DA7927' }}>Excellence</span>
            </h2>
            <p style={{ color: '#6b5a4a', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Across 56 nations, Polisetty's fine, aromatic Indian tobaccos are the true measure of quality.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {EXPORT_PRODUCTS.map((prod, i) => (
              <div key={i} style={{
                background: '#faf7f2', borderRadius: '24px', padding: '3rem 2rem',
                border: '1px solid transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                transition: 'all 0.4s ease', cursor: 'pointer', position: 'relative', overflow: 'hidden'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.borderColor = 'rgba(218,121,39,0.3)'
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.08)'
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1)'
                }}
              >
                <div style={{ width: '180px', height: '180px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={prod.image} alt={prod.title} style={{ width: '100%', height: 'auto', mixBlendMode: 'multiply', transition: 'transform 0.5s ease' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 800, color: '#1a1008', lineHeight: 1.3 }}>{prod.title}</h3>
                <div style={{ width: '40px', height: '2px', background: '#DA7927', margin: '1.5rem 0' }} />
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#fff', padding: '1.5rem', borderRadius: '16px', textAlign: 'left' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(26,16,8,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Marketing Season</div>
                      <div style={{ fontSize: '0.85rem', color: '#1a1008', fontWeight: 600, lineHeight: 1.4 }}>{prod.marketingSeason}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(26,16,8,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Physical Features</div>
                      <div style={{ fontSize: '0.85rem', color: '#1a1008', fontWeight: 600, lineHeight: 1.4 }}>{prod.physicalFeatures}</div>
                    </div>
                  </div>
                  <div style={{ width: '100%', height: '1px', background: '#f0efe9' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#DA7927', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Key features</div>
                    <div style={{ fontSize: '0.9rem', color: '#1a1008', fontWeight: 500, lineHeight: 1.5 }}>{prod.keyFeatures}</div>
                  </div>
                  <div style={{ width: '100%', height: '1px', background: '#f0efe9' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#DA7927', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Chemical composition</div>
                    <div style={{ fontSize: '0.9rem', color: '#1a1008', fontWeight: 600 }}>{prod.chemical}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #DA7927, #ECA12C)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Want to know more?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Reach out to us to learn more about our tobacco varieties, quality assurance processes, and export capabilities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              style={{
                background: '#fff', color: '#DA7927', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                padding: '0.875rem 2.25rem', borderRadius: '50px',
                fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em',
                textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)' }}
            >
              Reach out to us
            </button>
            <a
              href="/"
              style={{
                background: 'rgba(255,255,255,0.15)', color: '#fff',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '0.875rem 2.25rem', borderRadius: '50px',
                fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em',
                textDecoration: 'none', backdropFilter: 'blur(10px)',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

