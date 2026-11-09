import { motion } from 'framer-motion'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

interface Skill {
  name: string
  icon: string
  level: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: `${DEVICON}/react/react-original.svg`, level: 85 },
      { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg`, level: 80 },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg`, level: 90 },
      { name: 'Tailwind CSS', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, level: 90 },
      { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg`, level: 95 },
      { name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg`, level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', icon: `${DEVICON}/php/php-original.svg`, level: 85 },
      { name: 'Laravel', icon: `${DEVICON}/laravel/laravel-original.svg`, level: 85 },
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg`, level: 75 },
      { name: 'Django', icon: `${DEVICON}/django/django-plain.svg`, level: 70 },
      { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg`, level: 65 },
      { name: 'REST API', icon: `${DEVICON}/json/json-original.svg`, level: 85 },
    ],
  },
  {
    title: 'Base de données',
    skills: [
      { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg`, level: 80 },
      { name: 'MySQL', icon: `${DEVICON}/mysql/mysql-original.svg`, level: 85 },
    ],
  },
  {
    title: 'Outils',
    skills: [
      { name: 'Git', icon: `${DEVICON}/git/git-original.svg`, level: 85 },
      { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg`, level: 65 },
      { name: 'Linux', icon: `${DEVICON}/linux/linux-original.svg`, level: 70 },
      { name: 'VS Code', icon: `${DEVICON}/vscode/vscode-original.svg`, level: 90 },
      { name: 'Postman', icon: `${DEVICON}/postman/postman-original.svg`, level: 80 },
      { name: 'Figma', icon: `${DEVICON}/figma/figma-original.svg`, level: 60 },
    ],
  },
]

const spring = { type: 'spring' as const, stiffness: 100, damping: 20 }

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: spring },
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-44 bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Compétences
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter leading-none mb-14">
            Mon stack technique
          </h2>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-muted uppercase tracking-widest mb-5">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeUp}
                    whileHover={{ y: -6, scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex flex-col items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-[0_8px_30px_-12px_rgba(37,99,235,0.1)] transition-[border-color,box-shadow] cursor-default"
                  >
                    <motion.div
                      className="w-10 h-10 flex items-center justify-center"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 2.5 + (i % 4) * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.25,
                      }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-9 h-9 object-contain"
                        loading="lazy"
                      />
                    </motion.div>
                    <span className="text-xs font-medium text-primary text-center">
                      {skill.name}
                    </span>
                    <div className="w-full mt-1">
                      <div className="w-full h-1 rounded-full bg-border overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
                        />
                      </div>
                      <span className="text-[10px] text-muted mt-1 block text-center">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
