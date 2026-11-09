import { Mail } from 'lucide-react'

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">
            Disponible pour de nouveaux projets
          </p>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none mb-8">
            Construisons quelque chose ensemble.
          </h3>
          <a
            href="#contact"
            className="inline-flex px-8 py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-light active:scale-[0.97] transition-all"
          >
            Me contacter
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#hero" className="text-xl font-bold text-white tracking-tight">
            PAS<span className="text-accent">.</span>
          </a>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/pape05"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/papa-amadou-sarr-77b16b300/"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:papeamadousarr476@icloud.com"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Mail size={18} strokeWidth={1.8} />
            </a>
          </div>

          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Papa Amadou Sarr
          </p>
        </div>
      </div>
    </footer>
  )
}
