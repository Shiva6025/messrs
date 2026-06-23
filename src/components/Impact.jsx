import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: '22 Million', unit: 'Kgs', label: 'Packed Storage Capacity', color: '#DA7927' },
  { value: '10 Million', unit: 'Kgs', label: 'Green Storage Capacity', color: '#ECA12C' },
  { value: '45 Million', unit: 'Kgs', label: 'Tobacco Processed Yearly', color: '#F1B415' },
  { value: '14 Tons', unit: 'Per Hour', label: 'High-grade Production Capacity', color: '#DA7927' },
  { value: '10 Tons', unit: 'Per Hour', label: 'Medium-grade Production Capacity', color: '#ECA12C' },
  { value: '8 Tons', unit: 'Per Hour', label: 'Low-grade Production Capacity', color: '#F1B415' },
]

function StatCard({ stat, delay }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.style.opacity = '1'
              ref.current.style.transform = 'translateY(0) scale(1)'
            }
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(30px) scale(0.97)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
        background: hovered
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? stat.color + '55' : 'rgba(218,121,39,0.15)'}`,
        borderRadius: '16px',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        cursor: 'default',
        transition: 'background 0.3s ease, border 0.3s ease, opacity 0.65s ease, transform 0.65s ease',
        backdropFilter: 'blur(8px)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Value */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
        fontWeight: 900,
        lineHeight: 1,
        marginBottom: '0.2rem',
        background: `linear-gradient(135deg, ${stat.color}, #F1B415)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        {stat.value}
      </div>

      {/* Unit */}
      <div style={{
        color: stat.color,
        fontWeight: 700,
        fontSize: '0.85rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '0.6rem',
        opacity: 0.9,
      }}>
        {stat.unit}
      </div>

      {/* Divider */}
      <div style={{
        width: '32px',
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${stat.color}80, transparent)`,
        margin: '0 auto 0.65rem',
      }} />

      {/* Label */}
      <div style={{
        color: 'rgba(255,255,255,0.65)',
        fontSize: '0.8rem',
        lineHeight: 1.4,
        letterSpacing: '0.02em',
      }}>
        {stat.label}
      </div>
    </div>
  )
}

export default function Impact() {
  const titleRef = useRef(null)

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
    if (titleRef.current) observer.observe(titleRef.current)
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
          border: '1px solid rgba(218,121,39,0.06)',
          transform: 'translate(-50%, -50%)',
          animation: `float ${8 + i * 2}s ease-in-out infinite ${i % 2 === 0 ? '' : 'reverse'}`,
        }} />
      ))}

      {/* Gold radial glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218,121,39,0.12) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(50px)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>

        {/* ── Heading ── */}
        <div
          ref={titleRef}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
            <div style={{ width: '30px', height: '1px', background: 'rgba(218,121,39,0.6)' }} />
            <span style={{ color: '#ECA12C', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
              Our Scale
            </span>
            <div style={{ width: '30px', height: '1px', background: 'rgba(218,121,39,0.6)' }} />
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#fff',
            marginBottom: '1.25rem',
          }}>
            Innovation meets{' '}
            <span style={{
              background: 'linear-gradient(90deg, #DA7927, #ECA12C, #F1B415)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Efficiency
            </span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            maxWidth: '640px',
            margin: '0 auto',
          }}>
            Every kilogram represents a farmer's livelihood and our commitment to delivering only
            the finest quality. State-of-the-art processing facilities powered by cutting-edge technology.
          </p>
        </div>

        {/* ── 6-stat grid: 3 × 2 ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          marginBottom: '3.5rem',
        }}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 90} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="/infrastructure"
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
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 50px rgba(218,121,39,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(218,121,39,0.4)' }}
          >
            Explore Our Infrastructure
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
