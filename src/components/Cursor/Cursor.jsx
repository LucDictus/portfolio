import { useState, useEffect } from 'react'
import { useCursor } from '../../hooks/useCursor.js'
import styles from './Cursor.module.css'

export default function Cursor() {
  const { dotRef, ringRef } = useCursor()
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)
    const els = document.querySelectorAll('a, button')
    els.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => {
      els.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot} />
      <div
        ref={ringRef}
        className={`${styles.ring} ${hovering ? styles.hovering : ''}`}
      />
    </>
  )
}
