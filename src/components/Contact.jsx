import { useRef, useEffect, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: '12px',
    border: '1px solid rgba(218,121,39,0.2)',
    background: 'rgba(255,255,255,0.05)',
    color: '#fff',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'all 0.3s',
    fontFamily: "'Inter', sans-serif",
  }

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #1a0a02 0%, #0d1440 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218,121,39,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(40,47,129,0.2) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        <div
          ref={ref}
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Info */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#ECA12C', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
                Contact Us
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '1.25rem',
              lineHeight: 1.2,
            }}>
              Let's Build Something{' '}
              <span style={{ color: '#ECA12C' }}>Together</span>
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Whether you're looking to source premium tobacco, explore partnership opportunities, or learn more about our community programs — we'd love to hear from you.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: 'Address',
                  value: 'Guntur, Andhra Pradesh, India',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+91 863 225 XXXX',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'info@polisettysons.com',
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(218,121,39,0.15)',
                    border: '1px solid rgba(218,121,39,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ECA12C',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>
                      {item.label}
                    </div>
                    <div style={{ color: '#fff', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid rgba(218,121,39,0.15)',
          }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#fff',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}>
                  Send Us a Message
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '6px', letterSpacing: '0.05em' }}>
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      required
                      style={inputStyle}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      onFocus={e => {
                        e.target.style.borderColor = 'rgba(218,121,39,0.6)'
                        e.target.style.background = 'rgba(255,255,255,0.08)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(218,121,39,0.1)'
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'rgba(218,121,39,0.2)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '6px', letterSpacing: '0.05em' }}>
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      style={inputStyle}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      onFocus={e => {
                        e.target.style.borderColor = 'rgba(218,121,39,0.6)'
                        e.target.style.background = 'rgba(255,255,255,0.08)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(218,121,39,0.1)'
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'rgba(218,121,39,0.2)'
                        e.target.style.background = 'rgba(255,255,255,0.05)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '6px', letterSpacing: '0.05em' }}>
                    Company / Organization
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Your company"
                    style={inputStyle}
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    onFocus={e => {
                      e.target.style.borderColor = 'rgba(218,121,39,0.6)'
                      e.target.style.background = 'rgba(255,255,255,0.08)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(218,121,39,0.1)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(218,121,39,0.2)'
                      e.target.style.background = 'rgba(255,255,255,0.05)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '6px', letterSpacing: '0.05em' }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell us about your requirements..."
                    required
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    onFocus={e => {
                      e.target.style.borderColor = 'rgba(218,121,39,0.6)'
                      e.target.style.background = 'rgba(255,255,255,0.08)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(218,121,39,0.1)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(218,121,39,0.2)'
                      e.target.style.background = 'rgba(255,255,255,0.05)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                    color: '#fff',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 25px rgba(218,121,39,0.4)',
                    textTransform: 'uppercase',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(218,121,39,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(218,121,39,0.4)' }}
                >
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 10px 30px rgba(218,121,39,0.4)',
                }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
