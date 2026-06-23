import { useEffect, useRef, useState } from 'react'

const leaders = [
  {
    image: '/assets/somasundaram.webp',
    name: 'Sri. Polisetty Somasundaram',
    role: 'Founder',
    tenure: '1943 – 1963',
    color: '#DA7927',
  },
  {
    image: '/assets/Sri-Polisetty-Srihari-Prasada-Rao.webp',
    name: 'Polisetty Sri Hariprasada Rao',
    role: 'Chairman',
    tenure: '1961 – 2020',
    color: '#282F81',
  },
  {
    image: '/assets/Sri-Polisetty-Shyam-Sundar.webp',
    name: 'Polisetty Shyam Sundar',
    role: 'Managing Director',
    tenure: '1991 – Present',
    color: '#ECA12C',
  },
]

function useReveal(threshold = 0.15, delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0) scale(1)'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])
  return ref
}

function LeaderCard({ leader, delay }) {
  const ref = useReveal(0.1, delay)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(40px) scale(0.97)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Portrait */}
      <div
        style={{
          position: 'relative',
          marginBottom: '1.5rem',
          cursor: 'default',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Glow ring */}
        <div style={{
          position: 'absolute',
          inset: '-6px',
          borderRadius: '50%',
          border: `2px solid ${leader.color}`,
          opacity: hovered ? 1 : 0.35,
          transition: 'opacity 0.35s ease',
        }} />
        {/* Outer accent ring */}
        <div style={{
          position: 'absolute',
          inset: '-14px',
          borderRadius: '50%',
          border: `1px solid ${leader.color}40`,
          opacity: hovered ? 0.9 : 0.25,
          transition: 'opacity 0.35s ease',
        }} />
        {/* Photo */}
        <div style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: hovered
            ? `0 20px 50px ${leader.color}50, 0 0 0 3px ${leader.color}33`
            : `0 10px 30px rgba(0,0,0,0.15)`,
          transition: 'box-shadow 0.35s ease',
          position: 'relative',
          zIndex: 1,
        }}>
          <img
            src={leader.image}
            alt={leader.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.4s ease',
            }}
          />
        </div>
        {/* Tenure badge */}
        <div style={{
          position: 'absolute',
          bottom: '-8px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: leader.color,
          color: '#fff',
          borderRadius: '50px',
          padding: '3px 14px',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          whiteSpace: 'nowrap',
          boxShadow: `0 4px 12px ${leader.color}60`,
          zIndex: 2,
        }}>
          {leader.tenure}
        </div>
      </div>

      {/* Name & role */}
      <div style={{ marginTop: '0.75rem' }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.05rem',
          fontWeight: 700,
          color: '#1a1008',
          marginBottom: '0.3rem',
          lineHeight: 1.3,
        }}>
          {leader.name}
        </div>
        <div style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: leader.color,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          {leader.role}
        </div>
      </div>
    </div>
  )
}

export default function Legacy() {
  const headRef  = useReveal(0.15)
  const quoteRef = useReveal(0.15, 100)
  const linkRef  = useReveal(0.15, 200)

  return (
    <section style={{
      padding: '7rem 0',
      background: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle watermark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Playfair Display', serif",
        fontSize: '18vw',
        fontWeight: 900,
        color: 'rgba(218,121,39,0.035)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        lineHeight: 1,
      }}>
        80
      </div>

      {/* Top gold line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, #DA7927 30%, #ECA12C 50%, #DA7927 70%, transparent 100%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>

        {/* ── Section heading ── */}
        <div
          ref={headRef}
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            opacity: 0,
            transform: 'translateY(30px) scale(1)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
            <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
              Est. 1943
            </span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            color: '#1a1008',
            lineHeight: 1.15,
            marginBottom: 0,
          }}>
            80 Years of Sustained{' '}
            <span style={{
              background: 'linear-gradient(90deg, #DA7927, #ECA12C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Excellence
            </span>
          </h2>
        </div>

        {/* ── Two-column: quote left, leaders right ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
          marginBottom: '1rem',
        }}>

          {/* LEFT — text content */}
          <div
            ref={quoteRef}
            style={{
              opacity: 0,
              transform: 'translateY(30px) scale(1)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
            }}
          >
            {/* Gold left-border quote */}
            <div style={{
              borderLeft: '4px solid #DA7927',
              paddingLeft: '1.5rem',
              marginBottom: '2rem',
            }}>
              <p style={{
                color: '#3d2c1e',
                fontSize: '1.05rem',
                lineHeight: 1.85,
                fontStyle: 'italic',
                margin: 0,
              }}>
                "Delivered 80 years of sustained Excellence by building a socially
                responsible organization delivering value to all stakeholders
                associated in the agri-value chain of tobacco processing."
              </p>
            </div>

            <p style={{
              color: '#6b5a4a',
              fontSize: '1rem',
              lineHeight: 1.85,
              marginBottom: '2rem',
            }}>
              We are committed to the principles of <strong style={{ color: '#1a1008' }}>Excellence</strong> and{' '}
              <strong style={{ color: '#1a1008' }}>Integrity</strong> and believe in delivering only
              the highest quality products to our customers.
            </p>

            {/* Divider */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, #DA792740, transparent)', marginBottom: '2rem' }} />

            {/* Learn more link */}
            <div ref={linkRef} style={{ opacity: 0, transform: 'translateY(20px) scale(1)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
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
                Learn more about Polisetty
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT — three leader portraits */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {leaders.map((leader, i) => (
              <LeaderCard key={i} leader={leader} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.25), transparent)',
      }} />
    </section>
  )
}
