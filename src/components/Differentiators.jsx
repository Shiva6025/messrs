import { useEffect, useRef } from 'react'

const differentiators = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Uncompromising Quality',
    description: 'Rigorous selection and grading processes ensure only the finest tobacco leaves reach our clients, meeting international standards.',
    stat: '100%',
    statLabel: 'Quality Assured',
    color: '#282F81',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: 'Farmer Partnerships',
    description: 'We work directly with farming communities, providing fair pricing, agricultural guidance, and welfare programs for their families.',
    stat: '1000+',
    statLabel: 'Partner Farmers',
    color: '#DA7927',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'Global Standards',
    description: 'Our tobacco meets the highest international specifications, trusted by manufacturers worldwide for consistent quality and reliability.',
    stat: '5+',
    statLabel: 'Countries Served',
    color: '#ECA12C',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Community Development',
    description: 'From primary health centres to educational support, we invest deeply in the wellbeing of the villages that sustain our operations.',
    stat: '15+',
    statLabel: 'Health Centres',
    color: '#282F81',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Innovation & Efficiency',
    description: 'Modern curing techniques and precision grading technology blend seamlessly with decades of traditional expertise.',
    stat: '22M',
    statLabel: 'KGs Per Season',
    color: '#DA7927',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    title: 'Trusted for 80 Years',
    description: 'Our enduring reputation has been earned through consistent delivery, transparency, and relationships built over generations.',
    stat: '80+',
    statLabel: 'Years of Trust',
    color: '#ECA12C',
  },
]

function DiffCard({ item, index }) {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0) scale(1)'
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
        transform: 'translateY(30px) scale(0.97)',
        transition: `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms`,
        background: '#fff',
        borderRadius: '20px',
        padding: '2rem',
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms, box-shadow 0.3s ease`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 20px 60px ${item.color}22`
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.border = `1px solid ${item.color}33`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.border = '1px solid rgba(0,0,0,0.06)'
      }}
    >
      {/* Corner accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60px',
        height: '60px',
        background: `linear-gradient(225deg, ${item.color}18, transparent)`,
        borderRadius: '0 20px 0 60px',
      }} />

      {/* Icon */}
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '16px',
        background: `linear-gradient(135deg, ${item.color}15, ${item.color}30)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: item.color,
        marginBottom: '1.25rem',
      }}>
        {item.icon}
      </div>

      {/* Stat badge */}
      <div style={{
        display: 'inline-block',
        background: `${item.color}12`,
        border: `1px solid ${item.color}30`,
        borderRadius: '50px',
        padding: '2px 10px',
        marginBottom: '1rem',
      }}>
        <span style={{ color: item.color, fontWeight: 800, fontSize: '0.9rem' }}>{item.stat}</span>
        <span style={{ color: item.color, fontSize: '0.65rem', marginLeft: '4px', opacity: 0.8 }}>{item.statLabel}</span>
      </div>

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.125rem',
        fontWeight: 700,
        color: '#1a1008',
        marginBottom: '0.75rem',
      }}>
        {item.title}
      </h3>

      <p style={{ color: '#6b5a4a', fontSize: '0.875rem', lineHeight: 1.7 }}>
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
      background: 'linear-gradient(180deg, #faf7f2 0%, #f5f0e8 100%)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
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
            Discover What Sets Us Apart
          </h2>
          <p style={{ color: '#6b5a4a', fontSize: '1.05rem', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
            Eight decades of excellence anchored in quality, community and trust.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}>
          {differentiators.map((item, i) => (
            <DiffCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
