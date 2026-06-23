import { useRef, useEffect, useState } from 'react'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.style.opacity = '1'
          sectionRef.current.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handlePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setPlaying(!playing)
    }
  }

  return (
    <section style={{ padding: '1rem 0 3rem', background: '#faf7f2' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          ref={sectionRef}
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1rem',
            }}>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
              <span style={{ color: '#DA7927', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
                See the Legacy in Motion
              </span>
              <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
            </div>
            {/* <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
              fontWeight: 800,
              color: '#1a1008',
            }}>
              See the Legacy in Motion
            </h2> */}
          </div>

          {/* Video container */}
          <div style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            maxWidth: '900px',
            margin: '0 auto',
          }}
            onClick={handlePlay}
          >
            <video
              ref={videoRef}
              src="/assets/Polisetty-film-copressed.mp4"
              style={{
                width: '100%',
                display: 'block',
                aspectRatio: '16/9',
                objectFit: 'cover',
              }}
              loop
              playsInline
            />

            {/* Overlay */}
            {!playing && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(40,47,129,0.6), rgba(61,44,30,0.6))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                {/* Play button */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 40px rgba(218,121,39,0.6)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  animation: 'float 3s ease-in-out infinite',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: 500 }}>
                  Watch Our Story
                </p>
              </div>
            )}

            {/* Playing - small control bar */}
            {playing && (
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                padding: '8px 16px',
                color: '#fff',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ECA12C', animation: 'pulse 1.5s ease-in-out infinite' }} />
                Playing
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
