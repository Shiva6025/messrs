import { useRef, useEffect } from 'react'

export default function Impact() {
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
    <section
      id="impact"
      style={{
        position: 'relative',
        padding: '7rem 0',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a0a02 0%, #2d1a08 40%, #0d1440 100%)',
      }}
    >
      {/* Animated background rings */}
      {[300, 500, 700, 900].map((size, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          border: '1px solid rgba(218,121,39,0.08)',
          transform: 'translate(-50%, -50%)',
          animation: `float ${8 + i * 2}s ease-in-out infinite ${i % 2 === 0 ? '' : 'reverse'}`,
        }} />
      ))}

      {/* Gold radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218,121,39,0.15) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(40px)',
      }} />

      <div
        ref={ref}
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
          opacity: 0,
          transform: 'translateY(50px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        {/* Label */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '1.5rem',
        }}>
          <div style={{ width: '30px', height: '1px', background: 'rgba(218,121,39,0.6)' }} />
          <span style={{ color: '#ECA12C', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
            Our Scale
          </span>
          <div style={{ width: '30px', height: '1px', background: 'rgba(218,121,39,0.6)' }} />
        </div>

        {/* Big number */}
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(5rem, 12vw, 10rem)',
          fontWeight: 900,
          lineHeight: 0.9,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #DA7927 0%, #ECA12C 40%, #F1B415 60%, #ECA12C 80%, #DA7927 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundSize: '200% auto',
          animation: 'shimmer 4s linear infinite',
        }}>
          22 Million
        </div>

        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          color: 'rgba(255,255,255,0.9)',
          fontWeight: 400,
          fontStyle: 'italic',
          marginBottom: '2rem',
        }}>
          Kilograms of Premium Tobacco
        </div>

        <p style={{
          color: 'rgba(255,255,255,0.55)',
          fontSize: '1.05rem',
          lineHeight: 1.8,
          maxWidth: '700px',
          margin: '0 auto 3rem',
        }}>
          Every kilogram represents a farmer's livelihood, a family's sustenance, and our commitment to delivering only the finest quality to manufacturers worldwide. Innovation meets efficiency in our state-of-the-art processing facilities.
        </p>

        {/* CTA */}
        <a
          href="#sourcing"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
            color: '#fff',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            textDecoration: 'none',
            boxShadow: '0 10px 40px rgba(218,121,39,0.4)',
            textTransform: 'uppercase',
          }}
        >
          Explore Our Sourcing
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
