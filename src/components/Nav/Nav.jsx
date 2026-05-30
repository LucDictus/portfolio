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
      {/* Logo — verborgen, de loader-naam staat op die positie */}
      <span style={{ visibility: 'hidden', fontFamily: 'DM Serif Display', fontSize: '13px' }}>
        Luc Dictus
      </span>

      <ul
        className={styles.links}
        style={{
          opacity:    visible ? 1 : 0,
          transform:  visible ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.5s, transform 0.5s',
        }}
      >
        <li><a href="#featured">werk</a></li>
        <li><a href="#personal">persoonlijk</a></li>
        <li><a href="#about">contact</a></li>
      </ul>
    </nav>
  )
} 