import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/* ── Asset paths ──────────────────────────────────────────────── */
const ASSETS = {
  threshingLine: '/assets/KDP-Threshing-Line.jpg',
  feedingTables: '/assets/KDP-Feeding-Tables-e1707826027775.jpg',
  solarPanels: '/assets/Picture3-e1707827227614.png',
  sortingLine: '/assets/Picture5.jpg',
  packagingLine: '/assets/Picture7.jpg',
  dsc0387: '/assets/DSC_0387-1-scaled.jpg',
  redCylinders: '/assets/Screenshot-2023-12-20-at-14.54.19.png',
  technofour: '/assets/Screenshot-2023-12-20-at-15.04.37-1.png',
  heliusSorter: '/assets/Screenshot-2023-12-20-at-15.34.21.png',
  conveyorBelt: '/assets/Screenshot-2023-12-20-at-15.51.16.png',
  threshingMachine: '/assets/Screenshot-2024-01-10-at-11.33.12.png',
  warehouse: '/assets/Screenshot-2024-01-10-at-11.33.27.png',
  tobaccoBales: '/assets/10262021000554n17-e1707828388753.jpg',
  foundingPlaque: '/assets/IMG_1787-1-1.jpg',
  facilityBuilding: '/assets/istockphoto-1044675932-612x612-1.jpg',
  heroBg: '/assets/PHOTO-2023-11-29-17-14-40-e1706867387348.webp',
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
  { value: '2+', unit: '', label: 'Processing centers', category: 'Technology' },
  { value: '22M', unit: 'Kg', label: 'Packed Storage Capacity', category: 'Efficiency' },
  { value: '45M', unit: 'Kg', label: 'Processed Tobacco (2021-22)', category: 'Quality' },
]

/* ── Processing sections ──────────────────────────────────────── */
const processingFeatures = [
  {
    title: 'Combined Storage Potential',
    image: ASSETS.warehouse,
    badge: 'Expansive Capacity',
    description:
      'We have a dedicated storage area of 609,000 sq.ft capacity for green tobacco across 14 warehouses, which is stored in metal pallets. We also have an additional 116,400 sq.ft storage area for finished and packed products and a north-light inspection hall of 28,200 sq.ft.\n\nWe constantly strive to employ state-of-the-art technology to increase the storage capacity and ensure full and optimum utilization of available storage resources.',
    specs: [
      'Green storage capacity: 14 Million Kilos',
      'Packed storage capacity: 22 Million Kilos',
    ],
    accent: '#DA7927',
  },
  {
    title: 'Superior Production Capacity',
    image: ASSETS.threshingLine,
    badge: 'Automated Processing',
    description:
      "Our plant has advanced classifiers, threshers, and a fully automised press for processing the final product. The factory is well-equipped with PLC control systems that meets international standards. We offer a choice of export packing with imported material tailored to the customer's needs. The factory's automated packaging system ensures tobacco is sealed with precise moisture control measures.",
    specs: [
      'High Grade: 16 Tonnes/hour',
      'Medium Grade: 12 Tonnes/hour',
      'Low grade: 9 Tonnes/hour',
    ],
    accent: '#282F81',
  },
]

/* ── Technology gallery items ─────────────────────────────────── */
const techGallery = [
  {
    image: ASSETS.feedingTables,
    title: 'Blending Line',
    desc: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
        <p style={{ margin: 0 }}>Three feed tables are provided, each equipped with 10 feed stations, resulting in a total of 30 feed stations. These tables are designed to accommodate Single, Double (3" x 3"), and Triple tipping (2" x 2" x 2") options.</p>
        <p style={{ margin: 0 }}>The system is enhanced with Variable Frequency Drive (VFD) capabilities, allowing precise control over the speed of the feed tables.</p>
        <p style={{ fontWeight: 600, marginTop: '0.2rem', margin: 0 }}>Manufacturer: Dickinson Fowler, India.</p>
      </div>
    ),
    tag: 'Blending',
    color: '#DA7927',
  },
  {
    image: ASSETS.redCylinders,
    title: 'Conditioning Cylinders',
    desc: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
        <p style={{ margin: 0 }}>The Direct Conditioning cylinder (DCC) ensures optimal loosening, opening, and uniform conditioning for all tobacco grades.</p>
        <p style={{ margin: 0 }}>Customized features include variable rotational speed, a fully heated discharge hood, and hot air recirculation for superior processing.</p>
        <p style={{ fontWeight: 600, marginTop: '0.2rem', margin: 0 }}>Size :8 ft. dia. x 32 ft. length cylinder<br />Make: Evans - Mac Tavish - Agricraft Inc. USA.</p>
      </div>
    ),
    tag: 'Conditioning',
    color: '#282F81',
  },
  {
    image: ASSETS.threshingLine,
    title: 'Threshing Line',
    desc: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
        <p style={{ margin: 0 }}>Polisetty's state-of-the-art processing line at Chinakondrupadu, Guntur- reaches optimum productivity levels in throughput and yields, besides ensuring superior product quality.</p>
        <p style={{ margin: 0 }}>This processing line now represents the global benchmark for green leaf threshing plants, in line with the company's continuing commitment to world-class quality.</p>
        <p style={{ fontWeight: 600, marginTop: '0.2rem', margin: 0 }}>Threshing capacity : 14000 Kgs per Hour<br />Make : Evans – Mac Tavish – Agricraft Inc. USA.</p>
      </div>
    ),
    tag: 'Threshing',
    color: '#ECA12C',
  },
  {
    image: ASSETS.sortingLine,
    title: 'High Efficiency Rollers',
    desc: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
        <p style={{ margin: 0 }}>This Machine is very efficient in removing small-sized Non-Tobacco Related Material, plastic, and Hessian Strings.</p>
        <p style={{ fontWeight: 600, marginTop: '0.2rem', margin: 0 }}>Make: P.D.S Chiangmai Engineering Ltd. Thailand.</p>
      </div>
    ),
    tag: 'Efficiency',
    color: '#DA7927',
  },
  {
    image: ASSETS.heliusSorter,
    title: 'Laser Sorters',
    desc: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
        <p style={{ margin: 0 }}>The Helius Free Fall Laser sorter uses cutting-edge technology to remove imperceptible foreign materials and NTRM with exceptional efficiency at high flow rates.</p>
        <p style={{ fontWeight: 600, marginTop: '0.2rem', margin: 0 }}>Installed Capacity:</p>
        <ul style={{ paddingLeft: '1.2rem', margin: 0, fontWeight: 600 }}>
          <li>9 Units (5x 1600, 4x 1200)</li>
          <li>AI Sorter Capacity: 500 kgs/hour</li>
        </ul>
        <p style={{ fontWeight: 600, marginTop: '0.2rem', margin: 0 }}>Make: Helius™</p>
      </div>
    ),
    tag: 'Laser Sorters',
    color: '#282F81',
  },
  {
    image: ASSETS.packagingLine,
    title: 'Lamina Dryer',
    desc: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
        <p style={{ margin: 0 }}>Optimized for efficiency, our Lamina Dryer operates with individual low-temperature zones, controlled humidity, and exhaust.</p>
        <p style={{ margin: 0 }}>The system features an SS Punch Plate Apron and delivers a drying capacity of 10,000 kg/hour.</p>
        <p style={{ fontWeight: 600, marginTop: '0.2rem', margin: 0 }}>Make: Dickinson Fowler (with Garbuio, Italy)</p>
      </div>
    ),
    tag: 'Drying',
    color: '#DA7927',
  },
  {
    image: ASSETS.technofour,
    title: 'Metal Detector',
    desc: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
        <p style={{ margin: 0 }}>Ensuring the highest hygiene standards, our pre-packing Eddy Current metal detector meticulously scans for any traces of metallic contamination in lamina, stem, and scrap tobacco.</p>
        <p style={{ fontWeight: 600, marginTop: '0.2rem', margin: 0 }}>Make: TECHNOFOUR ELECTRONICS, India</p>
      </div>
    ),
    tag: 'Quality Control',
    color: '#282F81',
  },
  {
    image: ASSETS.dsc0387,
    title: 'Auto Press',
    desc: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
        <p style={{ margin: 0 }}>Operating with total PLC automation, the system includes automatic charger insertion and electronic scales achieving +/- 1 kg accuracy.</p>
        <p style={{ margin: 0 }}>The comprehensive line features a hold-down press, tunnel, and automatic strapper for efficient packaging.</p>
        <p style={{ fontWeight: 600, marginTop: '0.2rem', margin: 0 }}>Capacity: 50 Cartons/Hour<br />Make: Godioli & Bellanti, Italy</p>
      </div>
    ),
    tag: 'Packaging',
    color: '#ECA12C',
  },
  {
    image: ASSETS.solarPanels,
    title: 'Solar Power Generator',
    desc: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
        <p style={{ margin: 0 }}>Our rooftop solar plant significantly contributes to environmental sustainability by effectively reducing the facility's carbon footprint.</p>
        <p style={{ fontWeight: 600, marginTop: '0.2rem', margin: 0 }}>Capacity: 999 KW<br />Provider: Mahindra Solarize, India</p>
      </div>
    ),
    tag: 'Sustainability',
    color: '#4caf50',
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
      <div style={{ color: '#DA7927', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>
        {stat.category}
      </div>
      <div className="num-font" style={{
        fontFamily: "'Oswald', sans-serif",
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
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

        {feature.description.split('\n\n').map((para, i, arr) => (
          <p key={i} style={{
            color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.8,
            marginBottom: i === arr.length - 1 ? '1.75rem' : '1rem',
          }}>
            {para}
          </p>
        ))}

        {/* Specs list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {feature.specs.map((spec, i) => {
            const parts = spec.split(': ');
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: feature.accent, flexShrink: 0,
                  boxShadow: `0 0 8px ${feature.accent}80`,
                }} />
                <span style={{ color: '#4a3828', fontSize: '0.9rem', fontWeight: 500 }}>
                  {parts.length > 1 ? <>{parts[0]}: <strong>{parts[1]}</strong></> : spec}
                </span>
              </div>
            )
          })}
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
        <div style={{ color: '#7a6a5a', lineHeight: 1.65, margin: 0 }}>
          {item.desc}
        </div>
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
              fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: '2.5rem',
            }}>
              <span style={{ fontSize: '0.35em', color: 'rgba(255,255,255,0.8)', fontWeight: 400, display: 'block', marginBottom: '15px', letterSpacing: '0.05em', textTransform: 'none' }}>
                World-class technology and automation enhances our
              </span>
              EFFICIENCY &{' '}
              <span style={{
                background: 'linear-gradient(90deg, #DA7927, #ECA12C, #F1B415)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                INNOVATION
              </span>
            </h1>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>
          <span>Explore</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(218,121,39,0.8), transparent)', animation: 'float 2s ease-in-out infinite' }} />
        </div> */}
      </section>

      {/* Floating Stats */}
      <div style={{ maxWidth: '1000px', margin: '-80px auto 0', position: 'relative', zIndex: 10, padding: '0 2rem' }}>
        <div style={{
          background: '#fff', borderRadius: '24px', padding: '3rem 2rem',
          boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center'
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ borderRight: i !== stats.length - 1 ? '1px solid #f0efe9' : 'none', paddingRight: i !== stats.length - 1 ? '2rem' : '0' }}>
              <div className="num-font" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '4rem', fontWeight: 700, color: '#DA7927', marginBottom: '0.5rem', lineHeight: 1 }}>
                {s.value}<span style={{ fontSize: '2.5rem' }}>{s.unit}</span>
              </div>
              <div style={{ color: '#1a1008', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          INTRO — Blend of Technology & Tradition
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        {/* <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.35), transparent)' }} /> */}
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

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#1a1008', marginBottom: '0.5rem' }}>80 Years of Legacy</h3>
                <p style={{ color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.85 }}>
                  Polisetty combines the best of traditional expertise mastered over the generations with the best of contemporary technology. Matching pace with every advancement in technology, the Polisetty plant today is comparable with the best in the world.
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#1a1008', marginBottom: '0.5rem' }}>Next-generation technology</h3>
                <p style={{ color: '#6b5a4a', fontSize: '1rem', lineHeight: 1.85 }}>
                  Advanced machinery and modern technology are utilized in a precision-controlled environment at the Polisetty plant. We are the only tobacco threshing plant in the world to employ a 10 NTRM laser sorting process. Our fully automated processes allow us to produce only the highest-quality products.
                </p>
              </div>

              {/* Brand partner logos strip */}
              <div style={{ marginTop: '2.5rem' }}>
                <span style={{ display: 'block', color: '#9a8a7a', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.25rem' }}>Technology Partners:</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  {[
                    { name: 'Evans', img: '/assets/Evans.png' },
                    { name: 'Tomra', img: '/assets/tomra.png' },
                    { name: 'TechnoFour', img: '/assets/TechnoFour.png' },
                    { name: 'Siemens', img: '/assets/siemens.png' },
                    { name: 'KAI', img: '/assets/kai.png' },
                    { name: 'Astell', img: '/assets/astell.png' },
                    { name: 'Godioli & Bellanti', img: '/assets/Godioli%20&%20Bellanti.png' }
                  ].map(partner => (
                    <div key={partner.name} style={{
                      height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#eb9c36', padding: "5px", borderRadius: "5px"
                    }}>
                      <img src={partner.img} alt={partner.name} style={{ maxHeight: '100%', maxWidth: '180px', objectFit: 'contain' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
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
                aspectRatio: '4/3'
              }}>
                <img
                  src="/assets/blend-img.jpg"
                  alt="A blend of Technology and Tradition"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROCESSING CAPABILITIES — alternating layout
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '3rem 0 1rem', background: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative watermark */}
        <div style={{
          position: 'absolute', top: '59%', left: '50%', transform: 'translate(-50%, -50%)',
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
      <section style={{ padding: '3rem 0', background: '#faf7f2', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.3), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            ref={techHeadRef}
            style={{ textAlign: 'center', marginBottom: '2.5rem', opacity: 0, transform: 'translateY(30px) scale(1)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Cutting-Edge Process</span>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#DA7927', flexShrink: 0, marginTop: '8px' }} />
                <p style={{ color: '#7a6a5a', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                  Raw tobacco as per blend ratio received from classification points
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#DA7927', flexShrink: 0, marginTop: '8px' }} />
                <p style={{ color: '#7a6a5a', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                  Removal of Non Tobacco Related Material, through out the processs, with a fine balance of minimal human interference and maximized use of mechanical equipment
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#DA7927', flexShrink: 0, marginTop: '8px' }} />
                <p style={{ color: '#7a6a5a', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                  Sophisticated classifiers, magnets, etc. and automated use of Laser Technology at pre and post re-drying stages
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#DA7927', flexShrink: 0, marginTop: '8px' }} />
                <p style={{ color: '#7a6a5a', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                  Conditioning and drying of the product using non-contact type moisture measuring meters
                </p>
              </div>
            </div>

            <div style={{ marginTop: '5rem', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Advanced Machinery</span>
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
          SORTING TECHNOLOGY BANNER
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 0 6rem', background: '#fff', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,121,39,0.35), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            {/* Text Side */}
            <div
              ref={solarRef}
              style={{ opacity: 0, transform: 'translateY(30px) scale(1)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
                <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>Revolutionary Sorting Technology</span>
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 800, color: '#1a1008', lineHeight: 1.2, marginBottom: '1.5rem',
              }}>
                State-of-the-art equipment and a{' '}
                <span style={{ color: '#DA7927' }}>
                  sophisticated 10-sorter process
                </span>
              </h2>
              <p style={{ color: '#6b5a4a', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                We are the only tobacco processing factory in the country equipped with 10 NTRM sorters. We have a highly-skilled and expert workforce, and employ world-class facilities with modern machinery and equipment sourced from industry-leading and reputed brands.
              </p>
              <a href="/quality-exports" style={{
                display: 'inline-block',
                padding: '12px 32px',
                background: '#1a1008', color: '#fff',
                borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'background 0.3s ease, transform 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#DA7927'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1a1008'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Learn about our quality
              </a>
            </div>

            {/* Image Side */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative', borderRadius: '24px', overflow: 'hidden',
                boxShadow: '0 25px 70px rgba(0,0,0,0.15)',
                aspectRatio: '4/3'
              }}>
                <img src={ASSETS.conveyorBelt} alt="10-Sorter Process" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              {/* Decorative elements */}
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(218,121,39,0.1)', zIndex: -1 }} />
              <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(236,161,44,0.1)', zIndex: -1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          RELIABLE PRODUCTION BANNER
          ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
        {/* BG */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${ASSETS.solarPanels})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
        }} />
        <div
          ref={storageHeadRef}
          style={{
            maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem',
            position: 'relative', zIndex: 1, width: '100%',
            opacity: 0, transform: 'translateY(30px) scale(1)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <div style={{ maxWidth: '650px', textAlign: 'left' }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '2rem',
              letterSpacing: '-0.02em'
            }}>
              Reliable Production
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Self sufficiency in power has been achieved through huge generators so that power break-downs are not a hindrance to production.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem' }}>
              Demonstrating its concern for the environment, Polisetty Somasundaram operates the plant according to the strictest norms.
            </p>
            {/* <a href="/impact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 32px',
              background: 'linear-gradient(90deg, #DA7927, #ECA12C)', color: '#fff',
              borderRadius: '50px', fontSize: '1rem', fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.3s ease, transform 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(218,121,39,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Learn more
            </a> */}
          </div>
        </div>

        {/* Scroll up / Next section button floating right */}
        <div style={{
          position: 'absolute', bottom: '30px', right: '30px', zIndex: 1,
          width: '50px', height: '50px', borderRadius: '50%',
          background: '#ECA12C', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '1.5rem', cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease',
        }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
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
            <button
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              style={{
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                color: '#fff', padding: '0.9rem 2.5rem', borderRadius: '50px',
                fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.06em',
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
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
            </button>
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
