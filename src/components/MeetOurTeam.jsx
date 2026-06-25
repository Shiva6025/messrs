import { useState } from 'react'

const teamData = {
  "Leadership Members": [
    { name: "Sri. Polisetty Sri Hari Prasadarao", image: "/assets/Sri-Polisetty-Srihari-Prasada-Rao.webp" },
    { name: "Sri. Polisetty Shyam Sundar", image: "/assets/Sri-Polisetty-Shyam-Sundar.webp" },
    { name: "Sri. Polisetty Srirama Chandra Murthy", image: "/assets/Sri.-Polisetty-Srirama-Chandra-Murthy.jpg" },
    { name: "Sri. Polisetty Gopala Krishna Murthy", image: "/assets/Sri-Polisetty-Gopala-Krishna-Murthy.jpg" },
  ],
  "Leaf Department": [
    { name: "Craig Johnston", image: "/assets/Craig-Jhonston.jpg" },
    { name: "P. Ramakrishna Reddy", image: "/assets/PRamaKrishnaReddy.jpg" },
    { name: "D. Vidyardhana Rao", image: "/assets/Danda-Vidyardhana-Rao.jpg" },
    { name: "H.L. Vasudeva", image: "/assets/HL-Vasudeva.jpg" },
    { name: "J.R. Silas", image: "/assets/J.-L-Silas.jpg" },
    { name: "J. Raghuram Prasad", image: "/assets/J.-Raghu-Ram-Prasad.jpg" },
    { name: "A. Surendra", image: "/assets/A.-Surendra.jpg" },
    { name: "A. Ramanjaneyulu", image: "/assets/ArlaRamanjaneyulu.jpg" },
    { name: "Y. Lakshman", image: "/assets/YLaxman.jpg" },
  ],
  "Factory Members": [
    { name: "Bashirulla Khan", image: "/assets/MBashirullaKhan.jpg" },
    { name: "N.V.L. Vinay Kumar", image: "/assets/NVLVinaykumar.jpg" },
    { name: "N. Venkateswarlu", image: "/assets/N.-Venkateswarlu.jpg" },
    { name: "P. Sagar Babu", image: "/assets/P.-Sagar-Babu.jpg" },
    { name: "T. Srinivasa Rao", image: "/assets/T.-Srinivasarao.jpg" },
    { name: "V. Suresh Babu", image: "/assets/V.-Suresh-Babu.jpg" },
  ],
  "Accounts & Finance": [
    { name: "Y. Chandrasekharao", image: "/assets/Y.-Chandra-Sekhra-rao.jpg" },
    { name: "K.V. Ganesh", image: "/assets/KVGanesh.jpg" },
    { name: "N.M.S Prasad", image: "/assets/N.M.S.-PRASAD.jpg" },
    { name: "A. V. Bhaskar Rao", image: "/assets/A.V.-Bhaskar-Rao.jpg" },
    { name: "Prem Chand", image: "/assets/K.-V.-Premchand-CA.jpg" },
  ]
}

export default function MeetOurTeam() {
  const categories = Object.keys(teamData)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <section style={{ padding: '0rem 0 6rem', background: '#fff', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #DA7927)' }} />
            <span style={{ color: '#DA7927', fontSize: '0.85rem', letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>
              Meet Our Team
            </span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #DA7927, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1a1008', margin: '0 0 1.5rem 0' }}>
            The People Behind
          </h2>
          <p style={{ color: '#6b5a4a', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
            Our Team comprises more than 360 individuals who play a crucial role in our company's success. We have some core Teams across the organization whose efforts transform our vision into a successful reality, day after day.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '1rem 2rem',
                  background: isActive ? '#DA7927' : 'rgba(218,121,39,0.05)',
                  color: isActive ? '#fff' : '#1a1008',
                  border: isActive ? '1px solid #DA7927' : '1px solid transparent',
                  borderRadius: '50px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 10px 20px rgba(218,121,39,0.2)' : 'none'
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(218,121,39,0.1)'
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(218,121,39,0.05)'
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Grid of Team Members */}
        <div
          key={activeCategory} // Forces re-render/animation on tab change
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '3rem',
            animation: 'fadeInUp 0.6s ease forwards'
          }}
        >
          {teamData[activeCategory].map((member, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#faf7f2',
                boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                cursor: 'pointer',
                group: 'member-card' // For logical grouping, though standard React doesn't use this directly, we'll use inline events
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.1)'
                const overlay = e.currentTarget.querySelector('.member-overlay')
                if (overlay) overlay.style.opacity = '1'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.05)'
                const overlay = e.currentTarget.querySelector('.member-overlay')
                if (overlay) overlay.style.opacity = '0'
              }}
            >
              {/* Image */}
              <div style={{ aspectRatio: '4/5', position: 'relative', background: '#333' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=1a1008&color=fff&size=512'
                  }}
                />

                {/* Hover Overlay */}
                <div
                  className="member-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(26, 16, 8, 0.9) 0%, rgba(26, 16, 8, 0.2) 50%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2rem'
                  }}
                >
                  <div style={{ width: '30px', height: '2px', background: '#DA7927', marginBottom: '1rem' }} />
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    margin: 0
                  }}>
                    {member.name}
                  </h4>
                </div>
              </div>

              {/* Default Label (visible when not hovering) */}
              <div style={{ padding: '1.5rem', textAlign: 'center', background: '#fff' }}>
                <h4 style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#1a1008',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  margin: 0
                }}>
                  {member.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Global Keyframes */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
      </div>
    </section>
  )
}
