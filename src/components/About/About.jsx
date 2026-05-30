import { useEffect, useRef } from 'react'
import { about } from '../../data/about.js'
import styles from './About.module.css'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(`.${styles.reveal}`)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add(styles.visible)
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section} id="about" ref={ref}>
      <div className={`${styles.left} ${styles.reveal}`}>
        <div>
          <h2 className={styles.name}>
            {about.name.split(' ').map((w, i) => (
              <span key={i}>{i === 1 ? <em>{w}</em> : w}<br /></span>
            ))}
          </h2>
          <div className={styles.role}>{about.role} · {about.location}</div>
        </div>
        <div className={styles.links}>
          {about.links.map((l) => (
            <a key={l.label} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className={`${styles.right} ${styles.reveal}`}>
        <p className={styles.bio}>
          {about.bio.map((paragraph, i) => (
            <span key={i}>
              {paragraph}
              {i < about.bio.length - 1 && <><br /><br /></>}
            </span>
          ))}
        </p>
        <div className={styles.stackLabel}>Stack</div>
        <div className={styles.stackGrid}>
          {about.stack.map((s) => (
            <span key={s} className={styles.pill}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
