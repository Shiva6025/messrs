import { useRef, useEffect } from 'react'

const articles = [
  {
    category: 'Article',
    title: 'Data smart decision making to improve overall sustainability performance',
    date: '15.01.24',
    readTime: '2 min read',
    link: '#',
  },
  {
    category: 'Article',
    title: 'Operational Risk Management through Occupational Health and Safety',
    date: '12.01.24',
    readTime: '2 min read',
    link: '#',
  }
]

export default function LatestArticles({ title = "Polisetty in action" }) {
  const ref = useRef(null)

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

  return (
    <section style={{ padding: '4rem 0 3rem', background: '#faf7f2' }}>
      <div
        ref={ref}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          opacity: 0,
          transform: 'translateY(40px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 400,
          color: '#1a1008',
          letterSpacing: '-0.02em',
          marginBottom: '3rem',
        }}>
          {title}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
          maxWidth: '900px',
        }}>
          {articles.map((article, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.08)',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.06)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                color: '#DA7927',
                fontSize: '0.9rem',
                fontWeight: 500,
                marginBottom: '2rem',
              }}>
                {article.category}
              </div>

              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.4rem',
                fontWeight: 600,
                color: '#1a1008',
                lineHeight: 1.25,
                marginBottom: '2.5rem',
                flexGrow: 1,
              }}>
                {article.title}
              </h3>

              <a
                href={article.link}
                style={{
                  color: '#1a1008',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                  alignSelf: 'flex-start',
                  paddingBottom: '2px',
                  marginBottom: '4rem',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#1a1008'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'}
              >
                Read now
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.85rem',
                color: '#1a1008',
                fontWeight: 500,
              }}>
                <span>{article.date}</span>
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>|</span>
                <span style={{ flexGrow: 1 }}>{article.readTime}</span>
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>|</span>
                <button style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1008" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/blogs"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '0.875rem',
            letterSpacing: '0.06em',
            textDecoration: 'none',
            boxShadow: '0 8px 25px rgba(218,121,39,0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 35px rgba(218,121,39,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(218,121,39,0.35)' }}
        >
          View all
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
