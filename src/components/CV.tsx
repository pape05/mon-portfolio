import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, Mail, MapPin } from 'lucide-react'

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const skills = {
  frontend: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML', 'CSS', 'Tailwind CSS'],
  backend: ['PHP / Laravel', 'Python / Django', 'REST API'],
  'base de données': ['PostgreSQL', 'MySQL'],
  outils: ['Git / GitHub', 'Docker', 'Linux', 'VS Code / Cursor', 'Postman'],
}

const experiences = [
  {
    role: 'Développeur Web Full-Stack',
    company: 'Tout Genie Informatique (TGI)',
    period: 'Juin 2025 — Juil. 2025',
    tasks: [
      "Conception et développement d'applications et de sites web",
      "Développement d'interfaces avec React et TypeScript",
      "Développement d'API et de fonctionnalités backend avec PHP et Python",
      'Conception et gestion de bases de données avec MySQL',
      'Utilisation de Git et Docker pour le développement et la gestion des projets',
    ],
  },
  {
    role: 'Développeur Web Junior',
    company: "Dev'It Centre",
    period: 'Mars 2024 — Avr. 2024',
    tasks: [
      "Participation à la conception et au développement d'applications et de sites web",
      'Création et personnalisation de sites web avec WordPress',
      "Conception de supports graphiques, notamment des affiches et des logos",
      "Contribution à l'amélioration de l'ergonomie et de la présentation visuelle des sites",
    ],
  },
]

const projects = [
  {
    title: 'WeuralDocs',
    description:
      'Plateforme de déclaration et recherche de CNI perdues/retrouvées avec OCR et cartographie interactive.',
    tags: ['React', 'TypeScript', 'Laravel', 'Tesseract OCR'],
  },
  {
    title: 'Gestion Immo',
    description:
      'Plateforme de gestion immobilière avec suivi des biens, contrats et paiements.',
    tags: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
  },
]

const spring = { type: 'spring' as const, stiffness: 100, damping: 20 }

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: spring },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-semibold text-accent uppercase tracking-[0.15em] mb-4 flex items-center gap-3">
      <span className="w-6 h-px bg-accent/40" />
      {children}
    </h2>
  )
}

export default function CV() {
  return (
    <div className="min-h-screen bg-base print:bg-white">
      <div className="print:hidden sticky top-0 z-10 bg-base/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-[880px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Retour au portfolio
          </Link>
          <a
            href="/images/Papa_Amadou_Sarr_FlowCV_Resume_2026-11-09.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-accent text-white rounded-lg hover:bg-accent-light active:scale-[0.96] transition-all"
          >
            <Download size={14} />
            Télécharger PDF
          </a>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="max-w-[880px] mx-auto my-8 px-4 print:my-0 print:px-0 print:max-w-none"
      >
        <motion.div
          variants={fadeIn}
          className="bg-card border border-border print:border-0 rounded-2xl print:rounded-none overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] print:shadow-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] print:grid-cols-[220px_1fr]">
            {/* ── Sidebar ── */}
            <aside className="bg-surface print:bg-[#f8fafc] p-7 border-b md:border-b-0 md:border-r border-border">
              <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center mb-7">
                <span className="text-xl font-bold text-accent tracking-tight">PAS</span>
              </div>

              {/* Contact */}
              <div className="mb-7">
                <h3 className="text-[10px] font-semibold text-accent uppercase tracking-[0.15em] mb-3">
                  Contact
                </h3>
                <div className="space-y-2.5">
                  <a
                    href="mailto:papeamadousarr476@icloud.com"
                    className="flex items-start gap-2.5 text-muted hover:text-primary transition-colors"
                  >
                    <Mail size={13} className="mt-0.5 shrink-0 text-accent/50" />
                    <span className="text-[11px] leading-relaxed break-all">
                      papeamadousarr476@icloud.com
                    </span>
                  </a>
                  <div className="flex items-start gap-2.5 text-muted">
                    <MapPin size={13} className="mt-0.5 shrink-0 text-accent/50" />
                    <span className="text-[11px]">Dakar, Sénégal</span>
                  </div>
                  <a
                    href="https://github.com/pape05"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-2.5 text-muted hover:text-primary transition-colors"
                  >
                    <span className="mt-0.5 shrink-0 text-accent/50">
                      <GitHubIcon />
                    </span>
                    <span className="text-[11px]">github.com/pape05</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/papa-amadou-sarr-77b16b300/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-2.5 text-muted hover:text-primary transition-colors"
                  >
                    <span className="mt-0.5 shrink-0 text-accent/50">
                      <LinkedInIcon />
                    </span>
                    <span className="text-[11px]">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-border mb-7" />

              {/* Skills */}
              <div className="mb-7">
                <h3 className="text-[10px] font-semibold text-accent uppercase tracking-[0.15em] mb-3">
                  Compétences
                </h3>

                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="mb-3 last:mb-0">
                    <p className="text-[9px] font-semibold text-muted uppercase tracking-wider mb-1.5">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {items.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-medium text-primary print:text-slate-700 bg-accent/8 print:bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-border mb-7" />

              {/* Languages */}
              <div>
                <h3 className="text-[10px] font-semibold text-accent uppercase tracking-[0.15em] mb-3">
                  Langues
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-primary print:text-slate-800">Français</span>
                    <span className="text-[9px] text-muted font-medium uppercase tracking-wide">
                      Natif
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-primary print:text-slate-800">Wolof</span>
                    <span className="text-[9px] text-muted font-medium uppercase tracking-wide">
                      Natif
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-primary print:text-slate-800">Anglais</span>
                    <span className="text-[9px] text-muted font-medium uppercase tracking-wide">
                      Intermédiaire
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            {/* ── Main content ── */}
            <main className="p-7 md:p-8">
              {/* Header */}
              <div className="mb-7 pb-6 border-b border-border">
                <h1 className="text-[28px] font-bold text-primary print:text-slate-900 tracking-tight leading-none mb-1.5">
                  Papa Amadou Sarr
                </h1>
                <p className="text-sm font-medium text-accent">Développeur Full Stack</p>
              </div>

              {/* Profile */}
              <motion.section variants={fadeIn} className="mb-7">
                <SectionTitle>Profil</SectionTitle>
                <p className="text-[12.5px] text-muted print:text-slate-600 leading-relaxed">
                  Passionné par le développement web et les nouvelles technologies, je conçois des
                  applications complètes, du backend au frontend. Mon approche combine rigueur
                  technique et souci du détail pour livrer des solutions fiables et agréables à
                  utiliser. Toujours à la recherche de nouveaux défis et d'opportunités pour
                  apprendre et évoluer.
                </p>
              </motion.section>

              {/* Experience */}
              <motion.section variants={fadeIn} className="mb-7">
                <SectionTitle>Expériences professionnelles</SectionTitle>
                <div className="space-y-5">
                  {experiences.map((exp) => (
                    <div key={exp.company} className="relative pl-4 border-l-2 border-accent/20">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent" />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-0.5">
                        <h3 className="text-[13px] font-semibold text-primary print:text-slate-800">
                          {exp.role}
                        </h3>
                        <span className="text-[10px] font-medium text-muted tracking-wide">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold text-accent/70 mb-2">{exp.company}</p>
                      <ul className="space-y-1">
                        {exp.tasks.map((task) => (
                          <li
                            key={task}
                            className="text-[11.5px] text-muted print:text-slate-600 leading-relaxed flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent/40 mt-[7px] shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Education */}
              <motion.section variants={fadeIn} className="mb-7">
                <SectionTitle>Formation</SectionTitle>
                <div className="relative pl-4 border-l-2 border-accent/20">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent" />
                  <h3 className="text-[13px] font-semibold text-primary print:text-slate-800">
                    Informatique
                  </h3>
                  <p className="text-[11px] text-muted mt-0.5">Formation en cours</p>
                </div>
              </motion.section>

              {/* Projects */}
              <motion.section variants={fadeIn}>
                <SectionTitle>Projets</SectionTitle>
                <div className="grid gap-3">
                  {projects.map((p) => (
                    <div
                      key={p.title}
                      className="p-4 rounded-xl border border-border bg-surface/40 print:bg-slate-50"
                    >
                      <h3 className="text-[13px] font-semibold text-primary print:text-slate-800 mb-1">
                        {p.title}
                      </h3>
                      <p className="text-[11px] text-muted print:text-slate-600 leading-relaxed mb-2.5">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-medium text-accent bg-accent/8 print:bg-blue-50 print:text-blue-700 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </main>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
