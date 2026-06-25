import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const ASSETS = {
  texture: '/assets/banner.png'
}

export default function Sitemap() {
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

  const linkStyle = {
    color: '#DA7927',
    textDecoration: 'none',
    fontSize: '1.05rem',
    transition: 'color 0.2s'
  }

  const subLinkStyle = {
    color: '#DA7927',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.2s'
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#faf7f2', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, paddingBottom: '4rem' }}>
        {/* HERO SECTION */}
        <section style={{ position: 'relative', overflow: 'hidden', minHeight: '40vh', display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${ASSETS.texture})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(20,20,20,0.9) 0%, rgba(20,20,20,0.6) 100%)',
          }} />
          <div ref={heroRef} style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1, width: '100%', paddingTop: '100px', paddingBottom: "30px" }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.5rem, 7vw, 6rem)',
              fontWeight: 800, color: '#fff', lineHeight: 1.1,
            }}>
              Site<span style={{ color: '#DA7927', fontStyle: 'italic' }}>map</span>
            </h1>
          </div>
        </section>

        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginLeft: '1rem' }}>
            <ul style={{ listStyleType: 'disc', color: '#DA7927', display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: 0, padding: 0, paddingLeft: '1.5rem' }}>
              <li>
                <Link to="/" style={linkStyle}>Home</Link>
              </li>
              <li>
                <Link to="/about" style={linkStyle}>About US</Link>
              </li>
              <li>
                <Link to="/infrastructure" style={linkStyle}>Infrastructure</Link>
              </li>
              <li>
                <Link to="/quality-exports" style={linkStyle}>Quality & Exports</Link>
              </li>
              <li>
                <Link to="/initiatives" style={linkStyle}>Initiatives</Link>
              </li>
              <li>
                <Link to="/sustainability" style={linkStyle}>Sustainability</Link>
                <ul style={{ listStyleType: 'circle', marginTop: '0.5rem', marginBottom: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingLeft: '1.5rem' }}>
                  <li><Link to="/sustainability#green-power" style={subLinkStyle}>Harnessing Green Power</Link></li>
                  <li><Link to="/sustainability#resources" style={subLinkStyle}>Sustainability Resources</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/blogs" style={linkStyle}>Blogs</Link>
              </li>
              <li>
                <Link to="/policies" style={linkStyle}>Policies</Link>
              </li>
              <li>
                <Link to="/reports" style={linkStyle}>Sustainable Development Reports</Link>
              </li>
              <li>
                <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal')) }} style={linkStyle}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
