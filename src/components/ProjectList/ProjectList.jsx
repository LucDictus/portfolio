import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { otherProjects } from '../../data/projects.js'
import { useTransition } from '../../context/TransitionContext.jsx'
import styles from './ProjectList.module.css'

export default function ProjectList() {
  const ref      = useRef(null)
  const navigate = useNavigate()
  const { startTransition } = useTransition()

  useEffect(() => {
    if (!ref.current) return
    const rows = ref.current.querySelectorAll(`.${styles.row}`)
    const obs  = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add(styles.visible)
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    rows.forEach((row, i) => {
      row.style.transitionDelay = `${i * 0.07}s`
      obs.observe(row)
    })
    return () => obs.disconnect()
  }, [])

  function handleClick(e, slug) {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    startTransition(rect, () => navigate(`/project/${slug}`))
  }

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.head}>
        <span className={styles.title}>Meer projecten</span>
        <a href="#" className={styles.all}>Alle projecten →</a>
      </div>

      {otherProjects.map((p, i) => (
        <div
          key={p.id}
          className={styles.row}
          onClick={(e) => handleClick(e, p.slug)}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleClick(e, p.slug)}
        >
          <div className={styles.num}>0{i + 2}</div>
          <div>
            <div className={styles.name}>{p.title}</div>
            <div className={styles.stack}>{p.tags.join(' · ')}</div>
          </div>
          <div className={styles.arrow}>↗</div>
        </div>
      ))}
    </section>
  )
}
