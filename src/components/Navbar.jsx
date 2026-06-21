import { useState, useEffect } from 'react'
const logoSvg = '/assets/logo (1).svg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Impact', href: '#impact' },
    { label: 'Sourcing', href: '#sourcing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(255, 251, 245, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 2px 40px rgba(218,121,39,0.15)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(218,121,39,0.2)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img src={logoSvg} alt="Polisetty Logo" style={{ width: '52px', height: '52px' }} />
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: scrolled ? '#1a1008' : '#fff',
                lineHeight: 1.2,
                transition: 'color 0.4s',
                textShadow: scrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.5)',
              }}>
                Messrs Polisetty
              </div>
              <div style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                color: scrolled ? '#DA7927' : '#ECA12C',
                textTransform: 'uppercase',
                transition: 'color 0.4s',
              }}>
                Somasundaram & Sons
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="underline-anim"
                style={{
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  color: scrolled ? '#3d2c1e' : 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => e.target.style.color = '#DA7927'}
                onMouseLeave={e => e.target.style.color = scrolled ? '#3d2c1e' : 'rgba(255,255,255,0.9)'}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                color: '#fff',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 15px rgba(218,121,39,0.4)',
              }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(218,121,39,0.5)' }}
              onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(218,121,39,0.4)' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
