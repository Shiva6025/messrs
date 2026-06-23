import { useEffect } from 'react'

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem'
    }}>
      <div 
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }} 
        onClick={onClose}
      />
      
      <div style={{
        position: 'relative', width: '100%', maxWidth: '600px',
        background: '#1b1c2e', borderRadius: '24px', padding: '3rem',
        boxShadow: '0 25px 50px rgba(0,0,0,0.3)', color: '#fff',
        fontFamily: "'Inter', sans-serif"
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'rgba(255,255,255,0.1)', border: 'none',
            width: '36px', height: '36px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', cursor: 'pointer', transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem' }}>
          Send Us a Message
        </h2>

        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Full Name</label>
              <input 
                type="text" 
                placeholder="Your name"
                style={{
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  padding: '1rem 1.25rem', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none'
                }}
                onFocus={e => e.target.style.borderColor = '#DA7927'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Email Address</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                style={{
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  padding: '1rem 1.25rem', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none'
                }}
                onFocus={e => e.target.style.borderColor = '#DA7927'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Phone Number</label>
              <input 
                type="tel" 
                placeholder="+91 12345 67890"
                style={{
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  padding: '1rem 1.25rem', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none'
                }}
                onFocus={e => e.target.style.borderColor = '#DA7927'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Company / Organization</label>
              <input 
                type="text" 
                placeholder="Your company"
                style={{
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  padding: '1rem 1.25rem', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none'
                }}
                onFocus={e => e.target.style.borderColor = '#DA7927'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Message</label>
            <textarea 
              rows="4"
              placeholder="Tell us about your requirements..."
              style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                padding: '1rem 1.25rem', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none',
                resize: 'none', fontFamily: "'Inter', sans-serif"
              }}
              onFocus={e => e.target.style.borderColor = '#DA7927'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          <button 
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #DA7927, #ECA12C)', color: '#fff',
              padding: '1.25rem', borderRadius: '12px', border: 'none',
              fontWeight: 800, fontSize: '1rem', letterSpacing: '0.1em', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              marginTop: '1rem', boxShadow: '0 10px 25px rgba(218,121,39,0.3)',
              transition: 'transform 0.2s', textTransform: 'uppercase'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            onClick={() => {
              alert("Message sent successfully!");
              onClose();
            }}
          >
            Send Message
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>
    </div>
  )
}
