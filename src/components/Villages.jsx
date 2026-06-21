import { useRef, useEffect } from 'react'
const familyImg = '/assets/slide1-fam1.webp'

const programs = [
  {
    icon: '🌾',
    title: 'Agricultural Support',
    description: 'Providing seeds, fertilizers, and technical guidance to tobacco farmers to maximize yield and quality.',
  },
  {
    icon: '📚',
    title: 'Education Initiatives',
    description: 'Scholarships and school infrastructure support for children of farming families in our partner villages.',
  },
  {
    icon: '💧',
    title: 'Water Conservation',
    description: 'Drip irrigation systems and water management training to promote sustainable agricultural practices.',
  },
  {
    icon: '🤝',
    title: 'Fair Trade Pricing',
    description: 'Guaranteed minimum support prices that protect farmers from market volatility and ensure stable livelihoods.',
  },
]

export default function Villages() {
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
    <section style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #0d1440 0%, #1a0a02 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(218,121,39,0.08) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Left: Content */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#ECA12C', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
                Community First
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '1.25rem',
              lineHeight: 1.2,
            }}>
              Developing Tobacco-Growing{' '}
              <span style={{ color: '#ECA12C' }}>Villages</span>
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Our responsibility extends far beyond business. We actively invest in the communities that partner with us, creating sustainable ecosystems where farmers, their families, and entire villages thrive together.
            </p>

            {/* Program grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {programs.map((prog, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(218,121,39,0.2)',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    transition: 'all 0.3s',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(218,121,39,0.12)'
                    e.currentTarget.style.borderColor = 'rgba(218,121,39,0.4)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(218,121,39,0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{prog.icon}</div>
                  <h4 style={{ color: '#ECA12C', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.4rem' }}>
                    {prog.title}
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', lineHeight: 1.6, margin: 0 }}>
                    {prog.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(218,121,39,0.2)' }}>
              {[
                { value: '100+', label: 'Villages' },
                { value: '1000+', label: 'Families' },
                { value: '30+', label: 'Years of CSR' },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 800, color: '#ECA12C' }}>
                    {stat.value}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div style={{ position: 'relative' }}>
            {/* Glow */}
            <div style={{
              position: 'absolute',
              inset: '-30px',
              background: 'radial-gradient(circle, rgba(218,121,39,0.2) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }} />

            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              border: '1px solid rgba(218,121,39,0.2)',
            }}>
              <img
                src={familyImg}
                alt="Farming Family"
                style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'top' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(13,20,64,0.7) 0%, transparent 60%)',
              }} />

              {/* Bottom text */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
              }}>
                <div style={{ color: '#ECA12C', fontSize: '0.7rem', letterSpacing: '0.12em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                  Our Partners
                </div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
                  Farming Families of South India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
