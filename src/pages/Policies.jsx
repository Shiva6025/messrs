import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ASSETS = {
  heroImage: '/assets/istockphoto-1044675932-612x612-1.jpg', // Signing a document image
}

const POLICIES = [
  { id: 1, title: 'Child Labour Policy', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { id: 2, title: 'Code of conduct', icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' },
  { id: 3, title: 'Environmental Policy', icon: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z' },
  { id: 4, title: 'Equal opportunities, non-discrimination policy', icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
  { id: 5, title: 'Forestry Policy', icon: 'M11 21v-5H9l4-5v-4h-1l3-4 3 4h-1v4l4 5h-2v5h-8z' },
  { id: 6, title: 'Supply chain policy on human and labor rights', icon: 'M19 8V6H5v2h14zm0 6V9H5v5h14zm0 6v-4H5v4h14z' },
  { id: 7, title: 'Safety Policy', icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z' },
  { id: 8, title: 'Sustainable Tobacco Program Policy', icon: 'M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z' },
]

export default function Policies() {
  const heroRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#faf7f2', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${ASSETS.heroImage})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(26,16,8,0.95) 0%, rgba(26,16,8,0.7) 50%, rgba(26,16,8,0.2) 100%)',
        }} />

        <div ref={heroRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1, width: '100%', paddingTop: '100px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
            <span style={{ color: '#DA7927', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Explore</span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Our <span style={{ color: '#DA7927', fontStyle: 'italic', textTransform: 'uppercase' }}>Policies</span>
          </h1>

          <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
            {['Environment', 'Sustainability', 'Governance'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(218,121,39,0.2)', border: '1px solid #DA7927', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DA7927" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          POLICIES GRID
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0 4rem', background: '#faf7f2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#1a1008', marginBottom: '1.5rem' }}>
              Explore our <span style={{ color: '#DA7927' }}>policies</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: '#DA7927', margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {POLICIES.map((policy) => (
              <div key={policy.id} style={{
                background: '#fff', borderRadius: '24px', padding: '3rem 2rem',
                boxShadow: '0 15px 40px rgba(0,0,0,0.04)', transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                display: 'flex', flexDirection: 'column', cursor: 'pointer', border: '1px solid rgba(26,16,8,0.02)',
                position: 'relative', overflow: 'hidden'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.08)'
                  const iconBg = e.currentTarget.querySelector('.icon-bg')
                  if (iconBg) iconBg.style.transform = 'scale(1.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.04)'
                  const iconBg = e.currentTarget.querySelector('.icon-bg')
                  if (iconBg) iconBg.style.transform = 'scale(1)'
                }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'linear-gradient(135deg, rgba(218,121,39,0.05), transparent)', borderRadius: '0 24px 0 150px' }} />

                <div className="icon-bg" style={{
                  width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem',
                  boxShadow: '0 10px 20px rgba(218,121,39,0.3)', transition: 'transform 0.4s ease', position: 'relative', zIndex: 1
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
                    <path d={policy.icon} />
                  </svg>
                </div>

                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 800, color: '#1a1008', marginBottom: '1.5rem', lineHeight: 1.3, flexGrow: 1, position: 'relative', zIndex: 1 }}>
                  {policy.title}
                </h3>

                <a href="#" style={{
                  color: '#6b5a4a', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem',
                  transition: 'color 0.3s', position: 'relative', zIndex: 1
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#DA7927'}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b5a4a'}>
                  Download PDF
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #1a1008, #2a1f16)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(218,121,39,0.05)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(218,121,39,0.03)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Need further information?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            If you have questions about any of our policies, compliance standards, or corporate governance, feel free to contact us.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              style={{
                background: '#DA7927', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                padding: '0.875rem 2.25rem', borderRadius: '50px',
                fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em',
                textDecoration: 'none', boxShadow: '0 8px 30px rgba(218,121,39,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = '#ECA12C'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(218,121,39,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#DA7927'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(218,121,39,0.3)' }}
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
