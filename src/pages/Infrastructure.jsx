import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Asset paths ──────────────────────────────────────────────── */
const ASSETS = {
  threshingLine:       '/assets/KDP-Threshing-Line.jpg',
  feedingTables:       '/assets/KDP-Feeding-Tables-e1707826027775.jpg',
  solarPanels:         '/assets/Picture3-e1707827227614.png',
  sortingLine:         '/assets/Picture5.jpg',
  packagingLine:       '/assets/Picture7.jpg',
  dsc0387:             '/assets/DSC_0387-1-scaled.jpg',
  redCylinders:        '/assets/Screenshot-2023-12-20-at-14.54.19.png',
  technofour:          '/assets/Screenshot-2023-12-20-at-15.04.37-1.png',
  heliusSorter:        '/assets/Screenshot-2023-12-20-at-15.34.21.png',
  conveyorBelt:        '/assets/Screenshot-2023-12-20-at-15.51.16.png',
  threshingMachine:    '/assets/Screenshot-2024-01-10-at-11.33.12.png',
  warehouse:           '/assets/Screenshot-2024-01-10-at-11.33.27.png',
  tobaccoBales:        '/assets/10262021000554n17-e1707828388753.jpg',
  foundingPlaque:      '/assets/IMG_1787-1-1.jpg',
  facilityBuilding:    '/assets/istockphoto-1044675932-612x612-1.jpg',
  heroBg:              '/assets/PHOTO-2023-11-29-17-14-40-e1706867387348.webp',
}

/* ── Intersection-observer reveal hook ───────────────────────── */
function useReveal(threshold = 0.1, delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0) scale(1)'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])
  return ref
}

/* ── Stats data ───────────────────────────────────────────────── */
const stats = [
  { value: '3', unit: 'Units', label: 'Processing Facilities' },
  { value: '22M+', unit: 'KG', label: 'Annual Capacity' },
  { value: '45 MW', unit: 'Solar', label: 'Green Energy Installed' },
  { value: '100%', unit: '', label: 'Traceable Sourcing' },
]

/* ── Processing sections ──────────────────────────────────────── */
const processingFeatures = [
  {
    title: 'Primary Leaf Threshing',
    image: ASSETS.threshingLine,
    badge: 'Evans MacTavish Line',
    description:
      'Our state-of-the-art Evans MacTavish threshing line separates lamina from stems with precision, preserving leaf integrity while maximising yield efficiency. The fully enclosed system minimises dust and moisture variation.',
    specs: [
      'Capacity: 8,000 kg/hr per line',
      'Twin-pass threshing configuration',
      'Automated moisture sensing & control',
      'Zero cross-contamination architecture',
    ],
    accent: '#282F81',
  },
  {
    title: 'Tobacco Feeding & Blending Tables',
    image: ASSETS.feedingTables,
    badge: 'Automated Conveyor System',
    description:
      'Overhead aerial view of our expansive feeding table network — leaf bales are precisely weighed, conditioned and sequenced on numbered conveyor positions before entering the threshing lines, ensuring blend consistency batch after batch.',
    specs: [
      '60+ individual feeding positions',
      'RFID-tagged bale tracking',
      'Automated blend-ratio management',
      'Real-time weight calibration',
    ],
    accent: '#DA7927',
  },
  {
    title: 'Rotary Cylinder Dryers',
    image: ASSETS.redCylinders,
    badge: 'Multi-stage Drying',
    description:
      'Triple-cylinder rotary dryers bring tobacco lamina to precise moisture targets between 11–13%, critical for long-term storage quality. Each cylinder operates independently, allowing parallel processing of different grade streams.',
    specs: [
      'Three independent drying cylinders',
      'Target moisture: 11–13%',
      'Temperature-controlled airflow',
      'Energy-efficient heat-recovery system',
    ],
    accent: '#ECA12C',
  },
  {
    title: 'Automated Packing & Compression',
    image: ASSETS.dsc0387,
    badge: 'AJ-Pack Compression',
    description:
      'Our automated end-of-line packing station compresses processed leaf into export-grade cartons and hogsheads using AJ-Pack machinery with integrated strapping and palletising — ready for cold storage or direct container loading.',
    specs: [
      'AJ-Pack automated compression',
      'Output: 3,000 cartons/shift',
      'Barcode & weight verification',
      'Auto-strapping & palletising',
    ],
    accent: '#282F81',
  },
]

/* ── Technology gallery items ─────────────────────────────────── */
const techGallery = [
  {
    image: ASSETS.sortingLine,
    title: 'Multi-Lane Sorting Conveyor',
    desc: 'Precision sorting belts grade leaf by colour, density, and particle size simultaneously.',
    tag: 'Sorting',
    color: '#DA7927',
  },
  {
    image: ASSETS.technofour,
    title: 'Technofour Metal Detector',
    desc: 'Inline Technofour Electronics metal detection ensures every batch is contaminant-free — a non-negotiable for our export markets.',
    tag: 'Quality Control',
    color: '#282F81',
  },
  {
    image: ASSETS.heliusSorter,
    title: 'HELIUS Optical Sorter',
    desc: 'HELIUS high-speed optical sorters scan 4,000 particles per second, rejecting foreign matter with sub-mm precision.',
    tag: 'AI Sorting',
    color: '#ECA12C',
  },
  {
    image: ASSETS.conveyorBelt,
    title: 'Lamina Separation Belt',
    desc: 'Post-threshing lamina conveyors separate fine-cut stem fragments before product enters the dryer section.',
    tag: 'Separation',
    color: '#DA7927',
  },
  {
    image: ASSETS.threshingMachine,
    title: 'High-Speed Threshing Drums',
    desc: 'Individual threshing drum units with adjustable beater arms allow rapid grade-to-grade changeover without line shutdown.',
    tag: 'Threshing',
    color: '#282F81',
  },
  {
    image: ASSETS.packagingLine,
    title: 'Grade-Indexed Stem Line',
    desc: 'Recovered stems are indexed by grade, dried separately and pressed for onward sale — zero waste from the threshing process.',
    tag: 'Stem Recovery',
    color: '#ECA12C',
  },
]

/* ── Storage section images ───────────────────────────────────── */
const storageImages = [
  { image: ASSETS.warehouse, label: 'Racked Bale Storage — 40,000+ MT capacity' },
  { image: ASSETS.tobaccoBales, label: 'Export-grade bale inventory, Guntur facility' },
  { image: ASSETS.facilityBuilding, label: 'KDP Factory complex — Guntur, Andhra Pradesh' },
]

/* ════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ════════════════════════════════════════════════════════════════ */

function StatCard({ stat, delay }) {
  const ref = useReveal(0.1, delay)
  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        opacity: 0,
        transform: 'translateY(20px) scale(0.96)',
        transition: `opacity 0.7s ease, transform 0.7s ease`,
      }}
    >
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 900,
        color: '#ECA12C',
        lineHeight: 1,
        marginBottom: '0.25rem',
      }}>
        {stat.value}
        {stat.unit && (
          <span style={{ fontSize: '0.5em', fontWeight: 600, color: '#DA7927', marginLeft: '4px' }}>
            {stat.unit}
          </span>
        )}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
        {stat.label}
      </div>
    </div>
  )
}

function ProcessingCard({ feature, index }) {
  const ref = useReveal(0.1, index * 50)
  const isEven = index % 2 === 0
  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        marginBottom: '6rem',
        opacity: 0,
        transform: 'translateY(40px) scale(1)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      {/* Image — alternates side */}
      <div style={{ order: isEven ? 1 : 2, position: 'relative' }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', inset: '-20px',
          background: `radial-gradient(circle, ${feature.accent}20 0%, transparent 70%)`,
          borderRadius: '32px', filter: 'blur(30px)', pointerEvents: 'none',
        }} />
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: `0 25px 70px rgba(0,0,0,0.18), 0 0 0 1px ${feature.accent}22`,
          position: 'relative',
          aspectRatio: '16/10',
        }}>
          <img
            src={feature.image}
            alt={feature.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Badge overlay */}
          <div style={{
            position: 'absolute', top: '16px', left: '16px',
            background: feature.accent,
            color: '#fff', borderRadius: '50px',
            padding: '4px 14px', fontSize: '0.65rem',
            fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            boxShadow: `0 4px 15px ${feature.accent}60`,
          }}>
            {feature.badge}
          </div>
        </div>
      </div>

      {/* Text */}
      <div style={{ order: isEven ? 2 : 1, padding: isEven ? '0 0 0 1rem' : '0 1rem 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
          <div style={{ width: '40px', height: '3px', borderRadius: '2px', background: `linear-gradient(90deg, ${feature.accent}, transparent)` }} />
          <span style={{ color: feature.accent, fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase' }}>
            Processing Capability
          </span>
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
          fontWeight: 800, color: '#1a1008',
          lineHeight: 1.2, marginBottom: '1.25rem',
        }}>
          {feature.title}
        </h3>

        <p style={{
          color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.8,
          marginBottom: '1.75rem',
        }}>
          {feature.description}
        </p>

        {/* Specs list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {feature.specs.map((spec, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: feature.accent, flexShrink: 0,
                boxShadow: `0 0 8px ${feature.accent}80`,
              }} />
              <span style={{ color: '#4a3828', fontSize: '0.9rem', fontWeight: 500 }}>{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TechCard({ item, delay }) {
  const ref = useReveal(0.1, delay)
  const [hovered, setHovered] = useState(false)
  return (
    <div
      ref={ref}
      style={{
        borderRadius: '20px', overflow: 'hidden',
        background: '#fff',
        boxShadow: hovered ? `0 25px 70px rgba(0,0,0,0.14), 0 0 0 1px ${item.color}33` : '0 8px 30px rgba(0,0,0,0.07)',
        border: `1px solid ${item.color}18`,
        opacity: 0,
        transform: 'translateY(30px) scale(1)',
        transition: 'opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '12px', left: '12px',
          background: item.color, color: '#fff',
          borderRadius: '50px', padding: '3px 12px',
          fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          {item.tag}
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
        <h4 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1rem', fontWeight: 700,
          color: '#1a1008', marginBottom: '0.6rem', lineHeight: 1.3,
        }}>
          {item.title}
        </h4>
        <p style={{ color: '#7a6a5a', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>
          {item.desc}
        </p>
      </div>
    </div>
  )
}

function StorageCard({ item, delay }) {
  const ref = useReveal(0.1, delay)
  const [hovered, setHovered] = useState(false)
  return (
    <div
      ref={ref}
      style={{
        borderRadius: '20px', overflow: 'hidden',
        position: 'relative',
        boxShadow: hovered ? '0 25px 60px rgba(0,0,0,0.2)' : '0 10px 40px rgba(0,0,0,0.12)',
        opacity: 0, transform: 'translateY(30px) scale(1)',
        transition: 'opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s',
        aspectRatio: '4/3',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={item.image}
        alt={item.label}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem',
        color: '#fff', fontSize: '0.8rem', lineHeight: 1.4, fontWeight: 500,
      }}>
        {item.label}
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════
   INFRASTRUCTURE PAGE
   ════════════════════════════════════════════════════════════════ */
export default function Infrastructure() {
  const heroRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  const storyRef = useReveal(0.1)
  const techHeadRef = useReveal(0.1)
  const solarRef = useReveal(0.1)
  const storageHeadRef = useReveal(0.1)
  const plagueRef = useReveal(0.1)
  const ctaRef = useReveal(0.1)

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#faf7f2', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Background — threshing line as hero */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${ASSETS.threshingLine})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(10,10,30,0.88) 0%, rgba(40,47,129,0.7) 40%, rgba(0,0,0,0.55) 100%)',
        }} />
        {/* Gold diagonal accent */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '40%', height: '100%',
          background: 'linear-gradient(to left, rgba(218,121,39,0.08), transparent)',
          pointerEvents: 'none',
        }} />
        {/* Animated rings */}
        <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(218,121,39,0.2)', animation: 'float 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '13%', width: '180px', height: '180px', borderRadius: '50%', border: '1px solid rgba(236,161,44,0.3)', animation: 'float 5s ease-in-out infinite reverse' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10, paddingTop: '80px', width: '100%' }}>
          <div ref={heroRef} style={{ maxWidth: '720px' }}>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(218,121,39,0.15)', border: '1px solid rgba(218,121,39,0.4)',
              borderRadius: '50px', padding: '6px 18px', marginBottom: '1.75rem',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ECA12C', animation: 'pulse 2s ease-in-out infinite' }} />
              <span style={{ color: '#ECA12C', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase' }}>
                KDP Tobacco Factory · Guntur, India
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: '1.5rem',
            }}>
              Efficiency &{' '}
              <span style={{
                background: 'linear-gradient(90deg, #DA7927, #ECA12C, #F1B415)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Innovation
              </span>
              <br />
              <span style={{ fontSize: '0.6em', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
                Built Into Every Square Foot
              </span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2.5rem', maxWidth: '600px' }}>
              Our KDP Tobacco Factory in Guntur is among India's most advanced tobacco primary processing facilities — combining cutting-edge Evans MacTavish threshing lines, HELIUS optical sorters, automated compression, and 45 MW of rooftop solar power.
            </p>

            {/* Key stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', maxWidth: '640px' }}>
              {stats.map((s, i) => <StatCard key={i} stat={s} delay={i * 100} />)}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>
          <span>Explore</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(218,121,39,0.8), transparent)', animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INTRO — Blend of Technology & Tradition
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', background: '#fff', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.35), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            {/* Text */}
            <div
              ref={storyRef}
              style={{ opacity: 0, transform: 'translateY(30px) scale(1)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
                <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Our Infrastructure</span>
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 800, color: '#1a1008', lineHeight: 1.2, marginBottom: '1.5rem',
              }}>
                A Blend of{' '}
                <span style={{ color: '#DA7927' }}>Technology</span>{' '}
                and Tradition
              </h2>
              <p style={{ color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                Established in 1956 and continuously modernised, our Guntur processing complex is the backbone of Messrs Polisetty Somasundaram & Sons' promise of quality. Every machine, every conveyor and every sensor is chosen to honour the same commitment our founder made on Day 1 — that the leaf reaching our buyers is the finest available.
              </p>
              <p style={{ color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.75rem' }}>
                We run three parallel threshing lines capable of processing 22 million kilograms per season, supported by advanced optical sorting, automated compression, and a 45 MW rooftop solar plant that cuts our grid dependence significantly.
              </p>
              {/* Brand partner logos strip */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ color: '#9a8a7a', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Technology Partners:</span>
                {['Evans MacTavish', 'HELIUS', 'Technofour', 'AJ-Pack'].map(b => (
                  <div key={b} style={{
                    background: '#faf7f2', border: '1px solid rgba(218,121,39,0.25)',
                    borderRadius: '8px', padding: '6px 14px',
                    fontSize: '0.75rem', fontWeight: 700, color: '#3d2c1e',
                    letterSpacing: '0.05em',
                  }}>{b}</div>
                ))}
              </div>
            </div>

            {/* Founding plaque image */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'absolute', inset: '-30px',
                background: 'radial-gradient(circle, rgba(218,121,39,0.18) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(40px)',
              }} />
              <div style={{
                borderRadius: '24px', overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.14)',
                border: '3px solid rgba(218,121,39,0.2)',
                position: 'relative', zIndex: 1, width: '100%',
              }}>
                <img
                  src={ASSETS.foundingPlaque}
                  alt="KDP Tobacco Factory Founding Plaque – 1956"
                  style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
              </div>
              {/* Year badge */}
              <div style={{
                position: 'absolute', bottom: '-18px', right: '-18px',
                background: 'linear-gradient(135deg, #282F81, #1a1008)',
                borderRadius: '16px', padding: '1rem 1.5rem',
                border: '1px solid rgba(218,121,39,0.3)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.25)', zIndex: 2,
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 800, color: '#ECA12C', lineHeight: 1 }}>1956</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>Factory Est.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROCESSING CAPABILITIES — alternating layout
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', background: '#faf7f2', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative watermark */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontFamily: "'Playfair Display', serif", fontSize: '18vw', fontWeight: 900,
          color: 'rgba(218,121,39,0.04)', whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none',
        }}>
          PROCESS
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.3), transparent)' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>End-to-End Processing</span>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800, color: '#1a1008', marginBottom: '1rem',
            }}>
              Advanced Tobacco{' '}
              <span style={{ color: '#DA7927' }}>Processing Capabilities</span>
            </h2>
            <p style={{ color: '#7a6a5a', fontSize: '1rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
              From raw leaf intake through to export-grade compressed cartons — every step of our process is engineered for precision, consistency and scale.
            </p>
          </div>

          {/* Alternating processing cards */}
          {processingFeatures.map((f, i) => (
            <ProcessingCard key={i} feature={f} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TECHNOLOGY GALLERY — 3-col grid
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', background: '#fff', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.3), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            ref={techHeadRef}
            style={{ textAlign: 'center', marginBottom: '3.5rem', opacity: 0, transform: 'translateY(30px) scale(1)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Cutting-Edge Process</span>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800, color: '#1a1008', marginBottom: '1rem',
            }}>
              Ahead of the{' '}
              <span style={{ color: '#DA7927' }}>Curve</span>
            </h2>
            <p style={{ color: '#7a6a5a', fontSize: '1rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              Each piece of equipment in our factory is selected from the world's best manufacturers to ensure that quality is never a variable.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }}>
            {techGallery.map((item, i) => (
              <TechCard key={i} item={item} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SOLAR / SUSTAINABILITY BANNER
          ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '480px', display: 'flex', alignItems: 'center' }}>
        {/* BG */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${ASSETS.solarPanels})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(40,47,129,0.88) 0%, rgba(20,20,20,0.72) 100%)',
        }} />
        <div
          ref={solarRef}
          style={{
            maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem',
            position: 'relative', zIndex: 1, width: '100%',
            opacity: 0, transform: 'translateY(30px) scale(1)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #ECA12C)' }} />
                <span style={{ color: '#ECA12C', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Green Infrastructure</span>
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '1.25rem',
              }}>
                Revolutionary{' '}
                <span style={{ background: 'linear-gradient(90deg, #DA7927, #ECA12C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Solar Power
                </span>
                {' '}at Scale
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                Our rooftop solar installation across the KDP factory complex generates 45 MW of clean energy, powering our dryers, conveyors and packing lines. This dramatically reduces grid dependency, lowers our carbon footprint, and ensures competitive processing costs for our clients.
              </p>
            </div>
            {/* Solar stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { v: '45 MW', l: 'Solar Capacity Installed' },
                { v: '60%', l: 'Grid Independence Achieved' },
                { v: '38,000+', l: 'Panels on Rooftop' },
                { v: '24,000 T', l: 'CO₂ Saved Annually' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(218,121,39,0.3)',
                  borderRadius: '16px', padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 800, color: '#ECA12C', marginBottom: '0.25rem' }}>{s.v}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STORAGE & FACILITY GALLERY
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', background: '#faf7f2', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.3), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            ref={storageHeadRef}
            style={{ textAlign: 'center', marginBottom: '3.5rem', opacity: 0, transform: 'translateY(30px) scale(1)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Storage & Logistics</span>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800, color: '#1a1008', marginBottom: '1rem',
            }}>
              Reliable Production{' '}
              <span style={{ color: '#DA7927' }}>& Storage</span>
            </h2>
            <p style={{ color: '#7a6a5a', fontSize: '1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Our warehouse complex can store over 40,000 metric tons of processed and unprocessed tobacco, ensuring uninterrupted supply to our global buyers throughout the season.
            </p>
          </div>

          {/* Storage gallery — 3-col */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem', marginBottom: '4rem' }}>
            {storageImages.map((item, i) => (
              <StorageCard key={i} item={item} delay={i * 100} />
            ))}
          </div>

          {/* Infrastructure spec cards row */}
          <div
            ref={plagueRef}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem',
              opacity: 0, transform: 'translateY(30px) scale(1)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
            }}
          >
            {[
              { icon: '🏭', title: 'Factory Area', value: '2.4 Lakh sq.ft', desc: 'Under covered shed' },
              { icon: '🚛', title: 'Logistics Bays', value: '24 Docks', desc: 'Container-ready loading' },
              { icon: '❄️', title: 'Cold Storage', value: '12,000 MT', desc: 'Temperature-controlled' },
              { icon: '🔒', title: 'Quality Lab', value: 'ISO Certified', desc: 'In-house testing facility' },
            ].map((c, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '20px',
                padding: '1.75rem', textAlign: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                border: '1px solid rgba(218,121,39,0.12)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(218,121,39,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.06)' }}
              >
                <div style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>{c.icon}</div>
                <div style={{ color: '#DA7927', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{c.title}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.35rem', fontWeight: 800, color: '#1a1008', marginBottom: '0.25rem' }}>{c.value}</div>
                <div style={{ color: '#9a8a7a', fontSize: '0.8rem' }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════ */}
      <section style={{
        padding: '6rem 2rem', textAlign: 'center',
        background: 'linear-gradient(135deg, #1a1008 0%, #282F81 60%, #1a1008 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(218,121,39,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(218,121,39,0.05)' }} />
        {/* Gold line decoration */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #DA7927, #ECA12C, #DA7927, transparent)' }} />

        <div
          ref={ctaRef}
          style={{
            position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto',
            opacity: 0, transform: 'translateY(30px) scale(1)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(218,121,39,0.15)', border: '1px solid rgba(218,121,39,0.3)',
              borderRadius: '50px', padding: '6px 16px',
            }}>
              <span style={{ color: '#ECA12C', fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase' }}>
                Join Our Rapidly Growing Company
              </span>
            </div>
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
            fontWeight: 800, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2,
          }}>
            Partner With World-Class{' '}
            <span style={{
              background: 'linear-gradient(90deg, #DA7927, #ECA12C)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Infrastructure
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Whether you're sourcing leaf or exploring a processing partnership — our facility scale, technology stack, and quality protocols are ready to meet the most demanding global standards.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/#contact"
              style={{
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                color: '#fff', padding: '0.9rem 2.5rem', borderRadius: '50px',
                fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.06em',
                textDecoration: 'none', boxShadow: '0 8px 30px rgba(218,121,39,0.4)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(218,121,39,0.55)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(218,121,39,0.4)' }}
            >
              Request a Factory Visit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff', padding: '0.9rem 2.5rem', borderRadius: '50px',
                fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.06em',
                textDecoration: 'none', backdropFilter: 'blur(10px)',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
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
