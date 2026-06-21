import { useEffect, useRef } from 'react'
const shyamSundar = '/assets/Sri-Polisetty-Shyam-Sundar.webp'
const srihari = '/assets/Sri-Polisetty-Srihari-Prasada-Rao.webp'
const somasundaram = '/assets/somasundaram.webp'

const leaders = [
  {
    name: 'Sri Polisetty Somasundaram',
    role: 'Founder & Patriarch',
    era: '1940 — 1985',
    image: somasundaram,
    description: 'The visionary founder who established the firm on principles of integrity and excellence, laying the foundation for eight decades of trusted service.',
    legacy: 'Foundation Builder',
    accentColor: '#282F81',
  },
  {
    name: 'Sri P. Srihari Prasada Rao',
    role: 'Managing Director',
    era: '1985 — Present',
    image: srihari,
    description: 'Led the company\'s expansion across India with an unwavering commitment to quality and farmer welfare, scaling operations to 22 million kgs annually.',
    legacy: 'Growth Architect',
    accentColor: '#DA7927',
    featured: true,
  },
  {
    name: 'Sri Polisetty Shyam Sundar',
    role: 'Director & Next Generation',
    era: '2010 — Present',
    image: shyamSundar,
    description: 'Carrying forward the family legacy with modern innovations in tobacco sourcing, sustainability and community development programs.',
    legacy: 'Legacy Carrier',
    accentColor: '#ECA12C',
  },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

function LeaderCard({ leader, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
        background: leader.featured
          ? 'linear-gradient(135deg, #282F81 0%, #1a1008 100%)'
          : 'linear-gradient(135deg, #fff 0%, #faf7f2 100%)',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: leader.featured
          ? '0 30px 80px rgba(218,121,39,0.3)'
          : '0 8px 40px rgba(0,0,0,0.08)',
        border: leader.featured ? '1px solid rgba(218,121,39,0.3)' : '1px solid rgba(0,0,0,0.05)',
        transform: leader.featured ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      {/* Featured badge */}
      {leader.featured && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
          borderRadius: '50px',
          padding: '4px 12px',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: '#fff',
          textTransform: 'uppercase',
          zIndex: 2,
        }}>
          Current Leadership
        </div>
      )}

      {/* Top accent bar */}
      <div style={{
        height: '4px',
        background: `linear-gradient(90deg, ${leader.accentColor}, transparent)`,
      }} />

      {/* Image area */}
      <div style={{
        position: 'relative',
        padding: '2rem 2rem 0',
        display: 'flex',
        justifyContent: 'center',
      }}>
        {/* Glow behind photo */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${leader.accentColor}44 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }} />

        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: `3px solid ${leader.accentColor}`,
          boxShadow: `0 8px 30px ${leader.accentColor}44`,
          position: 'relative',
          zIndex: 1,
        }}>
          <img
            src={leader.image}
            alt={leader.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem 2rem 2rem' }}>
        {/* Era badge */}
        <div style={{
          display: 'inline-block',
          background: `${leader.accentColor}18`,
          border: `1px solid ${leader.accentColor}44`,
          borderRadius: '50px',
          padding: '2px 10px',
          fontSize: '0.65rem',
          color: leader.accentColor,
          fontWeight: 600,
          letterSpacing: '0.1em',
          marginBottom: '0.75rem',
        }}>
          {leader.era}
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.25rem',
          fontWeight: 700,
          color: leader.featured ? '#fff' : '#1a1008',
          marginBottom: '0.25rem',
          lineHeight: 1.3,
        }}>
          {leader.name}
        </h3>

        <div style={{
          color: leader.accentColor,
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          {leader.role}
        </div>

        <p style={{
          color: leader.featured ? 'rgba(255,255,255,0.7)' : '#5a4a3a',
          fontSize: '0.875rem',
          lineHeight: 1.7,
          marginBottom: '1.25rem',
        }}>
          {leader.description}
        </p>

        {/* Legacy tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.75rem',
          color: leader.featured ? 'rgba(255,255,255,0.5)' : '#8a7a6a',
        }}>
          <div style={{ width: '20px', height: '1px', background: leader.accentColor }} />
          {leader.legacy}
        </div>
      </div>
    </div>
  )
}

export default function Leadership() {
  const titleRef = useReveal()

  return (
    <section id="leadership" style={{ padding: '6rem 0', background: '#faf7f2', position: 'relative' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.3), transparent)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
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
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '1rem',
          }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
            <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
              80 Years of Excellence
            </span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            color: '#1a1008',
            marginBottom: '1rem',
          }}>
            Three Generations,{' '}
            <span style={{ color: '#DA7927' }}>One Vision</span>
          </h2>
          <p style={{ color: '#6b5a4a', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            A family legacy built on unwavering commitment to quality, trust, and community welfare.
          </p>
        </div>

        {/* Leader cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', alignItems: 'start' }}>
          {leaders.map((leader, i) => (
            <LeaderCard key={i} leader={leader} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
