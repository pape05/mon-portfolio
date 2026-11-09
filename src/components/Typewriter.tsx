import { useState, useEffect } from 'react'

interface TypewriterProps {
  text: string
  delay?: number
  speed?: number
}

export default function Typewriter({ text, delay = 0, speed = 70 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) {
      const timer = setTimeout(() => setDone(true), 600)
      return () => clearTimeout(timer)
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [displayed, started, text, speed])

  return (
    <>
      {displayed}
      {started && !done && (
        <span className="inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle animate-[blink_0.8s_steps(2)_infinite]" />
      )}
    </>
  )
}
