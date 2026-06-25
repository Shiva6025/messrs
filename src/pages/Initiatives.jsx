import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LatestArticles from '../components/LatestArticles'

const ASSETS = {
  heroHospital: '/assets/Frame-1410084764.png',
  farmer: '/assets/PHOTO-2023-11-29-17-11-40-e1703074103613.jpeg',
  education: '/assets/unnamed.jpeg',
  primaryHealth: '/assets/Primary-Health-Care-Center.jpeg',
  villages: '/assets/Screenshot-2023-12-20-at-17.48.47.png',
  healthcareBanner: '/assets/Frame-1410084764.png',
  scholarship: '/assets/Scholarship-Distribution-2019-1-e1705986013827.jpeg',
  wellbeing: '/assets/Screenshot-2023-12-20-at-18.02.26-e1708496676582.png',
}

const STATS = [
  { value: '200+', label: 'Beds established in the Dr. G Sankararao Memorial Hospital' },
  { value: '50', label: 'Beds inside the Polisetty Somasundaram... wing' },
  { value: '300+', label: 'Total workers additionally supported' },
]

const INITIATIVES = [
  {
    title: 'Farmer awareness',
    description: 'We target key areas that have a direct impact. Following farmer onboarding, the team runs several programs to enhance the best practices across the value chain.',
    image: ASSETS.farmer,
  },
  {
    title: 'Accessible education',
    description: 'As a part of our initiative to do good to society, we continuously upgrade the infrastructure across varied schools. We also set up libraries where 100+ children study every year.',
    image: ASSETS.education,
    offset: true,
  },
  {
    title: 'Primary healthcare',
    description: 'We have setup and run 2 free health camps for over 10 years, which benefit 300+ villagers in rural areas every month.',
    image: ASSETS.primaryHealth,
  },
  {
    title: 'Villages adopted',
    description: 'As a part of our initiatives to improve rural infrastructure, we adopt 12 villages every year and provide support in over 20+ areas. We work across varied areas to improve the quality of life in villages.',
    image: ASSETS.villages,
    offset: true,
  },
]

export default function Initiatives() {
  const heroRef = useRef(null)
  const [activeTab, setActiveTab] = useState('scholarships')

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
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${ASSETS.heroHospital})`,
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
            <span style={{ color: '#DA7927', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Making a difference</span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '2rem',
          }}>
            Initiatives & <br /><span style={{ color: '#DA7927', fontStyle: 'italic' }}>Impact</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.7 }}>
            We believe in giving back to the community and driving positive change across healthcare, education, and rural development.
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
            <div className="num-font" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '4rem', fontWeight: 700, color: '#DA7927', marginBottom: '0.5rem', lineHeight: 1 }}>200+</div>
            <div style={{ color: '#1a1008', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Beds established in the<br />Dr. G Sankararao Memorial Hospital</div>
          </div>
          <div style={{ borderLeft: '1px solid #f0efe9', borderRight: '1px solid #f0efe9' }}>
            <div className="num-font" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '4rem', fontWeight: 700, color: '#DA7927', marginBottom: '0.5rem', lineHeight: 1 }}>50</div>
            <div style={{ color: '#1a1008', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Beds inside the<br />Polisetty Somasundaram wing</div>
          </div>
          <div>
            <div className="num-font" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '4rem', fontWeight: 700, color: '#DA7927', marginBottom: '0.5rem', lineHeight: 1 }}>300+</div>
            <div style={{ color: '#1a1008', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total workers<br />additionally supported</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          TRANSFORMING LIVES (PREMIUM OVERLAPPING CARDS)
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', background: '#faf7f2' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#1a1008', marginBottom: '1.5rem' }}>
              Transforming <span style={{ color: '#DA7927' }}>Lives</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: '#DA7927', margin: '0 auto 1.5rem' }} />
            <p style={{ color: '#6b5a4a', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Our key initiatives are structured to drive meaningful impact where it matters most, focusing on education, health, and rural empowerment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3rem 4rem' }}>
            {INITIATIVES.map((item, i) => (
              <div key={i} style={{ position: 'relative', marginTop: i % 2 !== 0 ? '4rem' : '0' }}>
                <div style={{
                  width: '100%', height: '350px', borderRadius: '24px', overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>

                <div style={{
                  background: '#fff', padding: '2.5rem', borderRadius: '20px',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.06)',
                  width: '85%', position: 'relative', margin: '-80px auto 0',
                  borderTop: '4px solid #DA7927', zIndex: 2
                }}>
                  <div style={{ color: 'rgba(218,121,39,0.2)', fontSize: '4rem', fontFamily: "'Playfair Display', serif", fontWeight: 800, position: 'absolute', top: '-10px', right: '20px', lineHeight: 1 }}>
                    0{i + 1}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '1rem', position: 'relative', zIndex: 3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#6b5a4a', fontWeight: 500, lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 3 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HEALTHCARE SECTION (SPLIT LAYOUT)
          ══════════════════════════════════════════════════════ */}
      <section style={{ background: '#1a1008', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', minHeight: '800px' }}>

          {/* Left Image Side */}
          <div style={{ position: 'relative', minHeight: '400px' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, #1a1008)', zIndex: 1 }} />
            <img src={ASSETS.healthcareBanner} className="no-reveal" alt="Healthcare facility" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '28% center' }} />
          </div>

          {/* Right Content Side */}
          <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Ensuring Care</span>
            </div>

            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', marginBottom: '2rem', lineHeight: 1.1 }}>
              Accessible <span style={{ color: '#DA7927' }}>Healthcare</span> for all
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontWeight: 400, marginBottom: '3rem', maxWidth: '600px' }}>
              Following past triumphs we have expanded the scope on various fulfilling areas – Hospital, Clinical Research Centers, Charitable running etc. We believe in making healthcare accessible for all and thus our investments aim to constantly bring our state-of-the-art facilities and top-tier services to those in need.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
              {[
                'State of the art Medicare facility operating with modern equipment',
                'Expanded capacity to 100 beds in the internal medicine wards',
                'Critical Health cares and emergency services 24/7'
              ].map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(218,121,39,0.2)', border: '2px solid #DA7927', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DA7927" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span style={{ fontSize: '1.05rem', color: '#fff', fontWeight: 500, lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </div>

            <div>
              <a href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)', color: '#fff',
                padding: '1rem 2.5rem', borderRadius: '50px',
                fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(218,121,39,0.3)', transition: 'transform 0.2s', letterSpacing: '0.05em'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Know more about us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OUR STORIES OF HOPE
          ══════════════════════════════════════════════════════ */}
      <LatestArticles title="Our stories of hope" />

      {/* ══════════════════════════════════════════════════════
          WE CARE FOR OUR PEOPLE (ALTERNATING BLOCKS)
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, color: '#1a1008', marginBottom: '1.5rem' }}>
              We care for our <span style={{ color: '#DA7927', fontStyle: 'italic' }}>People</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: '#DA7927', margin: '0 auto' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {/* Block 1: Scholarships */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <div style={{ order: 1 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'rgba(218,121,39,0.1)', borderRadius: '24px', zIndex: 0 }} />
                  <div style={{ width: '100%', aspectRatio: '4/4', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1 }}>
                    <img src={ASSETS.scholarship} alt="Scholarships and aid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div style={{ order: 2 }}>
                <div style={{ color: '#DA7927', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Education & Aid</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '2rem', lineHeight: 1.2 }}>Scholarships for Employees</h3>
                <p style={{ fontSize: '1.1rem', color: '#6b5a4a', lineHeight: 1.8, fontWeight: 400, marginBottom: '1.5rem' }}>
                  We operate a healthcare fund and set out aid packages to cover extreme health needs of our employees. Offering extensive coverage upto 50,000 as medical covers for employees operating mostly in the field, we believe in <strong>&apos;Always putting our people first&apos;</strong>.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#6b5a4a', lineHeight: 1.8, fontWeight: 400 }}>
                  Further, there is a merit cum scholarship program run by the board to reward employees&apos; children for their educational achievements. We have regular operations for the grant of school fees for children up to 10th and any individual.
                </p>
              </div>
            </div>

            {/* Block 2: Wellbeing */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(218,121,39,0.1)', borderRadius: '24px', zIndex: 0 }} />
                  <div style={{ width: '100%', aspectRatio: '4/4', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1 }}>
                    <img src={ASSETS.wellbeing} alt="Employee Wellbeing Training" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              <div style={{ order: 1 }}>
                <div style={{ color: '#DA7927', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Safety & Training</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '2rem', lineHeight: 1.2 }}>Employee Wellbeing</h3>
                <p style={{ fontSize: '1.1rem', color: '#6b5a4a', lineHeight: 1.8, fontWeight: 400 }}>
                  We organize training programs for First Aid & Fire Safety to create awareness in workers and staff, ensuring we comply with the stringent standards of safety regulation norms. A safe worker is a happy worker, and their wellbeing is paramount to our operational success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
