import { useRef, useEffect } from 'react'
const tobaccoField = '/assets/PHOTO-2023-11-29-17-14-40-e1706867387348.webp'

const tobaccoTypes = [
  {
    name: 'Virginia / Flue-Cured',
    description: 'Bright, sweet-tasting tobacco grown in the fertile plains, carefully flue-cured for a mild, smooth flavour profile.',
    grade: 'Grade A+',
    region: 'Andhra Pradesh',
    color: '#DA7927',
  },
  {
    name: 'Burley Tobacco',
    description: 'Air-cured with a distinctive nutty character. Highly sought for blending due to its superior moisture absorption.',
    grade: 'Premium',
    region: 'Telangana',
    color: '#282F81',
  },
  {
    name: 'Fire-Cured',
    description: 'Rich, smoky intensity achieved through traditional fire-curing methods refined over generations of expertise.',
    grade: 'Select Grade',
    region: 'Karnataka',
    color: '#ECA12C',
  },
]

export default function TobaccoSources() {
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
    <section id="sourcing" style={{ padding: '6rem 0', background: '#fff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Left: Image with overlays */}
          <div style={{ position: 'relative' }}>
            {/* Decorative frame */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              right: '20px',
              bottom: '20px',
              borderRadius: '28px',
              border: '2px solid rgba(218,121,39,0.2)',
              zIndex: 0,
            }} />

            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
            }}>
              <img
                src={tobaccoField}
                alt="Tobacco Field"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />

              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(26,16,8,0.7) 0%, transparent 60%)',
              }} />

              {/* Info card overlay */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '1rem 1.25rem',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ color: '#ECA12C', fontSize: '0.7rem', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' }}>
                      Sourcing Region
                    </div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Andhra Pradesh, India</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#ECA12C', fontSize: '0.7rem', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' }}>
                      Season
                    </div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Year-Round</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '-1rem',
              background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
              borderRadius: '16px',
              padding: '1rem',
              boxShadow: '0 10px 30px rgba(218,121,39,0.4)',
              zIndex: 2,
              textAlign: 'center',
            }}>
              <div style={{ color: '#fff', fontWeight: 900, fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>A+</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.6rem', letterSpacing: '0.1em' }}>QUALITY</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
                Premium Sourcing
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
              fontWeight: 800,
              color: '#1a1008',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}>
              Sources of Our{' '}
              <span style={{ color: '#DA7927' }}>Green Tobacco</span>
            </h2>

            <p style={{ color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              We source exclusively from carefully selected farming regions across South India, where rich soil, optimal climate, and generations of cultivation expertise produce the finest tobacco leaves.
            </p>

            {/* Tobacco types */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tobaccoTypes.map((type, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    background: '#faf7f2',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${type.color}44`
                    e.currentTarget.style.background = `${type.color}08`
                    e.currentTarget.style.transform = 'translateX(8px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'
                    e.currentTarget.style.background = '#faf7f2'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  {/* Color accent */}
                  <div style={{
                    width: '4px',
                    borderRadius: '4px',
                    background: `linear-gradient(to bottom, ${type.color}, transparent)`,
                    flexShrink: 0,
                  }} />

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                      <h4 style={{ fontWeight: 700, color: '#1a1008', fontSize: '0.95rem', margin: 0 }}>{type.name}</h4>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{
                          background: `${type.color}18`,
                          color: type.color,
                          borderRadius: '50px',
                          padding: '2px 8px',
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                        }}>
                          {type.grade}
                        </span>
                      </div>
                    </div>
                    <div style={{ color: '#8a7a6a', fontSize: '0.7rem', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
                      📍 {type.region}
                    </div>
                    <p style={{ color: '#6b5a4a', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
