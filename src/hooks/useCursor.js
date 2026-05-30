import { useEffect, useRef } from 'react'

export function useCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }

    const loop = () => {
      const { mx, my } = pos.current
      pos.current.rx += (mx - pos.current.rx) * 0.11
      pos.current.ry += (my - pos.current.ry) * 0.11

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${pos.current.rx}px, ${pos.current.ry}px) translate(-50%, -50%)`
      }
      raf.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return { dotRef, ringRef }
}
