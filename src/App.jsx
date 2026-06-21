import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Leadership from './components/Leadership'
import Differentiators from './components/Differentiators'
import Impact from './components/Impact'
import VideoSection from './components/VideoSection'
import TobaccoSources from './components/TobaccoSources'
import Villages from './components/Villages'
import HealthCentres from './components/HealthCentres'
import GlobalReach from './components/GlobalReach'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#faf7f2' }}>
      <Navbar />
      <Hero />
      <Stats />
      <Leadership />
      <Differentiators />
      <Impact />
      <VideoSection />
      <TobaccoSources />
      <Villages />
      <HealthCentres />
      <GlobalReach />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
