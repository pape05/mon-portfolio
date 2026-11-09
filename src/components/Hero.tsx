import { motion } from 'framer-motion'
import { ArrowDown, FileText, Mail } from 'lucide-react'
import Typewriter from './Typewriter'
import HeroVisual from './HeroVisual'
import MagneticButton from './MagneticButton'

function GitHubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const spring = { type: 'spring' as const, stiffness: 100, damping: 20 }

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: spring },
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center bg-base relative">
      <div className="max-w-6xl mx-auto px-6 w-full py-32">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-accent font-medium text-sm tracking-widest uppercase mb-6"
          >
            Développeur Full Stack
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold text-primary tracking-tighter leading-none mb-8"
          >
            <Typewriter text="Papa Amadou Sarr" delay={400} speed={65} />
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-muted max-w-[55ch] leading-relaxed mb-10"
          >
            Je conçois des applications web modernes, performantes et soignées
            — du backend au pixel final.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-14">
            <MagneticButton
              href="#contact"
              className="px-7 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light active:scale-[0.97] transition-all"
            >
              Me contacter
            </MagneticButton>
            <MagneticButton
              href="#projects"
              className="px-7 py-3 border border-border text-primary font-medium rounded-lg hover:bg-surface active:scale-[0.97] transition-all"
            >
              Voir mes projets
            </MagneticButton>
            <MagneticButton
              href="/images/Papa_Amadou_Sarr_FlowCV_Resume_2026-11-09.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 border border-border text-primary font-medium rounded-lg hover:bg-surface active:scale-[0.97] transition-all inline-flex items-center gap-2"
            >
              <FileText size={16} strokeWidth={2} />
              Voir mon CV
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-5">
            <MagneticButton
              href="https://github.com/pape05"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-primary transition-colors"
              strength={0.5}
            >
              <GitHubIcon size={20} />
            </MagneticButton>
            <MagneticButton
              href="https://www.linkedin.com/in/papa-amadou-sarr-77b16b300/"
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-primary transition-colors"
              strength={0.5}
            >
              <LinkedInIcon size={20} />
            </MagneticButton>
            <MagneticButton
              href="mailto:papeamadousarr476@icloud.com"
              className="text-muted hover:text-primary transition-colors"
              strength={0.5}
            >
              <Mail size={20} />
            </MagneticButton>
          </motion.div>
        </motion.div>
        <div className="hidden md:block">
          <HeroVisual />
        </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, ...spring }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  )
}
