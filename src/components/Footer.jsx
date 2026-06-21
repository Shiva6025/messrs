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
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <img src={logoSvg} alt="Logo" style={{ width: '48px', height: '48px' }} />
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: '1rem', lineHeight: 1.2 }}>
                  Messrs Polisetty
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', color: '#ECA12C', textTransform: 'uppercase' }}>
                  Somasundaram & Sons
                </div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '280px' }}>
              Eight decades of excellence in premium tobacco trading, community development, and sustainable agricultural partnerships.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              ].map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
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

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                color: '#ECA12C',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: '0.825rem',
                        textDecoration: 'none',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => e.target.style.color = '#ECA12C'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(218,121,39,0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Messrs Polisetty Somasundaram & Sons. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(text => (
              <a
                key={text}
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.25)',
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.target.style.color = '#ECA12C'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.25)'}
              >
                {text}
              </a>
            ))}
          </div>
          <div style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: '0.7rem',
            letterSpacing: '0.05em',
          }}>
            Est. 1940 · Guntur, India
          </div>
        </div>
      </div>
    </footer>
  )
}
