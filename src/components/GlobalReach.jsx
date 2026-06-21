import { useRef, useEffect } from 'react'
const mapImg = '/assets/map2.webp'

const regions = [
  { name: 'Andhra Pradesh', description: 'Primary sourcing hub — Virginia & Fire-Cured tobacco', count: '60%', color: '#DA7927' },
  { name: 'Telangana', description: 'Burley & air-cured specialty varieties', count: '25%', color: '#ECA12C' },
  { name: 'Karnataka', description: 'Premium blend components', count: '15%', color: '#282F81' },
]

const exportMarkets = [
  { country: 'Germany', flag: '🇩🇪' },
  { country: 'Belgium', flag: '🇧🇪' },
  { country: 'USA', flag: '🇺🇸' },
  { country: 'Brazil', flag: '🇧🇷' },
  { country: 'Japan', flag: '🇯🇵' },
  { country: 'South Africa', flag: '🇿🇦' },
]

export default function GlobalReach() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #fff 0%, #faf7f2 100%)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          ref={ref}
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
                Global Presence
              </span>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
              fontWeight: 800,
              color: '#1a1008',
              marginBottom: '1rem',
            }}>
              Polisetty in Action —{' '}
              <span style={{ color: '#DA7927' }}>Worldwide</span>
            </h2>
            <p style={{ color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.7, maxWidth: '550px', margin: '0 auto' }}>
              From the tobacco fields of South India to manufacturers across four continents, our reach is truly global.
            </p>
          </div>

          {/* Map + info layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '3rem', alignItems: 'start' }}>
            {/* Map */}
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              border: '1px solid rgba(218,121,39,0.15)',
              position: 'relative',
            }}>
              <img
                src={mapImg}
                alt="Global Reach Map"
                style={{ width: '100%', display: 'block' }}
              />
              {/* Map overlay dots (decorative) */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(250,247,242,0.3) 0%, transparent 50%)',
              }} />

              {/* Animated pulse dots */}
              {[
                { top: '35%', left: '62%', label: 'India HQ' },
                { top: '20%', left: '48%', label: 'Europe' },
                { top: '40%', left: '25%', label: 'Americas' },
              ].map((dot, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  top: dot.top,
                  left: dot.left,
                }}>
                  <div style={{
                    position: 'relative',
                    width: '12px',
                    height: '12px',
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background: '#DA7927',
                      animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
                    }} />
                    <div style={{
                      position: 'absolute',
                      inset: '-6px',
                      borderRadius: '50%',
                      background: 'rgba(218,121,39,0.2)',
                      animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
                    }} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#1a1008',
                    color: '#fff',
                    fontSize: '0.55rem',
                    fontWeight: 600,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.08em',
                  }}>
                    {dot.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Info panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Sourcing regions */}
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '1.75rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.05)',
              }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#1a1008', marginBottom: '1rem' }}>
                  Sourcing Regions
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {regions.map((region, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '40px',
                        height: '6px',
                        borderRadius: '3px',
                        background: `linear-gradient(90deg, ${region.color}, ${region.color}88)`,
                        flexShrink: 0,
                      }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1a1008' }}>{region.name}</div>
                        <div style={{ fontSize: '0.7rem', color: '#8a7a6a' }}>{region.description}</div>
                      </div>
                      <div style={{ color: region.color, fontWeight: 800, fontSize: '0.9rem' }}>{region.count}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Export markets */}
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '1.75rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.05)',
              }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#1a1008', marginBottom: '1rem' }}>
                  Export Markets
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                  {exportMarkets.map((market, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '0.75rem',
                        background: '#faf7f2',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.3s',
                        cursor: 'default',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(218,121,39,0.08)'
                        e.currentTarget.style.borderColor = 'rgba(218,121,39,0.25)'
                        e.currentTarget.style.transform = 'scale(1.05)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#faf7f2'
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                    >
                      <span style={{ fontSize: '1.75rem' }}>{market.flag}</span>
                      <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#3d2c1e', letterSpacing: '0.05em' }}>
                        {market.country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                borderRadius: '20px',
                padding: '1.75rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🌏</div>
                <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to Partner?</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', marginBottom: '1rem' }}>
                  Connect with us for premium tobacco sourcing partnerships.
                </p>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.35)'}
                  onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.2)'}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
