import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ASSETS = {
  texture: '/assets/banner.png'
}

export default function Reports() {
  const [activeTab, setActiveTab] = useState('All')
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

  const reports = [
    {
      category: 'Annual sustainability report',
      title: 'Greenhouse gas emissions report',
      link: '#'
    },
    {
      category: 'Farmer Impact report',
      title: 'Human rights and Labor standards report',
      link: '#'
    }
  ]

  const filteredReports = activeTab === 'All'
    ? reports
    : reports.filter(r => r.category.toLowerCase() === activeTab.toLowerCase())

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#faf7f2', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        {/* HERO SECTION */}
        <section style={{ position: 'relative', overflow: 'hidden', minHeight: '40vh', display: 'flex', alignItems: 'center', marginBottom: '4rem' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${ASSETS.texture})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(20,20,20,0.9) 0%, rgba(20,20,20,0.6) 100%)',
          }} />
          <div ref={heroRef} style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 2rem 50px', position: 'relative', zIndex: 1, width: '100%' }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 800, color: '#fff', lineHeight: 1.1,
            }}>
              Sustainable <br /><span style={{ color: '#DA7927', fontStyle: 'italic' }}>Development Reports</span>
            </h1>
          </div>
        </section>

        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Content section */}
          <div style={{ marginBottom: '5rem' }}>
            <p style={{
              color: '#333',
              fontSize: '1rem',
              lineHeight: 1.6,
              maxWidth: '800px',
              marginBottom: '3rem'
            }}>
              We at Polisetty Somasundaram are committed to creating a positive impact on the environment, society, and economy through transparency and accountability. Here, you will find our latest Sustainability Reports, which provide an overview of our sustainability performance, initiatives, and achievements, and are based on internationally recognized sustainability reporting standards, including the Global Reporting Initiative (GRI) Standards and UNSDGs.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              {/* Category 1 */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: '#ECA12C', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(236,161,44,0.3)',
                  border: '4px dashed rgba(255,255,255,0.4)',
                  color: '#fff'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1a1008', marginBottom: '0.75rem' }}>Annual Sustainability Report</h3>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>
                    These reports include our interventions across environment, social and economic parameters, and the positive impact we have been able to create.
                  </p>
                </div>
              </div>

              {/* Category 2 */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: '#ECA12C', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(236,161,44,0.3)',
                  border: '4px dashed rgba(255,255,255,0.4)',
                  color: '#fff'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1a1008', marginBottom: '0.75rem' }}>Farmer Impact Report</h3>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>
                    These reports include our initiatives to support the holistic wellbeing of our farmers and promote good agricultural practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gray section for cards */}
        <div style={{ background: '#fff', paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            {/* Tabs */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {['All', 'Annual sustainability report', 'Farmer Impact report'].map((tab) => {
                const isActive = activeTab === tab
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '1rem 2rem',
                      background: isActive ? '#DA7927' : 'rgba(218,121,39,0.05)',
                      color: isActive ? '#fff' : '#1a1008',
                      border: isActive ? '1px solid #DA7927' : '1px solid transparent',
                      borderRadius: '50px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: isActive ? '0 10px 20px rgba(218,121,39,0.2)' : 'none'
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.background = 'rgba(218,121,39,0.1)'
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.background = 'rgba(218,121,39,0.05)'
                    }}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>

            {/* Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {filteredReports.map((report, i) => (
                <div key={i} style={{
                  background: '#fff', border: '1px solid #eee', padding: '2.5rem 2rem',
                  display: 'flex', flexDirection: 'column', minHeight: '300px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ color: '#DA7927', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                    {report.category}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#1a1008', lineHeight: 1.3, marginBottom: '2rem' }}>
                    {report.title}
                  </h3>

                  <div style={{ marginTop: 'auto' }}>
                    <a href={report.link} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      color: '#1a1008', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none'
                    }}>
                      Download PDF
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
