import { useEffect, useRef } from 'react'

/**
 * Attach to any container ref. All children with class
 * 'reveal' inside it will animate in when they enter the viewport.
 *
 * Usage:
 *   const ref = useScrollReveal()
 *   return <section ref={ref}><div className="reveal">...</div></section>
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [threshold])

  return ref
}
