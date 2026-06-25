import { useEffect, useRef } from 'react'
const heroBg = '/assets/PHOTO-2023-11-29-17-14-40-e1706867387348.webp'
const familyImg = '/assets/slide1-fam1.png'
const banLogo = '/assets/ban-logo.png'

export default function Hero() {
  const textRef = useRef(null)
  const particleRef = useRef(null)

  useEffect(() => {
    const el = textRef.current
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
    <section
      id="about"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: 'scale(1.05)',
        }}
      />

      {/* Multi-layer overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(40,47,129,0.85) 0%, rgba(61,44,30,0.7) 40%, rgba(0,0,0,0.5) 100%)',
      }} />

      {/* Decorative grain texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        opacity: 0.4,
      }} />

      {/* Animated gold circles */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '15%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        border: '1px solid rgba(218,121,39,0.2)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '20%',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        border: '1px solid rgba(236,161,44,0.3)',
        animation: 'float 6s ease-in-out infinite reverse',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 10,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        paddingTop: '80px',
      }}>
        {/* Left: Text */}
        <div ref={textRef}>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            Quality,{' '}
            <span style={{
              background: 'linear-gradient(90deg, #DA7927, #ECA12C, #F1B415)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Credibility
            </span>
            {' '}&amp;{' '}
            <br />Consistency
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            maxWidth: '520px',
          }}>
            For over eight decades, Messrs Polisetty Somasundaram &amp; Sons has stood as a pillar of integrity in the tobacco industry — delivering premium quality, building lasting partnerships, and uplifting farming communities across India.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#impact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                color: '#fff',
                padding: '0.875rem 2rem',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(218,121,39,0.5)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(218,121,39,0.6)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(218,121,39,0.5)' }}
            >
              Discover Our Impact
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                padding: '0.875rem 2rem',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
                transition: 'background 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
            >
              Contact Us
            </a>
          </div>


        </div>

        {/* Right: Family image with decorative frame */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          {/* Glow behind image */}
          <div style={{
            position: 'absolute',
            inset: '-20px',
            background: 'radial-gradient(circle, rgba(218,121,39,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
          }} />

          {/* Decorative rings */}
          <div style={{
            position: 'absolute',
            inset: '-40px',
            borderRadius: '50%',
            border: '1px solid rgba(218,121,39,0.15)',
            animation: 'float 10s ease-in-out infinite',
          }} />

          {/* <img
            src={familyImg}
            alt="Polisetty Family"
            className="animate-float"
            style={{
              maxHeight: '500px',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))',
            }}
          /> */}

          {/* Best Exporter badge */}
          <img
            src={banLogo}
            className="no-reveal"
            alt="Best Exporter Award – Non-manufacturer segment, 15 years"
            style={{
              position: 'absolute',
              top: '-17rem',
              right: '14rem',
              width: '280px',
              height: '280px',
              objectFit: 'contain',
              zIndex: 2,
              animation: 'float 5s ease-in-out infinite',
              filter: 'drop-shadow(0 8px 24px rgba(218,121,39,0.5))',
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        color: 'rgba(255,255,255,0.55)',
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        cursor: 'pointer',
      }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span>Scroll</span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(218,121,39,0.9)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: 'scrollBounce 1.6s ease-in-out infinite' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <style>{`
          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); opacity: 0.6; }
            50% { transform: translateY(6px); opacity: 1; }
          }
        `}</style>
      </div>
    </section>
  )
}
