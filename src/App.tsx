import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CV from './components/CV'

function HomePage() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!ready) return
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    const stop = () => lenis.stop()
    const start = () => lenis.start()
    window.addEventListener('lenis:stop', stop)
    window.addEventListener('lenis:start', start)
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => {
      window.removeEventListener('lenis:stop', stop)
      window.removeEventListener('lenis:start', start)
      lenis.destroy()
    }
  }, [ready])

  return (
    <>
      <AnimatePresence>
        {!ready && <SplashScreen onComplete={() => setReady(true)} />}
      </AnimatePresence>

      {ready && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  )
}
