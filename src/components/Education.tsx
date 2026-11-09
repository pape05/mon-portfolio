import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

interface EducationItem {
  degree: string
  school: string
  period: string
  mention: string
  description: string
}

const education: EducationItem[] = [
  {
    degree: 'Licence en Génie Informatique',
    school: 'Univers Professionnel de Dakar (UNIPRO)',
    period: '2023 — 2026',
    mention: 'Très Bien',
    description:
      'Formation complète en développement logiciel, bases de données, réseaux et gestion de projets informatiques.',
  },
  {
    degree: 'Baccalauréat',
    school: 'Lycée Lamine Guèye',
    period: '2022 — 2023',
    mention: 'Assez Bien',
    description:
      'Obtention du baccalauréat avec mention, ouvrant la voie vers les études supérieures en informatique.',
  },
]

const spring = { type: 'spring' as const, stiffness: 100, damping: 20 }

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: spring },
}

export default function Education() {
  return (
    <section id="education" className="py-32 md:py-44 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Formation
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter leading-none mb-14">
            Parcours académique
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-border md:left-[calc(theme(spacing.44)+19px)]" />

          <div className="space-y-8">
            {education.map((item) => (
              <motion.div
                key={item.degree}
                variants={fadeUp}
                className="relative grid md:grid-cols-[theme(spacing.44)_1fr] gap-6 md:gap-10"
              >
                <div className="hidden md:flex items-start pt-1 justify-end">
                  <span className="text-sm font-semibold text-muted tracking-wide">
                    {item.period}
                  </span>
                </div>

                <div className="relative pl-12 md:pl-12">
                  <div className="absolute left-0 md:left-0 top-1 w-10 h-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                    <GraduationCap size={18} className="text-accent" strokeWidth={1.8} />
                  </div>

                  <div className="bg-card rounded-xl border border-border p-6 hover:border-accent/20 hover:shadow-[0_8px_30px_-12px_rgba(37,99,235,0.08)] transition-all">
                    <span className="md:hidden text-xs font-semibold text-accent uppercase tracking-widest mb-2 block">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-semibold text-primary mb-1 tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-muted mb-3">
                      {item.school}
                    </p>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-lg">
                      Mention {item.mention}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
