import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

export default function Nav({ visible }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <span
        className={styles.logo}
        style={{
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'translateY(0)' : 'translateY(-6px)',
          transition: 'opacity 0.5s, transform 0.5s',
        }}
      >
        LD
      </span>

      <ul
        className={styles.links}
        style={{
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.5s 0.08s, transform 0.5s 0.08s',
        }}
      >
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#about">Contact</a></li>
        <li><a href="#featured" className={styles.active}>Works</a></li>
      </ul>
    </nav>
  )
}