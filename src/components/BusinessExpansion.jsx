import { useRef, useEffect } from 'react'

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}

const expansionData = [
  {
    id: 'fruits',
    title: 'Dehydrated Fruits and Vegetables',
    location: 'Nashik, India',
    description: 'We believe in exploring new opportunities that align with our core values of innovation, sustainability, and community development, and have ventured into the processing of premium-grade fruit and vegetables at a plant especially set up in Nasik.',
    image: '/assets/shutterstock_1772000003-2.jpg'
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    location: 'Pan-India',
    description: 'We have ventured into the real estate industry to develop and lease commercial property to large corporations to provide for their industrial warehousing needs.\n\nWe are currently spread across Chennai, Guntur, Bangalore, Hyderabad, Vijayawada, Mumbai and Nellore.',
    image: '/assets/istockphoto-1044675932-612x612-1.jpg'
  }
]

function ExpansionBanner({ item, index }) {
  const ref = useReveal(0.2)
  const isEven = index % 2 === 0

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', display: 'flex', alignItems: 'center' }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Adds a nice parallax effect
      }} />

      {/* Overlay Gradient (Alternating direction based on even/odd) */}
      <div style={{
        position: 'absolute', inset: 0,
        background: isEven
          ? 'linear-gradient(135deg, rgba(40,47,129,0.9) 0%, rgba(20,20,20,0.7) 100%)'
          : 'linear-gradient(225deg, rgba(26,16,8,0.92) 0%, rgba(218,121,39,0.5) 100%)'
      }} />

      {/* Content */}
      <div
        ref={ref}
        style={{
          maxWidth: '1280px', margin: '0 auto', padding: '6rem 2rem',
          position: 'relative', zIndex: 1, width: '100%',
          opacity: 0, transform: 'translateY(30px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        <div style={{
          maxWidth: '650px',
          marginLeft: isEven ? '0' : 'auto',
          marginRight: isEven ? 'auto' : '0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #ECA12C)' }} />
            <span style={{ color: '#ECA12C', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase' }}>
              {item.location}
            </span>
          </div>

          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem',
          }}>
            {item.title}
          </h3>

          {item.description.split('\n\n').map((paragraph, i) => (
            <p key={i} style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.15rem',
              lineHeight: 1.8,
              marginBottom: i === 0 && item.description.includes('\n\n') ? '1.5rem' : '0'
            }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function BusinessExpansion() {
  return (
    <div style={{ background: '#faf7f2' }}>
      {/* Intro Header Section */}
      <section style={{ padding: '6rem 0 3rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
            <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
              Future Forward
            </span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            color: '#1a1008',
            lineHeight: 1.1,
            margin: 0
          }}>
            We are growing & expanding to new <br />
            <span style={{ color: '#DA7927', fontStyle: 'italic' }}>business opportunities</span>
          </h2>
        </div>
      </section>

      {/* Banner Blocks */}
      {expansionData.map((item, index) => (
        <ExpansionBanner key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}
