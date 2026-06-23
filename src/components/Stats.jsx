import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, target, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  {
    value: 22,
    suffix: 'M+',
    unit: 'Kgs',
    label: 'Premium Tobacco Traded',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    color: '#DA7927',
  },
  {
    value: 80,
    suffix: '+',
    unit: 'Years',
    label: 'Of Trusted Excellence',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    color: '#ECA12C',
  },
  {
    value: 100,
    suffix: '+',
    unit: 'Villages',
    label: 'Farming Communities Served',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12L12 4l9 8" />
        <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
    color: '#ECA12C',
  },
]

export default function Stats() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a1008 0%, #282F81 50%, #1a1008 100%)',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(218,121,39,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(40,47,129,0.2) 0%, transparent 50%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '3rem 2rem',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid rgba(218,121,39,0.15)' : 'none',
                position: 'relative',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(218,121,39,0.05)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {/* Icon */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${stat.color}22, ${stat.color}44)`,
                border: `1px solid ${stat.color}44`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: stat.color,
              }}>
                {stat.icon}
              </div>

              {/* Value */}
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '3.5rem',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1,
                marginBottom: '0.25rem',
              }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ color: stat.color, fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                {stat.unit}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
