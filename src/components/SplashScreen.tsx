import { useEffect } from 'react'
import { motion } from 'framer-motion'

const spring = { type: 'spring' as const, stiffness: 100, damping: 20 }

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2600)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-base flex items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex items-baseline">
        {['P', 'A', 'S'].map((letter, i) => (
          <motion.span
            key={i}
            className="text-6xl md:text-8xl font-bold text-primary tracking-tighter select-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, ...spring }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          className="text-6xl md:text-8xl font-bold text-accent select-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85, type: 'spring', stiffness: 200, damping: 12 }}
        >
          .
        </motion.span>
      </div>

      <motion.div
        className="absolute bottom-12 w-10 h-[2px] bg-accent/40 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.2, duration: 1.3, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
