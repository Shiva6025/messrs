import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
const logoSvg = '/assets/logo (1).svg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isAbout = location.pathname === '/about'
  const isInfra = location.pathname === '/infrastructure'
  const isQuality = location.pathname === '/quality-exports'
  const isInit = location.pathname === '/initiatives'
  const isSust = location.pathname === '/sustainability'
  const isBlogs = location.pathname === '/blogs'
  const isPolicies = location.pathname === '/policies'
  const isSubPage = isAbout || isInfra || isQuality || isInit || isSust || isBlogs || isPolicies

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* On sub-pages the navbar is always opaque (no transparent hero behind it) */
  const alwaysOpaque = isSubPage

  const navLinks = [
    { label: 'About Us', href: '/about', isRoute: true },
    { label: 'Infrastructure', href: '/infrastructure', isRoute: true },
    { label: 'Quality & Exports', href: '/quality-exports', isRoute: true },
    { label: 'Initiatives', href: '/initiatives', isRoute: true },
    { label: 'Sustainability', href: '/sustainability', isRoute: true },
    { label: 'Blogs', href: '/blogs', isRoute: true },
    { label: 'Policies', href: '/policies', isRoute: true },
  ]

  const textDark = alwaysOpaque || scrolled
  const navBg = alwaysOpaque
    ? 'rgba(255, 251, 245, 0.97)'
    : scrolled
      ? 'rgba(255, 251, 245, 0.95)'
      : 'transparent'

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
        background: navBg,
        backdropFilter: (alwaysOpaque || scrolled) ? 'blur(20px)' : 'none',
        boxShadow: (alwaysOpaque || scrolled) ? '0 2px 40px rgba(218,121,39,0.15)' : 'none',
        borderBottom: (alwaysOpaque || scrolled) ? '1px solid rgba(218,121,39,0.2)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img src={logoSvg} alt="Polisetty Logo" style={{ width: '52px', height: '52px' }} />
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: '1.05rem',
                color: textDark ? '#1a1008' : '#fff',
                lineHeight: 1.1,
                transition: 'color 0.4s',
                textShadow: textDark ? 'none' : '0 2px 8px rgba(0,0,0,0.5)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
                MESSRS
              </div>
              <div style={{
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: textDark ? '#DA7927' : '#ECA12C',
                textTransform: 'uppercase',
                transition: 'color 0.4s',
                fontWeight: 600,
                lineHeight: 1.2,
              }}>
                Polisetty Somasundaram
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map(link => {
              const isActive = link.isRoute && location.pathname === link.href
              if (link.isRoute) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="underline-anim"
                    style={{
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.875rem',
                      letterSpacing: '0.05em',
                      color: isActive ? '#DA7927' : (textDark ? '#3d2c1e' : 'rgba(255,255,255,0.9)'),
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      textTransform: 'uppercase',
                    }}
                    onMouseEnter={e => e.target.style.color = '#DA7927'}
                    onMouseLeave={e => e.target.style.color = isActive ? '#DA7927' : (textDark ? '#3d2c1e' : 'rgba(255,255,255,0.9)')}
                  >
                    {link.label}
                  </Link>
                )
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="underline-anim"
                  style={{
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    color: textDark ? '#3d2c1e' : 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={e => e.target.style.color = '#DA7927'}
                  onMouseLeave={e => e.target.style.color = textDark ? '#3d2c1e' : 'rgba(255,255,255,0.9)'}
                >
                  {link.label}
                </a>
              )
            })}
            
            {location.pathname === '/' ? (
              <a 
                href="#contact"
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(218,121,39,0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 20px rgba(218,121,39,0.4)' }}
                onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(218,121,39,0.3)' }}
              >
                Get in Touch
              </a>
            ) : (
              <button 
                onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(218,121,39,0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 20px rgba(218,121,39,0.4)' }}
                onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(218,121,39,0.3)' }}
              >
                Get in Touch
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
