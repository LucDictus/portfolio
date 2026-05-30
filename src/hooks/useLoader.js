import { useState, useEffect } from 'react'

/**
 * Returns { done } — true once the fake loader finishes.
 * Also adds/removes a class on <body> so global CSS can
 * hide overflow during loading.
 */
export function useLoader(duration = 1600) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setDone(true)
      document.body.style.overflow = ''
    }, duration + 400) // +400 for exit animation
    return () => clearTimeout(t)
  }, [duration])

  return { done }
}
