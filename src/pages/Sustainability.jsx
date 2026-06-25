import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ASSETS = {
  heroFarmers: '/assets/PHOTO-2023-11-29-17-11-40-e1703074103613.jpeg',
  solarDay: '/assets/Screenshot-2023-12-20-at-17.09.32-e1708496303845.png',
  solarSunset: '/assets/green-power.png',
  villages: '/assets/Screenshot-2023-12-20-at-17.48.47.png',
  fireSafety: '/assets/Screenshot-2023-12-20-at-18.02.26-e1708496676582.png',
  differentlyAbled: '/assets/Designer-e1708449195524.png',
  scholarship: '/assets/Scholarship-Distribution-2019-1-e1705986013827.jpeg',
  reportCover: '/assets/Screenshot-2023-12-20-at-14.54.19.png',
  texture: '/assets/banner.png'
}

const TECH_IMPACT = [
  {
    title: 'Farm Tech',
    desc: 'Empowering farmers through advisory and technical support leading to increased yields.'
  },
  {
    title: 'Green Operations',
    desc: 'Enabling renewable energy utilization and resource optimization.'
  },
  {
    title: 'Community Health & Well-being',
    desc: 'Social upliftment by providing access to water, food, shelter and healthcare in the adopted villages.'
  }
]

export default function Sustainability() {
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
          HERO SECTION
          ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${ASSETS.heroFarmers})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(20,20,20,0.9) 0%, rgba(20,20,20,0.4) 100%)',
        }} />

        <div ref={heroRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1, width: '100%', paddingTop: '100px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
            <span style={{ color: '#DA7927', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Our Commitment</span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1rem',
          }}>
            We aim to deliver <br />quality <span style={{ color: '#DA7927', fontStyle: 'italic', textTransform: 'uppercase' }}>RESPONSIBLY</span>
          </h1>

          <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap' }}>
            {[
              'Sustainable value Environment',
              'People first Culture',
              'Ethical Corporate Governance'
            ].map((item, i) => (
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
          SUSTAINABLE VALUE CREATION
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', background: '#faf7f2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#1a1008', marginBottom: '2rem', lineHeight: 1.1 }}>
                Sustainable <span style={{ color: '#DA7927' }}>value creation</span> for all
              </h2>
              <p style={{ color: '#6b5a4a', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Delivering value has been a core business priority for us creating long-term value for all stakeholders. Our integrated framework considers the environment, sustainability imperatives and systemic risks to drive value. Committing to an overall positive impact and upholding our high ethical standards, we strive to build a resilient and environmental-responsible business that is also profitable.
              </p>
              <a href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)', color: '#fff',
                padding: '1rem 2.5rem', borderRadius: '50px',
                fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(218,121,39,0.3)', transition: 'transform 0.2s'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Know about our business
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'rgba(218,121,39,0.1)', borderRadius: '24px', zIndex: 0 }} />
              <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1 }}>
                <img src={ASSETS.solarDay} alt="Solar Panels" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TECHNOLOGY FOR A POSITIVE IMPACT
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid rgba(26,16,8,0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#1a1008', marginBottom: '1.5rem' }}>
              Technology for a <span style={{ color: '#DA7927' }}>positive impact</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: '#DA7927', margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {TECH_IMPACT.map((item, i) => (
              <div key={i} style={{
                background: '#faf7f2', padding: '3.5rem 2.5rem', borderRadius: '24px',
                textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer',
                border: '1px solid transparent'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(218,121,39,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'transparent'
                }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                  margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 10px 20px rgba(218,121,39,0.3)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '1rem', color: '#6b5a4a', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PEOPLE, PLANET, PURPOSE (ALTERNATING BLOCKS)
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', background: '#faf7f2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, color: '#1a1008', marginBottom: '1.5rem' }}>
              People, Planet, <span style={{ color: '#DA7927' }}>Purpose</span>
            </h2>
            <p style={{ color: '#6b5a4a', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Our sustainable business approach
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

            {/* 1. Environment */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <div style={{ order: 1 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'rgba(218,121,39,0.1)', borderRadius: '24px', zIndex: 0 }} />
                  <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1 }}>
                    <img src={ASSETS.solarDay} alt="Environment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div style={{ order: 2 }}>
                <div style={{ color: '#DA7927', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Environment</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '2rem', lineHeight: 1.2 }}>Environmental Stewardship</h3>
                <p style={{ fontSize: '1.1rem', color: '#6b5a4a', lineHeight: 1.8, fontWeight: 400 }}>
                  PSS recognizes the impacts of climate change that have an uneven outreach, right from vulnerabilities on a local sphere. Our solutions are directed towards promoting in mitigation operations. Policies in holistic framing & operational shift minimizes the industry effects.
                </p>
              </div>
            </div>

            {/* 2. Employee Well-being (Social Impact) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(218,121,39,0.1)', borderRadius: '24px', zIndex: 0 }} />
                  <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1 }}>
                    <img src={ASSETS.villages} alt="Employee Well-being" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div style={{ order: 1 }}>
                <div style={{ color: '#DA7927', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Social Impact</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '2rem', lineHeight: 1.2 }}>Employee Well-being</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#DA7927', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span style={{ fontSize: '1.1rem', color: '#6b5a4a', lineHeight: 1.6 }}>PSS has identified 2 FCV growing villages across regional tobacco belts to implement farmer impact initiatives and good agricultural practices.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#DA7927', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span style={{ fontSize: '1.1rem', color: '#6b5a4a', lineHeight: 1.6 }}>Interventions span across ensuring health and safety of tobacco growing communities and positively impacting farmer&apos;s productivity and profitability uplifting their livelihood.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Health & Safety */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <div style={{ order: 1 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'rgba(218,121,39,0.1)', borderRadius: '24px', zIndex: 0 }} />
                  <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1 }}>
                    <img src={ASSETS.fireSafety} alt="Health & Safety" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div style={{ order: 2 }}>
                <div style={{ color: '#DA7927', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Health & Safety</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '2rem', lineHeight: 1.2 }}>Emergency Response</h3>
                <p style={{ fontSize: '1.1rem', color: '#6b5a4a', lineHeight: 1.8, fontWeight: 400 }}>
                  Approximately 10% of the overall factory strength at Kondrapadu constituted to form an Emergency Response Team (ERT). Employees on the ground are equipped with stronghold of firefighting and basic life support and first aid through effective year-round training programs.
                </p>
              </div>
            </div>

            {/* 4. Inclusion & Diversity */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(218,121,39,0.1)', borderRadius: '24px', zIndex: 0 }} />
                  <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1 }}>
                    <img src={ASSETS.differentlyAbled} alt="Inclusion & Diversity" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div style={{ order: 1 }}>
                <div style={{ color: '#DA7927', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Inclusion & Diversity</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '2rem', lineHeight: 1.2 }}>Valuing Diversity</h3>
                <p style={{ fontSize: '1.1rem', color: '#6b5a4a', lineHeight: 1.8, fontWeight: 400 }}>
                  We understand the value of diversity and believe in providing employment to differently-abled people to improve their livelihood. Our inclusive workplace policies ensure equal opportunities for growth, irrespective of physical abilities.
                </p>
              </div>
            </div>

            {/* 5. Distribution of Scholarship */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <div style={{ order: 1 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'rgba(218,121,39,0.1)', borderRadius: '24px', zIndex: 0 }} />
                  <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1 }}>
                    <img src={ASSETS.scholarship} alt="Distribution of scholarship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div style={{ order: 2 }}>
                <div style={{ color: '#DA7927', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Community Well-Being</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '2rem', lineHeight: 1.2 }}>Distribution of Scholarship</h3>
                <p style={{ fontSize: '1.1rem', color: '#6b5a4a', lineHeight: 1.8, fontWeight: 400 }}>
                  PSS is keen on social value creation beyond the boundaries of our operations. We support the community in multiple areas such as empowering the youth with better access to education, social uplifting by improving livelihoods, providing better access to medical facilities, ensuring domestic animal welfare through sponsorship and maintenance of cow shelters and aiding pilgrimage in the region.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HARNESSING GREEN POWER (DARK)
          ══════════════════════════════════════════════════════ */}
      <section id="green-power" style={{ padding: '4rem 0', background: '#1a1008', color: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem' }}>
              Harnessing <span style={{ color: '#DA7927' }}>Green Power</span>
            </h2>
          </div>

          <div style={{ width: '100%', height: '500px', borderRadius: '24px', overflow: 'hidden', marginBottom: '5rem', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}>
            <img src={ASSETS.solarSunset} alt="Solar panels at sunset" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 400, marginBottom: '2rem' }}>
                PSS recognizes the importance of transitioning towards a low carbon directive and aligning itself to upholding higher sustainability standards by committing to transition to renewable sources of energy and modernizing technology in tandem with latest environmental footprint.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 400, marginBottom: '3rem' }}>
                At the Kondrapadu processing facility, PSS has installed a rooftop solar power plant with a capacity of 1MW that is targeted to generate 1,500,000 kWh annually allowing the shift of reliance to renewable energy to share 30% usage estimation, 2024.
              </p>
              <a href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)', color: '#fff',
                padding: '1rem 2.5rem', borderRadius: '50px',
                fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(218,121,39,0.3)', transition: 'transform 0.2s', letterSpacing: '0.05em'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Know more about us
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {[
                '1 MW Installed Capacity',
                '1,500,000 kWh annual generation of clean energy',
                '1,400 tCO2e annual GHG emissions avoided inherent'
              ].map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem 2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(218,121,39,0.2)', border: '2px solid #DA7927', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DA7927" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 600 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SUSTAINABILITY RESOURCES
          ══════════════════════════════════════════════════════ */}
      <section id="resources" style={{ padding: '4rem 0', background: '#faf7f2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#1a1008', marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.1 }}>
            Sustainability Resources
          </h2>
          <p style={{ color: '#6b5a4a', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '4rem', maxWidth: '800px' }}>
            Our commitment to sustainability is grounded in the belief that every business has a responsibility to contribute to a better world. Discover our initiatives towards nature, lives, and communities. For detailed reports, visit our resources area.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <a href="/assets/Polisetty_Final_Sustainability_Report_FY_2023-24-1.pdf" download target="_blank" rel="noopener noreferrer" style={{
              background: '#fff', borderRadius: '20px', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              boxShadow: '0 15px 40px rgba(0,0,0,0.06)', width: '100%', maxWidth: '400px', cursor: 'pointer', transition: 'transform 0.3s',
              textDecoration: 'none'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div>
                <h4 style={{ fontWeight: 700, color: '#1a1008', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Polisetty Sustainability</h4>
                <div style={{ color: '#DA7927', fontSize: '0.9rem', fontWeight: 600 }}>Report 2023-24</div>
              </div>
              <div style={{ width: '50px', height: '60px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                <img src={ASSETS.reportCover} alt="Report Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </a>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <a href="/policies" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg, #DA7927, #ECA12C)', color: '#fff',
              padding: '1rem 2.5rem', borderRadius: '50px',
              fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(218,121,39,0.3)', transition: 'transform 0.2s', letterSpacing: '0.05em'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              View all reports
            </a>
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
            Reach out to us to learn more about our sustainability metrics and reports.
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
