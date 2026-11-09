import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  tasks: string[]
}

const experiences: ExperienceItem[] = [
  {
    role: 'Développeur Web Full-Stack',
    company: 'Tout Genie Informatique (TGI)',
    location: 'Dakar, Sénégal',
    period: 'Juin 2025 — Juillet 2025',
    tasks: [
      'Conception et développement d\'applications et de sites web',
      'Développement d\'interfaces avec React et TypeScript',
      'Développement d\'API et de fonctionnalités backend avec PHP et Python',
      'Conception et gestion de bases de données avec MySQL',
      'Utilisation de Git et Docker pour le développement et la gestion des projets',
    ],
  },
  {
    role: 'Développeur Web Junior',
    company: 'Dev\'It Centre',
    location: 'Dakar, Sénégal',
    period: 'Mars 2024 — Avril 2024',
    tasks: [
      'Participation à la conception et au développement d\'applications et de sites web',
      'Création et personnalisation de sites web avec WordPress',
      'Conception de supports graphiques, notamment des affiches et des logos',
      'Contribution à l\'amélioration de l\'ergonomie et de la présentation visuelle des sites',
    ],
  },
]

const spring = { type: 'spring' as const, stiffness: 100, damping: 20 }

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring },
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-44 bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Parcours
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter leading-none mb-14">
            Expériences
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              className={`relative grid md:grid-cols-2 gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? '' : 'md:direction-rtl'
              }`}
            >
              <div className={`${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                <div className="flex items-center gap-3 mb-3 md:justify-end md:flex-row">
                  <div className={`md:hidden w-6 h-6 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center flex-shrink-0`}>
                    <Briefcase size={12} className="text-accent" />
                  </div>
                  <span className="text-xs font-medium text-accent uppercase tracking-widest">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">{exp.role}</h3>
                <p className="text-sm font-medium text-muted">{exp.company}</p>
                <p className="text-xs text-muted/70 mb-4">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.tasks.map((task) => (
                    <li key={task} className="text-sm text-muted leading-relaxed flex items-start gap-2 md:justify-end">
                      <span className={`${i % 2 === 0 ? 'md:order-2' : ''}`}>
                        <span className="inline-block w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      </span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`hidden md:flex items-start ${i % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12 md:justify-end'}`}>
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                  <Briefcase size={12} className="text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
