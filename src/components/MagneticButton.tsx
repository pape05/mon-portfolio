import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
  strength?: number
  onClick?: () => void
}

export default function MagneticButton({
  children,
  className = '',
  href,
  target,
  rel,
  strength = 0.35,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouse = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    setPos({ x, y })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block"
    >
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      >
        <Tag
          ref={ref as any}
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={className}
        >
          {children}
        </Tag>
      </motion.div>
    </motion.div>
  )
}
