import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ASSETS = {
  texture: '/assets/banner.png'
}

export default function PrivacyPolicy() {
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

  const TextBlock = ({ title, children }) => (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1008', marginBottom: '1rem' }}>{title}</h3>
      <div style={{ color: '#333', fontSize: '1rem', lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  )

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#faf7f2', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, paddingBottom: '4rem' }}>
        {/* HERO SECTION */}
        <section style={{ position: 'relative', overflow: 'hidden', minHeight: '40vh', display: 'flex', alignItems: 'center', marginBottom: '4rem' }}>
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
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 800, color: '#fff', lineHeight: 1.1,
            }}>
              Privacy <span style={{ color: '#DA7927', fontStyle: 'italic' }}>Policy</span>
            </h1>
          </div>
        </section>

        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>

          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontWeight: 600, color: '#1a1008', marginBottom: '0.5rem', fontSize: '1rem' }}>
              Privacy Policy for Messrs Polisetty Somasundaram
            </p>
            <p style={{ color: '#1a1008', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Effective Date: 20-02-2024
            </p>
            <p style={{ color: '#333', fontSize: '1rem', lineHeight: 1.6 }}>
              Thank you for visiting Messrs Polisetty Somasundaram Website. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website.
            </p>
          </div>

          <TextBlock title="1. Collection of Personal Information">
            <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#1a1008' }}>1.1 Information You Provide</p>
            <p style={{ marginBottom: '1.5rem' }}>
              We may collect personal information that you voluntarily provide, such as your name, contact details, and other information when you interact with our website, subscribe to newsletters, or use our services.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#1a1008' }}>1.2 Automatically Collected Information</p>
            <p>
              We may automatically collect certain information, including your IP address, browser type, device information, and browsing patterns, to enhance your experience on our website and our internal analytics purpose.
            </p>
          </TextBlock>

          <TextBlock title="2. Use of Personal Information">
            <p style={{ marginBottom: '0.5rem' }}>We use collected information for various purposes, including:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li>Providing and improving our services</li>
              <li>Responding to inquiries and communications</li>
              <li>Analyzing website usage and trends</li>
              <li>Complying with legal obligations</li>
            </ul>
          </TextBlock>

          <TextBlock title="3. Cookies and Similar Technologies">
            <p>
              We use cookies and similar technologies to optimize your browsing experience. You can manage cookie preferences through your browser settings.
            </p>
          </TextBlock>

          <TextBlock title="4. Data Security">
            <p>
              We implement reasonable security measures to protect your personal information. While we strive to protect your data, please be aware that no method of transmission over the internet is entirely secure.
            </p>
          </TextBlock>

          <TextBlock title="5. Your Choices and Rights">
            <p>
              You can opt-out of certain communications by contacting us at <a href="mailto:pssundar@polisetty.com" style={{ color: '#DA7927', textDecoration: 'none' }}>pssundar@polisetty.com</a>.
            </p>
          </TextBlock>

          <TextBlock title="6. Updates to this Privacy Policy">
            <p>
              We may update this Privacy Policy periodically. The effective date at the top of the page indicates the latest revision. Please review this Privacy Policy regularly.
            </p>
          </TextBlock>

          <TextBlock title="7. Contact Information">
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <a href="mailto:pssundar@polisetty.com" style={{ color: '#DA7927', textDecoration: 'none' }}>pssundar@polisetty.com</a>.
            </p>
          </TextBlock>

        </div>
      </main>

      <Footer />
    </div>
  )
}
