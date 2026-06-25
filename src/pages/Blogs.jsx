import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ASSETS = {
  featured: '/assets/Screenshot-2023-12-20-at-18.02.26-e1708496676582.png', // Fire safety for the featured post
  blog1: '/assets/Screenshot-2023-12-20-at-15.28.33.png', // Solar panels for sustainability
  blog2: '/assets/PHOTO-2023-11-29-17-11-40-e1703074103613.jpeg', // Farmers
  blog3: '/assets/Screenshot-2023-12-20-at-17.48.47.png', // Villages
}

const CATEGORIES = ['All', 'Health & Safety', 'Sustainability', 'Company News']

const BLOGS = [
  {
    id: 1,
    category: 'Sustainability',
    title: 'Data smart decision making to improve overall sustainability performance',
    date: '15.01.24',
    readTime: '2 min read',
    image: ASSETS.blog1,
    featured: false
  },
  {
    id: 2,
    category: 'Health & Safety',
    title: 'Operational Risk Management through Occupational Health and Safety',
    date: '12.01.24',
    readTime: '2 min read',
    image: ASSETS.featured,
    featured: true
  },
  {
    id: 3,
    category: 'Company News',
    title: 'Expanding our community outreach in the FCV growing regions',
    date: '08.01.24',
    readTime: '3 min read',
    image: ASSETS.blog3,
    featured: false
  },
  {
    id: 4,
    category: 'Sustainability',
    title: 'Harnessing green power: Our transition to renewable energy',
    date: '02.01.24',
    readTime: '4 min read',
    image: ASSETS.blog2,
    featured: false
  }
]

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const heroRef = useRef(null)

  const filteredBlogs = activeCategory === 'All'
    ? BLOGS.filter(b => !b.featured) // Show all non-featured in grid
    : BLOGS.filter(b => b.category === activeCategory)

  const featuredBlog = BLOGS.find(b => b.featured)

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

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#faf7f2', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      {/* ══════════════════════════════════════════════════════
          HERO / FEATURED BLOG
          ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${featuredBlog.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,8,4,0.97) 0%, rgba(10,8,4,0.65) 45%, rgba(10,8,4,0.15) 100%)',
        }} />

        <div ref={heroRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 3.5rem', position: 'relative', zIndex: 1, width: '100%' }}>

          {/* Category pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', background: 'rgba(218,121,39,0.15)', padding: '0.35rem 0.85rem', borderRadius: '50px', border: '1px solid rgba(218,121,39,0.35)', backdropFilter: 'blur(10px)' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#DA7927' }} />
            <span style={{ color: '#DA7927', fontSize: '0.72rem', letterSpacing: '0.18em', fontWeight: 700, textTransform: 'uppercase' }}>Featured · {featuredBlog.category}</span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '1.25rem', maxWidth: '720px'
          }}>
            {featuredBlog.title}
          </h1>

          {/* Meta row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#DA7927', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.8rem' }}>A</div>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', fontWeight: 500 }}>Admin</span>
            </div>
            <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              {featuredBlog.date}
            </span>
            <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              {featuredBlog.readTime}
            </span>
          </div>

          {/* Compact ghost button */}
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent',
            color: '#fff',
            padding: '0.6rem 1.4rem',
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.4)',
            fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            backdropFilter: 'blur(6px)',
            transition: 'border-color 0.2s, background 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(218,121,39,0.9)'; e.currentTarget.style.borderColor = 'transparent' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}>
            Read Article
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BLOG LIST & FILTERS
          ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 0 6rem', background: '#faf7f2', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Filters */}
          <div style={{
            display: 'flex', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap',
            paddingBottom: '2rem', borderBottom: '1px solid rgba(26,16,8,0.1)'
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.75rem 2rem',
                  borderRadius: '50px',
                  border: activeCategory === cat ? 'none' : '1px solid rgba(26,16,8,0.1)',
                  background: activeCategory === cat ? 'linear-gradient(135deg, #DA7927, #ECA12C)' : 'transparent',
                  color: activeCategory === cat ? '#fff' : '#6b5a4a',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === cat ? '0 8px 20px rgba(218,121,39,0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredBlogs.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
              {filteredBlogs.map(blog => (
                <div key={blog.id} style={{
                  background: '#fff', borderRadius: '24px', overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.04)', transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  display: 'flex', flexDirection: 'column', cursor: 'pointer', border: '1px solid rgba(26,16,8,0.02)'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-10px)'
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.04)'
                  }}>
                  <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', padding: '0.4rem 1rem', borderRadius: '50px', color: '#DA7927', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {blog.category}
                    </div>
                    <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 800, color: '#1a1008', marginBottom: '1.5rem', lineHeight: 1.3, flexGrow: 1 }}>
                      {blog.title}
                    </h3>

                    <a href="#" style={{ color: '#DA7927', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Read now
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid rgba(26,16,8,0.08)' }}>
                      <div style={{ color: '#8a7b6c', fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span>{blog.date}</span>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#DA7927' }} />
                        <span>{blog.readTime}</span>
                      </div>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8a7b6c', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#DA7927'} onMouseLeave={e => e.currentTarget.style.color = '#8a7b6c'}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#8a7b6c', fontSize: '1.2rem' }}>
              No articles found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #1a1008, #2a1f16)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(218,121,39,0.05)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(218,121,39,0.03)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Never miss an update
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Subscribe to our newsletter to receive the latest stories and insights directly in your inbox.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                flex: 1, padding: '1rem 1.5rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.95rem', outline: 'none'
              }}
            />
            <button
              style={{
                background: '#DA7927', color: '#fff', border: 'none',
                padding: '0 2.25rem', borderRadius: '50px',
                fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em', cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(218,121,39,0.3)', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#ECA12C'}
              onMouseLeave={e => e.currentTarget.style.background = '#DA7927'}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
