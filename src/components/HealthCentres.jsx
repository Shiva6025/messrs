import { useRef, useEffect } from 'react'

const services = [
  {
    icon: '🏥',
    title: 'General OPD',
    description: 'Daily outpatient consultations available for all community members, including farmers and their families.',
  },
  {
    icon: '👶',
    title: 'Maternal & Child Care',
    description: 'Dedicated services for expecting mothers and children, including vaccinations and nutrition programs.',
  },
  {
    icon: '💊',
    title: 'Free Medicines',
    description: 'Essential medications provided at no cost to partner farming communities throughout the year.',
  },
  {
    icon: '🔬',
    title: 'Diagnostic Services',
    description: 'Basic laboratory and diagnostic facilities to support timely detection and treatment.',
  },
  {
    icon: '🚑',
    title: 'Emergency Care',
    description: 'First-response emergency services and referral systems connecting villages to district hospitals.',
  },
  {
    icon: '🌿',
    title: 'Preventive Health',
    description: 'Regular health camps, awareness programs, and preventive screenings for chronic disease management.',
  },
]

export default function HealthCentres() {
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
    <section style={{ padding: '6rem 0', background: '#faf7f2' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          ref={ref}
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
                Healthcare Initiative
              </span>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
              fontWeight: 800,
              color: '#1a1008',
              marginBottom: '1rem',
            }}>
              Primary Health{' '}
              <span style={{ color: '#DA7927' }}>Centres</span>
            </h2>
            <p style={{ color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              We operate and support primary health centres across tobacco-growing villages, ensuring that the communities we depend on have access to quality healthcare — a fundamental commitment to their wellbeing.
            </p>
          </div>

          {/* Center stat banner */}
          <div style={{
            background: 'linear-gradient(135deg, #282F81 0%, #DA7927 100%)',
            borderRadius: '20px',
            padding: '2.5rem',
            marginBottom: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Background pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
            }} />

            {[
              { value: '15+', label: 'Health Centres' },
              { value: '5000+', label: 'Patients/Year' },
              { value: '25+', label: 'Medical Staff' },
              { value: '100%', label: 'Free for Farmers' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  position: 'relative',
                }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: '#fff',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Services grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {services.map((service, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: '18px',
                  padding: '1.75rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  display: 'flex',
                  gap: '1rem',
                  transition: 'all 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(218,121,39,0.15)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'rgba(218,121,39,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(218,121,39,0.1), rgba(218,121,39,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}>
                  {service.icon}
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: '#1a1008', fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                    {service.title}
                  </h4>
                  <p style={{ color: '#6b5a4a', fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
