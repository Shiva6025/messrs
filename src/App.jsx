import { Routes, Route } from 'react-router-dom'
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
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
    </Routes>
  )
}

export default App
