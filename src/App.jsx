import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Legacy from './components/Legacy'
import Leadership from './components/Leadership'
import Differentiators from './components/Differentiators'
import Impact from './components/Impact'
import VideoSection from './components/VideoSection'
import LabQuality from './components/LabQuality'
import TobaccoSources from './components/TobaccoSources'
import Villages from './components/Villages'
import HealthCentres from './components/HealthCentres'
import LatestArticles from './components/LatestArticles'
import LocationMap from './components/LocationMap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Infrastructure from './pages/Infrastructure'
import QualityExport from './pages/QualityExport'
import Initiatives from './pages/Initiatives'
import Sustainability from './pages/Sustainability'
import Blogs from './pages/Blogs'
import Policies from './pages/Policies'
import ContactModal from './components/ContactModal'

/* ── Home page (unchanged) ─────────────────────────────────────── */
function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#faf7f2' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Legacy />
      {/* <Leadership /> */}
      <Differentiators />
      <Impact />
      <VideoSection />
      <LabQuality />
      {/* <TobaccoSources /> */}
      <Villages />
      <HealthCentres />
      <LatestArticles />
      <LocationMap />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  const [isContactModalOpen, setContactModalOpen] = useState(false)

  useEffect(() => {
    const handleOpenModal = () => setContactModalOpen(true)
    window.addEventListener('open-contact-modal', handleOpenModal)
    return () => window.removeEventListener('open-contact-modal', handleOpenModal)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('img-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const observeImages = () => {
      const images = document.querySelectorAll('img:not(.no-reveal):not([data-no-reveal="true"]):not(.img-reveal-left):not(.img-reveal-right)');
      images.forEach(img => {
        const rect = img.getBoundingClientRect();
        // Exclude tiny icons or 0 width (not rendered yet)
        if (rect.width > 60 && rect.height > 60) {
          const isLeft = (rect.left + rect.width / 2) < (window.innerWidth / 2);
          img.classList.add(isLeft ? 'img-reveal-left' : 'img-reveal-right');
          observer.observe(img);
        }
      });
    };

    const timer = setTimeout(observeImages, 300);

    const mutationObserver = new MutationObserver((mutations) => {
      let shouldCheck = false;
      mutations.forEach(m => {
        if (m.addedNodes.length > 0) shouldCheck = true;
      });
      if (shouldCheck) {
        setTimeout(observeImages, 100);
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/quality-exports" element={<QualityExport />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} />
      <button 
        onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '60px', height: '60px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #DA7927, #ECA12C)',
          color: '#fff',
          boxShadow: '0 4px 15px rgba(218,121,39,0.3)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(218,121,39,0.5)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(218,121,39,0.3)' }}
        title="Customer Care"
      >
        <svg className="animate-ring" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
      </button>
    </>
  )
}

export default App
