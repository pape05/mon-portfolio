import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const CX = 200
const CY = 200

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
  }).join(' ')
}

function hexVertices(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  })
}

const outerRing = { r: 140, opacity: 0.15, delay: 0.8 }
const middleRing = { r: 100, opacity: 0.18, delay: 1.1 }
const innerRing = { r: 55, opacity: 0.22, delay: 1.4 }

const symbols = [
  { text: '{', x: 70, y: 125, delay: 0 },
  { text: '}', x: 325, y: 285, delay: 1.5 },
  { text: '()', x: 315, y: 105, delay: 0.8 },
  { text: '=>', x: 85, y: 295, delay: 2 },
]

const springConfig = { stiffness: 80, damping: 20 }

export default function HeroVisual() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const layer1X = useTransform(smoothX, (v) => v * 4)
  const layer1Y = useTransform(smoothY, (v) => v * 4)

  const layer2X = useTransform(smoothX, (v) => v * 10)
  const layer2Y = useTransform(smoothY, (v) => v * 10)

  const layer3X = useTransform(smoothX, (v) => v * 18)
  const layer3Y = useTransform(smoothY, (v) => v * 18)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
      className="w-full aspect-square max-w-lg mx-auto"
    >
      <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.07} />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
          </radialGradient>
        </defs>

        <circle cx={CX} cy={CY} r={190} fill="url(#hero-glow)" />

        {/* Layer 1 — inner hex + center symbol (subtle movement) */}
        <motion.g style={{ x: layer1X, y: layer1Y }}>
          <motion.polygon
            points={hexPoints(CX, CY, innerRing.r)}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={0.6}
            opacity={innerRing.opacity}
            strokeDasharray={6 * innerRing.r}
            initial={{ strokeDashoffset: 6 * innerRing.r }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, delay: innerRing.delay, ease: 'easeInOut' }}
          />
          <motion.text
            x={CX}
            y={CY + 7}
            textAnchor="middle"
            fill="var(--color-accent)"
            fontSize={22}
            fontFamily="ui-monospace, monospace"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {'</>'}
          </motion.text>
        </motion.g>

        {/* Layer 2 — middle hex + inner orbit (medium movement) */}
        <motion.g style={{ x: layer2X, y: layer2Y }}>
          <motion.polygon
            points={hexPoints(CX, CY, middleRing.r)}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={0.6}
            opacity={middleRing.opacity}
            strokeDasharray={6 * middleRing.r}
            initial={{ strokeDashoffset: 6 * middleRing.r }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, delay: middleRing.delay, ease: 'easeInOut' }}
          />
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          >
            <circle cx={CX} cy={CY - 100} r={2.5} fill="var(--color-accent)" opacity={0.4} />
            <circle cx={CX} cy={CY + 100} r={1.5} fill="var(--color-accent)" opacity={0.25} />
          </motion.g>
          {hexVertices(CX, CY, middleRing.r).map((v, vi) => (
            <motion.circle
              key={`v-1-${vi}`}
              cx={v.x}
              cy={v.y}
              r={1.5}
              fill="var(--color-accent)"
              animate={{ opacity: [0.1, 0.35, 0.1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: vi * 0.3 + 0.5,
              }}
            />
          ))}
        </motion.g>

        {/* Layer 3 — outer hex + outer orbit + symbols (strong movement) */}
        <motion.g style={{ x: layer3X, y: layer3Y }}>
          <motion.polygon
            points={hexPoints(CX, CY, outerRing.r)}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={0.6}
            opacity={outerRing.opacity}
            strokeDasharray={6 * outerRing.r}
            initial={{ strokeDashoffset: 6 * outerRing.r }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, delay: outerRing.delay, ease: 'easeInOut' }}
          />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          >
            <circle
              cx={CX} cy={CY} r={170}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={0.4}
              strokeDasharray="3 10"
              opacity={0.1}
            />
            <circle cx={CX + 170} cy={CY} r={3.5} fill="var(--color-accent)" opacity={0.5} />
            <circle cx={CX - 170} cy={CY} r={2} fill="var(--color-accent)" opacity={0.3} />
          </motion.g>
          {hexVertices(CX, CY, outerRing.r).map((v, vi) => (
            <motion.circle
              key={`v-0-${vi}`}
              cx={v.x}
              cy={v.y}
              r={1.5}
              fill="var(--color-accent)"
              animate={{ opacity: [0.1, 0.35, 0.1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: vi * 0.3,
              }}
            />
          ))}
          {symbols.map(({ text, x, y, delay }) => (
            <motion.text
              key={`${text}-${x}`}
              x={x}
              y={y}
              fill="var(--color-accent)"
              fontSize={11}
              fontFamily="ui-monospace, monospace"
              animate={{
                opacity: [0.1, 0.25, 0.1],
                y: [y, y - 4, y],
              }}
              transition={{
                duration: 4 + delay,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
              }}
            >
              {text}
            </motion.text>
          ))}
        </motion.g>
      </svg>
    </motion.div>
  )
}
