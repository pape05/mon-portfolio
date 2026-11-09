import { motion } from 'framer-motion'
import { User, Calendar, MapPin, GraduationCap } from 'lucide-react'

const details = [
  { icon: User, label: 'Nom', value: 'Papa Amadou Sarr' },
  { icon: Calendar, label: 'Expérience', value: '2+ ans' },
  { icon: MapPin, label: 'Localisation', value: 'Dakar, Sénégal' },
  { icon: GraduationCap, label: 'Formation', value: 'Licence Génie Informatique — UNIPRO' },
]

const spring = { type: 'spring' as const, stiffness: 100, damping: 20 }

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring },
}

export default function About() {
  return (
    <section id="about" className="py-32 md:py-44 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            À propos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter leading-none mb-14">
            Qui suis-je ?
          </h2>

          <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
            <div>
              <p className="text-muted leading-relaxed mb-6 max-w-[55ch]">
                Diplômé en génie informatique, spécialisé en développement web,
                je conçois des applications complètes, du backend au frontend.
                Mon approche combine rigueur technique et souci du détail pour
                livrer des solutions fiables et agréables à utiliser.
              </p>
              <p className="text-muted leading-relaxed max-w-[55ch]">
                Rigoureux et curieux, je souhaite contribuer à des projets
                innovants tout en développant mes compétences en développement
                logiciel, Data et Intelligence Artificielle.
              </p>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {details.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="bg-card p-5 rounded-xl border border-border hover:border-accent/20 hover:shadow-[0_8px_30px_-12px_rgba(37,99,235,0.12)] transition-all"
                >
                  <Icon size={18} className="text-accent mb-3" strokeWidth={1.8} />
                  <p className="text-xs text-muted uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-sm font-semibold text-primary">{value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
