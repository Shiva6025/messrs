import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StoryOfGrowth from '../components/StoryOfGrowth'
import MeetOurTeam from '../components/MeetOurTeam'
import BusinessExpansion from '../components/BusinessExpansion'

const heroBg = '/assets/10262021000554n17-e1707828388753.jpg'
const familyImg = '/assets/slide1-fam1.png'
const shyamSundar = '/assets/Sri-Polisetty-Shyam-Sundar.webp'
const srihari = '/assets/Sri-Polisetty-Srihari-Prasada-Rao.webp'
const somasundaram = '/assets/somasundaram.webp'

/* ── Intersection-observer reveal hook ───────────────────────── */
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

/* ── Timeline milestones ─────────────────────────────────────── */
const milestones = [
  {
    year: '1940',
    title: 'Foundation',
    desc: 'Sri Polisetty Somasundaram establishes the firm in Guntur on values of trust, quality, and integrity.',
    color: '#282F81',
  },
  {
    year: '1965',
    title: 'Regional Expansion',
    desc: 'Operations scale to cover all major tobacco-growing districts of Andhra Pradesh, building deep farmer networks.',
    color: '#DA7927',
  },
  {
    year: '1985',
    title: 'Second Generation',
    desc: 'Sri P. Srihari Prasada Rao takes helm, modernising trading practices and growing to over 5 million kg annually.',
    color: '#ECA12C',
  },
  {
    year: '2000',
    title: 'Community Programmes',
    desc: 'Launch of health centres and village development initiatives across 100+ farming communities.',
    color: '#282F81',
  },
  {
    year: '2010',
    title: 'Third Generation',
    desc: 'Sri Polisetty Shyam Sundar joins leadership, driving digital sourcing, sustainability and global outreach.',
    color: '#DA7927',
  },
  {
    year: 'Today',
    title: '22 M+ kg Traded',
    desc: 'Among India\'s most trusted tobacco merchants, serving global markets from Guntur\'s golden heartland.',
    color: '#ECA12C',
  },
]

/* ── Core Values ─────────────────────────────────────────────── */
const values = [
  {
    icon: '⚖️',
    title: 'Ethical business practices',
    desc: 'We prioritize transparency, integrity, and honesty in all our operations.',
  },
  {
    icon: '🏆',
    title: 'High-quality standards',
    desc: 'We aim for excellence in everything we do and always go the extra mile for our customers.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'We strive to develop products that meet the changing needs and preferences of our customers.',
  },
  {
    icon: '🤝',
    title: 'People-focused',
    desc: 'We believe in nurturing and rewarding our people, who are our biggest resource.',
  },
]

/* ── TimelineCard ─────────────────────────────────────────────── */
function TimelineCard({ milestone, index }) {
  const ref = useReveal(0.1)
  const isLeft = index % 2 === 0
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 60px 1fr',
        alignItems: 'center',
        marginBottom: '2.5rem',
      }}
    >
      {/* Left side */}
      <div style={{ textAlign: isLeft ? 'right' : 'left', paddingRight: isLeft ? '2rem' : 0, paddingLeft: isLeft ? 0 : '2rem' }}>
        {isLeft && (
          <div
            ref={ref}
            style={{
              display: 'inline-block',
              background: '#fff',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
              border: `1px solid ${milestone.color}22`,
              opacity: 0,
              transform: 'translateY(30px)',
              transition: `opacity 0.7s ease ${index * 80}ms, transform 0.7s ease ${index * 80}ms`,
            }}
          >
            <div className="num-font" style={{ color: milestone.color, fontSize: '1.5rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, marginBottom: '0.25rem' }}>
              {milestone.year}
            </div>
            <div style={{ fontWeight: 700, color: '#1a1008', fontSize: '1rem', marginBottom: '0.5rem' }}>{milestone.title}</div>
            <p style={{ color: '#7a6a5a', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{milestone.desc}</p>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <div
          style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: milestone.color,
            boxShadow: `0 0 0 5px ${milestone.color}33`,
            zIndex: 2,
          }}
        />
      </div>

      {/* Right side */}
      <div style={{ textAlign: 'left', paddingLeft: !isLeft ? '2rem' : 0, paddingRight: !isLeft ? 0 : '2rem' }}>
        {!isLeft && (
          <div
            ref={ref}
            style={{
              display: 'inline-block',
              background: '#fff',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
              border: `1px solid ${milestone.color}22`,
              opacity: 0,
              transform: 'translateY(30px)',
              transition: `opacity 0.7s ease ${index * 80}ms, transform 0.7s ease ${index * 80}ms`,
            }}
          >
            <div className="num-font" style={{ color: milestone.color, fontSize: '1.5rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, marginBottom: '0.25rem' }}>
              {milestone.year}
            </div>
            <div style={{ fontWeight: 700, color: '#1a1008', fontSize: '1rem', marginBottom: '0.5rem' }}>{milestone.title}</div>
            <p style={{ color: '#7a6a5a', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{milestone.desc}</p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── ValueCard ───────────────────────────────────────────────── */
function ValueCard({ value, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
        border: '1px solid rgba(218,121,39,0.12)',
        opacity: 0,
        transform: 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        textAlign: 'center',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(218,121,39,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.06)'
      }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{value.icon}</div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#1a1008', marginBottom: '0.75rem' }}>
        {value.title}
      </h3>
      <p style={{ color: '#7a6a5a', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{value.desc}</p>
    </div>
  )
}

/* ── LeaderCard ──────────────────────────────────────────────── */
const leaders = [
  {
    name: 'Sri Polisetty Somasundaram',
    role: 'Founder & Patriarch',
    era: '1940 — 1985',
    image: somasundaram,
    quote: '"Build trust first, and everything else will follow."',
    accentColor: '#282F81',
  },
  {
    name: 'Sri P. Srihari Prasada Rao',
    role: 'Managing Director',
    era: '1985 — Present',
    image: srihari,
    quote: '"Quality is not an act — it is a habit built over generations."',
    accentColor: '#DA7927',
    featured: true,
  },
  {
    name: 'Sri Polisetty Shyam Sundar',
    role: 'Director & Next Generation',
    era: '2010 — Present',
    image: shyamSundar,
    quote: '"Our roots are in the soil; our vision reaches every corner of the world."',
    accentColor: '#ECA12C',
  },
]

function LeaderCard({ leader, delay }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      style={{
        background: leader.featured
          ? 'linear-gradient(145deg, #282F81 0%, #1a1008 100%)'
          : '#fff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: leader.featured
          ? '0 30px 80px rgba(40,47,129,0.35)'
          : '0 8px 40px rgba(0,0,0,0.07)',
        border: leader.featured
          ? '1px solid rgba(218,121,39,0.3)'
          : '1px solid rgba(0,0,0,0.05)',
        opacity: 0,
        transform: 'translateY(40px)',
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
        position: 'relative',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${leader.accentColor}, transparent)` }} />

      {leader.featured && (
        <div style={{
          position: 'absolute', top: '20px', right: '20px',
          background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
          borderRadius: '50px', padding: '3px 12px',
          fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
          color: '#fff', textTransform: 'uppercase',
        }}>
          Current Leadership
        </div>
      )}

      <div style={{ padding: '2rem', textAlign: 'center' }}>
        {/* Avatar */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
          <div style={{
            position: 'absolute', inset: '-6px', borderRadius: '50%',
            background: `conic-gradient(${leader.accentColor}, transparent, ${leader.accentColor})`,
            opacity: 0.6,
          }} />
          <div style={{
            width: '130px', height: '130px', borderRadius: '50%',
            overflow: 'hidden', border: `3px solid ${leader.accentColor}`,
            position: 'relative', zIndex: 1,
          }}>
            <img src={leader.image} className="no-reveal" alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Era */}
        <div style={{
          display: 'inline-block',
          background: `${leader.accentColor}18`,
          border: `1px solid ${leader.accentColor}44`,
          borderRadius: '50px', padding: '2px 10px',
          fontSize: '0.65rem', color: leader.accentColor,
          fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.75rem',
        }}>
          {leader.era}
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.2rem', fontWeight: 700,
          color: leader.featured ? '#fff' : '#1a1008',
          marginBottom: '0.25rem',
        }}>
          {leader.name}
        </h3>

        <div style={{
          color: leader.accentColor, fontSize: '0.78rem',
          fontWeight: 600, letterSpacing: '0.05em',
          textTransform: 'uppercase', marginBottom: '1.25rem',
        }}>
          {leader.role}
        </div>

        <p style={{
          color: leader.featured ? 'rgba(255,255,255,0.65)' : '#7a6a5a',
          fontSize: '0.88rem', lineHeight: 1.7,
          fontStyle: 'italic', margin: 0,
        }}>
          {leader.quote}
        </p>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT US PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function AboutUs() {
  /* hero entrance animation */
  const heroTextRef = useRef(null)
  useEffect(() => {
    const el = heroTextRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
    window.scrollTo(0, 0)
  }, [])

  const storyRef = useReveal()
  const valuesRef = useReveal()
  const leaderRef = useReveal()
  const ctaRef = useReveal()

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#faf7f2', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover', backgroundPosition: 'center top',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }} />

        {/* Dark Overlay (matching Infrastructure style) */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(10,10,30,0.88) 0%, rgba(40,47,129,0.7) 40%, rgba(0,0,0,0.55) 100%)',
          zIndex: 1
        }} />

        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '15%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(218,121,39,0.15) 0%, transparent 70%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,161,44,0.1) 0%, transparent 70%)', zIndex: 1 }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10, paddingTop: '100px', width: '100%' }}>
          <div ref={heroTextRef} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.5rem, 7vw, 5rem)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '1.5rem'
            }}>
              Since{' '}
              <span className="num-font" style={{
                fontFamily: "'Oswald', sans-serif",
                background: 'linear-gradient(90deg, #DA7927, #ECA12C)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                1943
              </span>
            </h1>

            <div style={{
              width: '100px',
              height: '100px',
              background: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              marginBottom: '2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              border: '2px solid rgba(218,121,39,0.3)'
            }}>
              <img src="/assets/pol-logo.gif" className="no-reveal" alt="Polisetty Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.15rem',
              lineHeight: 1.8,
              maxWidth: '650px',
              fontWeight: 400
            }}>
              Messrs Polisetty Somasundaram is one of the largest Tobacco Processors in India, starting as a trading and exporting business for Indian tobacco leaves. Our founder, Sri. Polisetty Somasundaram, established a solid foundation which set the base for our company’s success.
            </p>
          </div>
        </div>

        {/* Scroll down indicator */}
        {/* <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', zIndex: 10
        }}>
          <span>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(218,121,39,0.8), transparent)', animation: 'float 2s ease-in-out infinite' }} />
        </div> */}
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#fff', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#1a1008',
              marginBottom: '1.5rem'
            }}>
              Overview
            </h2>
            <p style={{
              color: '#6b5a4a',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              marginBottom: '4rem'
            }}>
              With strong infrastructural support, we are among the largest tobacco exporters in India, consistently delivering high-quality products to our customers across the globe. We take great pride in offering the best products to our customers, who are situated in 56 different countries.
            </p>

            {/* Stats Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              marginBottom: '1rem',
              padding: '2.5rem',
              background: '#faf7f2',
              borderRadius: '20px',
              border: '1px solid rgba(218,121,39,0.15)'
            }}>
              {[
                { value: '130+', label: 'Permanent Staff' },
                { value: '600+', label: 'Seasonal Labour Force' },
                { value: '13', label: 'Storage Warehouses' },
                { value: '2', label: 'Processing Plants' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="num-font" style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#DA7927',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    color: '#1a1008',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────── */}
      <StoryOfGrowth />

      {/* ── TIMELINE ──────────────────────────────────────────── */}
      {/* <section style={{ padding: '6rem 0', background: '#faf7f2', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontFamily: "'Playfair Display', serif", fontSize: '20vw', fontWeight: 900,
          color: 'rgba(218,121,39,0.04)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none',
        }}>
          SINCE 1940
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Our Journey</span>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#1a1008', marginBottom: '1rem' }}>
              Eight Decades of{' '}
              <span style={{ color: '#DA7927' }}>Milestones</span>
            </h2>
          </div>

          <div style={{
            position: 'absolute', top: '13rem', bottom: '3rem', left: '50%',
            width: '2px', background: 'linear-gradient(to bottom, #DA7927, rgba(218,121,39,0.1))',
            transform: 'translateX(-50%)',
          }} />

          {milestones.map((m, i) => (
            <TimelineCard key={i} milestone={m} index={i} />
          ))}
        </div>
      </section> */}

      <section style={{ padding: '6rem 0', background: '#fff', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.3), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            ref={valuesRef}
            style={{ textAlign: 'center', marginBottom: '3.5rem', opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>What Drives Us</span>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#1a1008', marginBottom: '1rem' }}>
              Values That{' '}
              <span style={{ color: '#DA7927' }}>Guide Us</span>
            </h2>
            <p style={{ color: '#7a6a5a', fontSize: '1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Principles passed down through three generations that continue to shape every decision we make.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <ValueCard key={i} value={v} delay={i * 100} />
            ))}
          </div>
        </div>

        <div style={{
          marginTop: '4rem',
          background: 'linear-gradient(135deg, #282F81 0%, #1a1008 100%)',
          padding: '3rem 2rem',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(218,121,39,0.15) 0%, transparent 70%)' }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#DA7927', fontFamily: "'Playfair Display', serif" }}>"</div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)', color: '#fff', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
              We are a People-driven Organisation and hold trust in our team.
            </p>
            <div style={{ color: '#ECA12C', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
              — Sri Polisetty Somasundaram, Founder
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET OUR TEAM ──────────────────────────────────────── */}
      <MeetOurTeam />

      {/* ── BUSINESS EXPANSION ─────────────────────────────────── */}
      <BusinessExpansion />

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #DA7927, #ECA12C)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <div
          ref={ctaRef}
          style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Partner With a Legacy of Trust
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Whether you're a buyer, a farmer, or an investor — we believe in building relationships that last generations. Let's start a conversation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              style={{
                background: '#fff', color: '#DA7927', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                padding: '0.875rem 2.25rem', borderRadius: '50px',
                fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em',
                textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)' }}
            >
              Get in Touch
            </button>
            <a
              href="/"
              style={{
                background: 'rgba(255,255,255,0.15)', color: '#fff',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '0.875rem 2.25rem', borderRadius: '50px',
                fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em',
                textDecoration: 'none', backdropFilter: 'blur(10px)',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
