import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, FolderOpen, X, ChevronLeft, ChevronRight } from 'lucide-react'

function GitHubSmallIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

interface Project {
  title: string
  description: string
  details: string
  tags: string[]
  link?: string
  github?: string
  image: string
  images: string[]
}

const projects: Project[] = [
  {
    title: 'WeuralDocs',
    description:
      'Plateforme qui aide les citoyens sénégalais à déclarer une CNI perdue, signaler une carte retrouvée et la retrouver.',
    details:
      'WeuralDocs utilise l\'OCR (Tesseract) pour extraire automatiquement les informations des cartes d\'identité. Les utilisateurs peuvent déclarer une perte, signaler un document retrouvé, et le système établit un matching intelligent entre les annonces. La cartographie interactive (Leaflet) permet de localiser les documents sur une carte. L\'application inclut également un chat en temps réel entre utilisateurs et un tableau de bord avec statistiques.',
    tags: ['React', 'TypeScript', 'Laravel', 'Tesseract OCR', 'Leaflet'],
    image: '/images/weuraldocs.png',
    images: [
      '/images/weuraldocs.png',
      '/images/connexion.png',
      '/images/inscription.png',
      '/images/dashboard-admin.png',
      '/images/espace-annonce.png',
      '/images/espace-correspondance.png',
      '/images/espace-utilisateur.png',
      '/images/publier-annonce.png',
      '/images/carte-annonces.png',
    ],
  },
  {
    title: 'Gestion Immo',
    description:
      'Plateforme de gestion immobilière pour agences et administrateurs avec supervision des biens, suivi des paiements et taux d\'occupation.',
    details:
      'Application complète de gestion immobilière permettant aux agences de suivre leurs bâtiments, connaître les appartements libres, créer des contrats et retrouver chaque paiement. Le tableau de bord offre une vue de supervision en temps réel avec des indicateurs clés : biens supervisés, taux d\'occupation et paiements mensuels. Interface moderne avec authentification sécurisée et gestion multi-agences.',
    tags: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/pape05/dakar-immobilier',
    image: '/images/gestion-image.png',
    images: [
      '/images/gestion-image.png',
      '/images/dashboard-agent.png',
      '/images/image copy 2.png',
      '/images/locataire.png',
      '/images/admin.png',
    ],
  },
  {
    title: 'BankMaster',
    description:
      'Application web de gestion bancaire complète en JavaScript vanilla avec tableau de bord interactif et simulation de prêts.',
    details:
      'BankMaster est une application de gestion bancaire complète développée en JavaScript vanilla. Elle permet la gestion des clients, des comptes et des opérations bancaires, ainsi que la simulation de prêts avec vérification d\'admissibilité. Le tableau de bord interactif intègre des graphiques pour le suivi des activités. L\'interface premium propose des effets visuels avancés : spotlight, glassmorphism et animations 3D.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/pape05/BankMaster',
    image: '/images/accueil-bank.png',
    images: [
      '/images/accueil-bank.png',
      '/images/clients.png',
      '/images/comptes.png',
      '/images/operations.png',
      '/images/prets.png',
      '/images/dashboard.png',
    ],
  },
  {
    title: 'Analyse Pro Python v1.0',
    description:
      'Application desktop Python avec interface graphique pour le calcul d\'IMC, l\'analyse de texte et l\'extraction de mots fréquents depuis des PDF.',
    details:
      'Analyse Pro Python v1.0 est une application desktop avec interface graphique qui permet de calculer et interpréter l\'IMC d\'un utilisateur, d\'analyser un texte collé pour extraire les mots de plus de 4 lettres avec leurs fréquences en pourcentage, et de charger un fichier PDF pour identifier et afficher par ordre décroissant les 10 mots les plus fréquents de plus de 4 lettres, accompagnés de diagrammes circulaire et en barres. Toutes les fonctionnalités sont regroupées dans une interface unifiée avec navigation latérale, onglets et activation par clé de produit.',
    tags: ['Python', 'CustomTkinter', 'Matplotlib', 'PyPDF2'],
    github: 'https://github.com/pape05/analyse-pro-python',
    image: '/images/accueil-analyse.png',
    images: [
      '/images/accueil-analyse.png',
      '/images/imc.png',
      '/images/texte.png',
      '/images/pdf.png',
      '/images/graphiques.png',
      '/images/activation.png',
    ],
  },
  {
    title: 'BiblioGestion',
    description:
      'Application de bureau en Java/JavaFX pour la gestion d\'une bibliothèque universitaire, avec une identité visuelle inspirée du drapeau sénégalais.',
    details:
      'BiblioGestion est une application desktop développée en Java 17 avec JavaFX 17 pour gérer une bibliothèque universitaire dans un contexte sénégalais. Elle couvre la gestion complète des documents (ajout, recherche, suppression), le suivi des adhérents, le système d\'emprunts avec dates de retour, et le calcul automatique des amendes en cas de retard. La palette de couleurs s\'inspire du drapeau national (vert, jaune, rouge) pour une identité visuelle locale et reconnaissable. Les données sont persistées via des fichiers texte plats (.txt), sans base de données externe.',
    tags: ['Java 17', 'JavaFX 17', 'Fichiers .txt'],
    github: 'https://github.com/pape05/BiblioGestion',
    image: '/images/accueil-biblio.png',
    images: [
      '/images/accueil-biblio.png',
      '/images/documents.png',
      '/images/adherents.png',
      '/images/emprunts.png',
      '/images/amendes.png',
    ],
  },
]

const spring = { type: 'spring' as const, stiffness: 100, damping: 20 }

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring },
}

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  if (images.length === 1) {
    return (
      <div className="bg-surface">
        <img src={images[0]} alt={alt} className="w-full h-auto" />
      </div>
    )
  }

  return (
    <div className="relative bg-surface">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${alt} - ${current + 1}`}
          className="w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </AnimatePresence>

      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-base/80 backdrop-blur-sm border border-border/50 text-primary hover:bg-base active:scale-[0.92] transition-all"
        aria-label="Image précédente"
      >
        <ChevronLeft size={18} strokeWidth={2} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-base/80 backdrop-blur-sm border border-border/50 text-primary hover:bg-base active:scale-[0.92] transition-all"
        aria-label="Image suivante"
      >
        <ChevronRight size={18} strokeWidth={2} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base/80 backdrop-blur-sm">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-accent w-5' : 'bg-muted/40 hover:bg-muted'
            }`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.dispatchEvent(new Event('lenis:stop'))
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.dispatchEvent(new Event('lenis:start'))
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      data-lenis-prevent
    >
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative bg-card rounded-2xl border border-border overflow-hidden w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-[0_24px_80px_-16px_rgba(0,0,0,0.25)]"
        initial={{ scale: 0.92, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 30 }}
        transition={spring}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-base/80 backdrop-blur-sm text-muted hover:text-primary active:scale-[0.92] transition-all"
          aria-label="Fermer"
        >
          <X size={16} strokeWidth={2} />
        </button>

        <ImageCarousel images={project.images} alt={project.title} />

        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen size={20} className="text-accent" strokeWidth={1.8} />
            <h3 className="text-xl font-bold text-primary tracking-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-muted leading-relaxed mb-6">
            {project.details}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {(project.github || project.link) && (
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-border text-primary text-sm font-medium rounded-lg hover:bg-surface active:scale-[0.97] transition-all"
                >
                  <GitHubSmallIcon size={16} />
                  Code source
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light active:scale-[0.97] transition-all"
                >
                  <ExternalLink size={16} strokeWidth={1.8} />
                  Voir le projet
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-32 md:py-44 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Projets
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter leading-none mb-14">
            Quelques-uns de mes projets
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              onClick={() => setSelected(project)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
              }}
              className="relative bg-card rounded-xl border border-border overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(600px_circle_at_var(--mx)_var(--my),var(--color-accent)/0.08,transparent_70%)] hover:border-accent/20 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.1)] transition-all group cursor-pointer"
            >
              <div className={`grid md:grid-cols-[1.2fr_1fr] gap-0 ${index % 2 !== 0 ? 'md:direction-rtl' : ''}`}>
                <div className={`aspect-video md:aspect-auto bg-surface overflow-hidden ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className={`p-8 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="flex items-start justify-between mb-5">
                    <FolderOpen size={22} className="text-accent" strokeWidth={1.8} />
                    <div className="flex items-center gap-3">
                      <span className="text-muted">
                        <GitHubSmallIcon size={17} />
                      </span>
                      <span className="text-muted">
                        <ExternalLink size={17} strokeWidth={1.8} />
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-muted bg-surface px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
