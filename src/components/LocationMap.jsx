import { useRef, useEffect } from 'react'

export default function LocationMap() {
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

  const mapsQuery = encodeURIComponent(
    'Messrs. Polisetty Somasundaram Tobacco Packers Exporters, Mangalagiri Road, Guntur, Andhra Pradesh 522001, India'
  )
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`

  return (
    <section style={{ padding: '3rem 0 2rem', background: '#faf7f2', position: 'relative', overflow: 'hidden' }}>
      {/* Top rule */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.3), transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <div style={{ width: '35px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
            <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Find Us</span>
            <div style={{ width: '35px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 800, color: '#1a1008', lineHeight: 1.2,
          }}>
            Visit Our{' '}
            <span style={{ color: '#DA7927' }}>Headquarters</span>
          </h2>
        </div>

        {/* Map + Info card */}
        <div
          ref={ref}
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 80px rgba(0,0,0,0.12)',
            border: '1px solid rgba(218,121,39,0.15)',
            minHeight: '420px',
          }}
        >
          {/* Google Maps iframe */}
          <iframe
            title="Messrs Polisetty Somasundaram Location"
            src={`https://maps.google.com/maps?q=${mapsQuery}&output=embed&z=15`}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block', minHeight: '420px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Info panel */}
          <div style={{
            background: 'linear-gradient(160deg, #1a1008 0%, #282F81 100%)',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative glows */}
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(218,121,39,0.12)', filter: 'blur(40px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(236,161,44,0.08)', filter: 'blur(30px)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Icon */}
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 20px rgba(218,121,39,0.4)',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.4 }}>
                MESSRS. <br />Polisetty Somasundaram <br />
                {/* Badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: 'rgba(218,121,39,0.15)', border: '1px solid rgba(218,121,39,0.3)',
                  borderRadius: '50px', padding: '4px 12px', marginTop: '10px'
                }}>
                  <span style={{ color: '#ECA12C', fontSize: '0.65rem', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase' }}>
                    Tobacco Packers & Exporters
                  </span>
                </div>
              </h3>

              {/* Address */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DA7927" strokeWidth="2" style={{ flexShrink: 0, marginTop: '4px' }}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.8rem', lineHeight: 1.7 }}>
                  PO BOX 54, Mangalagiri Road,<br />
                  Guntur District,<br />
                  Andhra Pradesh – 522001<br />
                  India
                </span>
              </div>
            </div>

            {/* Get Directions button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative', zIndex: 1, marginTop: '2rem',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                color: '#fff', borderRadius: '12px',
                padding: '0.85rem 1.5rem',
                fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                boxShadow: '0 8px 25px rgba(218,121,39,0.4)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 35px rgba(218,121,39,0.55)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(218,121,39,0.4)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
