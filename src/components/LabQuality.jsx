import { useRef, useEffect } from 'react'

function useReveal(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return ref
}

export default function LabQuality() {
  const headRef = useReveal(0)
  const textRef = useReveal(100)
  const mapRef1 = useReveal(0)
  const mapRef2 = useReveal(120)

  return (
    <>
      {/* ── PLC / Laboratory content ─────────────────────────── */}
      <section style={{
        padding: '6rem 0',
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle gold top accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #DA7927 30%, #ECA12C 50%, #DA7927 70%, transparent)',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}>

            {/* LEFT — text */}
            <div>
              {/* Label */}
              <div
                ref={headRef}
                style={{
                  opacity: 0, transform: 'translateY(24px)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                  <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
                  <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
                    Quality &amp; Technology
                  </span>
                  <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
                </div>

                {/* Pull quote */}
                <blockquote style={{
                  borderLeft: '4px solid #DA7927',
                  paddingLeft: '1.5rem',
                  marginBottom: '2rem',
                  margin: '0 0 2rem 0',
                }}>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                    fontStyle: 'italic',
                    color: '#1a1008',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    "Our laboratory is equipped with PLC control systems, at par with international standards."
                  </p>
                </blockquote>
              </div>

              {/* Body paragraphs */}
              <div
                ref={textRef}
                style={{
                  opacity: 0, transform: 'translateY(24px)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                }}
              >
                <p style={{
                  color: '#4a3b2e',
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  marginBottom: '1.25rem',
                }}>
                  The state-of-the-art machinery at the plant comprises the most advanced sorters
                  and threshers. Our lab is equipped with the best-in-class testing equipment to
                  ensure the product is in line with customer requirements and the{' '}
                  <strong style={{ color: '#1a1008' }}>CORESTA Standards</strong>.
                </p>

                <p style={{
                  color: '#4a3b2e',
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  marginBottom: '2.25rem',
                }}>
                  We operate the plant according to the strictest governing norms. Our laboratories
                  are controlled by{' '}
                  <strong style={{ color: '#1a1008' }}>
                    Programmable Logic Controller (PLC) control systems
                  </strong>
                  , ensuring consistent output and quality.
                </p>

                {/* CTA */}
                <a
                  href="/about"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                    color: '#fff',
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    letterSpacing: '0.06em',
                    textDecoration: 'none',
                    boxShadow: '0 8px 25px rgba(218,121,39,0.35)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 35px rgba(218,121,39,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(218,121,39,0.35)' }}
                >
                  Know more about Polisetty
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT — Machinery Image */}
            <div
              ref={useReveal(200)}
              style={{
                position: 'relative',
                opacity: 0, transform: 'translateY(24px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                aspectRatio: '4/3',
              }}>
                <img
                  src="/assets/KDP-Threshing-Line.jpg"
                  alt="State-of-the-art machinery and threshers"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    // Fallback to another image if this one is not ideal or broken
                    e.target.src = "/assets/shutterstock_1772000003-2.jpg"
                  }}
                />

                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(26,16,8,0.4) 0%, transparent 40%)',
                }} />

                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DA7927" strokeWidth="2" strokeLinecap="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1a1008', letterSpacing: '0.05em' }}>
                    PLC CONTROLLED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map image sections ────────────────────────────────── */}

      {/* Slide 1 — World map: We export to 56 countries */}
      <section style={{
        padding: '2rem 0 5rem',
        background: '#FAFAF5',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src="/assets/map1.webp"
          alt="World export map"
          style={{
            position: 'absolute',
            top: '50%', right: 0,
            transform: 'translateY(-50%)',
            width: '62%',
            objectFit: 'contain',
            opacity: 0.95,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
          <div
            ref={mapRef1}
            style={{
              maxWidth: '480px',
              opacity: 0, transform: 'translateY(30px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
                Global Reach
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 900,
              color: '#1a1008',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              We export to<br />
              <span style={{
                background: 'linear-gradient(90deg, #DA7927, #ECA12C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>56 countries</span>
            </h2>

            <p style={{ color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Polisetty constantly strives to establish new markets. Our drive for value-addition,
              coupled with the unwavering support of our customers and a strong focus on quality
              enables us to conquer new territories year after year.
            </p>

            <a
              href="/quality-exports"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                color: '#fff',
                padding: '0.8rem 2rem',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(218,121,39,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 35px rgba(218,121,39,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(218,121,39,0.35)' }}
            >
              Learn about our exports
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Slide 2 — AP/India map: Sources of Green Tobacco */}
      <section style={{
        padding: '2rem 0 5rem',
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(218,121,39,0.1)',
      }}>
        <img
          src="/assets/map2.webp"
          alt="Andhra Pradesh sourcing map"
          style={{
            position: 'absolute',
            top: '50%', right: 0,
            transform: 'translateY(-50%)',
            width: '62%',
            objectFit: 'contain',
            opacity: 0.95,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
          <div
            ref={mapRef2}
            style={{
              maxWidth: '500px',
              opacity: 0, transform: 'translateY(30px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
                Sourcing
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 900,
              color: '#1a1008',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              Sources of our<br />
              <span style={{
                background: 'linear-gradient(90deg, #DA7927, #ECA12C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Green Tobacco</span>
            </h2>

            <p style={{ color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              Our tobacco is sourced from various parts of the country throughout the year.
            </p>

            <p style={{ color: '#6b5a4a', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              <strong style={{ color: '#1a1008' }}>Flue-Cured Virginia (FCV) Tobacco</strong> —
              NLS · Northern Light soils, SLS · Southern Light soils, SBS · Southern Black soils,
              KLS · Karnataka Light soils.
            </p>

            <p style={{ color: '#6b5a4a', fontSize: '0.95rem', lineHeight: 1.8 }}>
              <strong style={{ color: '#1a1008' }}>Non Flue-Cured Virginia (FCV) Tobacco</strong> —
              Vinukonda Burley, HDBRG, Rustica, Lalchopadia, Oriental, Dark Fired, Kurnool Natu,
              Eluru Natu, Mothinari, Jathihari &amp; Kampala Chopra.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
