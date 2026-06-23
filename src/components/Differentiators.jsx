import { useEffect, useRef } from 'react'

const differentiators = [
  {
    icon: (
      // Three overlapping rings — "people"
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
        <circle cx="14" cy="20" r="9" />
        <circle cx="20" cy="20" r="9" />
        <circle cx="26" cy="20" r="9" />
      </svg>
    ),
    title: 'People-driven culture',
    description: 'Ethos aligned to our people, our farmers and our customers.',
  },
  {
    icon: (
      // Target / crosshair — "infrastructure"
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
        <circle cx="20" cy="20" r="12" />
        <circle cx="20" cy="20" r="6" />
        <circle cx="20" cy="20" r="1.5" fill="#fff" />
        <line x1="20" y1="4" x2="20" y2="10" />
        <line x1="20" y1="30" x2="20" y2="36" />
        <line x1="4" y1="20" x2="10" y2="20" />
        <line x1="30" y1="20" x2="36" y2="20" />
      </svg>
    ),
    title: 'State-of-the-art infrastructure',
    description: 'Technologically resilient and automation for the future.',
  },
  {
    icon: (
      // Medal / ribbon — "quality"
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="16" r="9" />
        <path d="M14 23l-4 10 10-4 10 4-4-10" />
      </svg>
    ),
    title: 'Superior & Consistent quality',
    description: 'Constantly striving to deliver only the best and most superior quality products.',
  },
  {
    icon: (
      // Waves — "environmental"
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
        <path d="M6 14 Q13 9 20 14 Q27 19 34 14" />
        <path d="M6 20 Q13 15 20 20 Q27 25 34 20" />
        <path d="M6 26 Q13 21 20 26 Q27 31 34 26" />
      </svg>
    ),
    title: 'Environmentally conscious',
    description: 'Prioritizing climate action through resource optimization and regenerative practices.',
  },
  {
    icon: (
      // Smile / community — "socially responsible"
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
        <circle cx="20" cy="20" r="13" />
        <path d="M14 23 Q20 29 26 23" />
        <circle cx="15.5" cy="17" r="1.5" fill="#fff" />
        <circle cx="24.5" cy="17" r="1.5" fill="#fff" />
      </svg>
    ),
    title: 'Socially responsible organisation',
    description: 'Building a business that offers better working conditions and living standards for our people and our farmers.',
  },
]

function DiffCard({ item, index }) {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(36px)',
        transition: `opacity 0.65s ease ${index * 110}ms, transform 0.65s ease ${index * 110}ms`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0 0.5rem',
      }}
    >
      {/* Orange painted-circle icon */}
      <div style={{
        width: '88px',
        height: '88px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 38% 38%, #F4A625 0%, #DA7927 55%, #b85d0f 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
        boxShadow: '0 6px 24px rgba(218,121,39,0.35), inset 0 -4px 12px rgba(0,0,0,0.15)',
        position: 'relative',
        flexShrink: 0,
        // painted texture via pseudo-element emulated with layered bg
        backgroundImage:
          'radial-gradient(ellipse at 30% 28%, rgba(255,200,80,0.45) 0%, transparent 50%),' +
          'radial-gradient(ellipse at 70% 72%, rgba(140,60,0,0.25) 0%, transparent 50%),' +
          'radial-gradient(circle at 38% 38%, #F4A625 0%, #DA7927 55%, #b85d0f 100%)',
      }}>
        {item.icon}
      </div>

      <h3 style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '1.1rem',
        fontWeight: 700,
        color: '#1a1008',
        marginBottom: '0.6rem',
        lineHeight: 1.3,
      }}>
        {item.title}
      </h3>

      <p style={{
        color: '#6b5a4a',
        fontSize: '0.9rem',
        lineHeight: 1.7,
        margin: 0,
      }}>
        {item.description}
      </p>
    </div>
  )
}

export default function Differentiators() {
  const titleRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.2 }
    )
    if (titleRef.current) observer.observe(titleRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{
      padding: '6rem 0',
      background: '#FAFAF7',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle top rule */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.2), transparent)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Heading */}
        <div
          ref={titleRef}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
            <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
              Why Choose Us
            </span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#1a1008',
            marginBottom: '1rem',
          }}>
            What Sets Us Apart
          </h2>
          <p style={{ color: '#6b5a4a', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Eight decades of excellence anchored in quality, community and trust.
          </p>
        </div>

        {/* 5-card grid — 3 top, 2 centred bottom */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3rem 2rem',
        }}>
          {differentiators.slice(0, 3).map((item, i) => (
            <DiffCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Bottom row: 2 items centred */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '3rem 2rem',
          maxWidth: '66%',
          margin: '3rem auto 0',
        }}>
          {differentiators.slice(3).map((item, i) => (
            <DiffCard key={i + 3} item={item} index={i + 3} />
          ))}
        </div>
      </div>

      {/* Subtle bottom rule */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.2), transparent)',
      }} />
    </section>
  )
}
