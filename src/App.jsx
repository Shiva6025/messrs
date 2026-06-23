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
    </>
  )
}

export default App
