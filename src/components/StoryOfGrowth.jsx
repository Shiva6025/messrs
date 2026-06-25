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

const storyData = [
  {
    id: 'past',
    label: 'The Past',
    title: 'How it began',
    content: (
      <>
        <p style={{ color: '#6b5a4a', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
          Sri. Polisetty Somasundaram, who began his career as a merchant and exporter of Indian leaf tobacco, founded the company in 1943.
        </p>
        <p style={{ color: '#6b5a4a', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
          The company grew rapidly over 80 years, expanding into the large and extensive enterprise it is today, with multiple processing plants and storage warehouses.
        </p>
        <p style={{ color: '#6b5a4a', fontSize: '1.1rem', lineHeight: 1.8 }}>
          Sri. Polisetty Somasundaram also instilled a spirit of dynamism and entrepreneurial drive that is nurtured by the current generations.
        </p>
      </>
    ),
    image: '/assets/IMG_1787-1-1.jpg'
  },
  {
    id: 'present',
    label: 'The Present',
    title: 'Making it happen',
    content: (
      <>
        <p style={{ color: '#6b5a4a', fontSize: '1.1rem', lineHeight: 1.8 }}>
          Polisetty continues to soar to new heights under the able leadership of Mr. Shyam Sundar, the son of Mr. Hari Prasada Rao. Having worked closely with his father, he infused a new sense of vibrancy and vigour into the organisation. Together, they made a dynamic team and continuously invested in innovative technology to take Polisetty to even greater heights.
        </p>
      </>
    ),
    image: '/assets/Sri-Polisetty-Shyam-Sundar.webp'
  },
  {
    id: 'future',
    label: 'The Future',
    title: 'Tapping future potential',
    content: (
      <>
        <p style={{ color: '#6b5a4a', fontSize: '1.1rem', lineHeight: 1.8 }}>
          The future brims with potential, and Polisetty endeavours to establish a strong international base to grow and capture newer markets. Never shying from embracing advanced technology, Polisetty envisions a future brimming with vast and wide business opportunities.
        </p>
      </>
    ),
    image: '/assets/KDP-Threshing-Line.jpg'
  }
]

function StorySection({ item, index }) {
  const ref = useReveal(0.2)
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
        marginBottom: index !== storyData.length - 1 ? '8rem' : '0',
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}
    >
      {/* Text Content */}
      <div style={{ order: isEven ? 1 : 2 }}>
        <div style={{ display: 'inline-block', background: 'rgba(218,121,39,0.1)', padding: '0.4rem 1rem', borderRadius: '50px', color: '#DA7927', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {item.label}
        </div>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 3.5vw, 3rem)',
          fontWeight: 800,
          color: '#1a1008',
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}>
          {item.title}
        </h3>
        {item.content}
      </div>

      {/* Image Content */}
      <div style={{ order: isEven ? 2 : 1, position: 'relative' }}>
        <div style={{
          position: 'absolute',
          inset: isEven ? '20px -20px -20px 20px' : '20px 20px -20px -20px',
          background: 'rgba(218,121,39,0.1)',
          borderRadius: '30px',
          zIndex: 0
        }} />
        <div style={{
          position: 'relative',
          borderRadius: '30px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
          zIndex: 1,
          border: '1px solid rgba(255,255,255,0.5)',
          aspectRatio: '4/3'
        }}>
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      </div>
    </div>
  )
}

export default function StoryOfGrowth() {
  return (
    <section style={{ padding: '3rem 0 6rem', background: '#faf7f2', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
            <span style={{ color: '#DA7927', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
              Our Story of Growth
            </span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1a1008', margin: 0 }}>
            A Journey Through Time
          </h2>
        </div>

        {/* Alternating Layout Sections */}
        <div>
          {storyData.map((item, index) => (
            <StorySection key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
