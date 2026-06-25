const logoSvg = '/assets/logo (1).svg'

const footerLinks = {
  Company: ['About Us', 'Our History', 'Leadership', 'Careers'],
  Products: ['Virginia Tobacco', 'Burley Tobacco', 'Fire-Cured', 'Specialty Blends'],
  'Social Impact': ['Village Programs', 'Health Centres', 'Education', 'Sustainability'],
  Contact: ['Get a Quote', 'Partnership', 'Support', 'Media Enquiry'],
}

export default function Footer() {
  return (
    <footer style={{
      background: '#0d0804',
      borderTop: '1px solid rgba(218,121,39,0.15)',
    }}>
      {/* Main footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: '3rem', marginBottom: '2rem' }}>

          {/* Brand */}
          <div style={{ paddingRight: '2rem' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem', textDecoration: 'none' }}>
              <img src={logoSvg} alt="Polisetty Logo" style={{ width: '52px', height: '52px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  color: '#fff',
                  lineHeight: 1,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  MESSRS
                </div>
                <div style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  color: '#ECA12C',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  lineHeight: 1,
                }}>
                  POLISETTY
                </div>
                <div style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  color: '#ECA12C',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  lineHeight: 1,
                }}>
                  SOMASUNDARAM
                </div>
              </div>
            </a>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '280px' }}>
              Eight decades of excellence in premium tobacco trading, community development, and sustainable agricultural partnerships.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { label: 'LinkedIn', link: "https://www.linkedin.com/company/messrs-polisetty-somasundaram", path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                { label: 'Facebook', link: "https://www.facebook.com/shyamsundar.polisetty/", path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              ].map(({ label, link, path }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(218,121,39,0.1)',
                    border: '1px solid rgba(218,121,39,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ECA12C',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(218,121,39,0.25)'
                    e.currentTarget.style.borderColor = 'rgba(218,121,39,0.5)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(218,121,39,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(218,121,39,0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['About Us', 'Infrastructure', 'Sustainability', 'Quality & Exports', 'Contact Us'].map(link => (
                <li key={link}>
                  <a
                    href={link === 'Contact Us' ? '#' : (link === 'About Us' ? '/about' : `/${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`)}
                    onClick={(e) => {
                      if (link === 'Contact Us') {
                        e.preventDefault()
                        window.dispatchEvent(new Event('open-contact-modal'))
                      }
                    }}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#ECA12C'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
            }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Blogs', 'Sustainable Development Reports', 'Privacy Policy', 'Compliance and Policies'].map(link => {
                let href = '#'
                if (link === 'Blogs') href = '/blogs'
                if (link === 'Compliance and Policies') href = '/policies'
                if (link === 'Sustainable Development Reports') href = '/reports'
                if (link === 'Privacy Policy') href = '/privacy-policy'

                return (
                  <li key={link}>
                    <a
                      href={href}
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => e.target.style.color = '#ECA12C'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                    >
                      {link}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Initiatives', 'Products', 'Sitemap'].map(link => {
                let href = '#'
                if (link === 'Initiatives') href = '/initiatives'
                if (link === 'Products') href = '/quality-exports#export-excellence'
                if (link === 'Sitemap') href = '/sitemap'

                return (
                  <li key={link}>
                    <a
                      href={href}
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => e.target.style.color = '#ECA12C'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                    >
                      {link}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Reach us at */}
          <div>
            <h4 style={{
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
            }}>
              Reach us at
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <a
                  href="mailto:pssundar@polisetty.com"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ECA12C'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  pssundar@polisetty.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918632221852"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ECA12C'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91-8632221852
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ color: '#fff', fontSize: '0.85rem' }}>
            Copyright © {new Date().getFullYear()} <span style={{ color: '#ECA12C', fontWeight: 600 }}>Polisetty Somasundaram</span>. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
