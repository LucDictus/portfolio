import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { featuredProject } from '../../data/projects.js'
import { useTransition } from '../../context/TransitionContext.jsx'
import styles from './Featured.module.css'

export default function Featured() {
  const ref      = useRef(null)
  const navigate = useNavigate()
  const { startTransition } = useTransition()

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
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function handleCTA(e) {
    e.preventDefault()
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    startTransition(rect, () => navigate(`/project/${featuredProject.slug}`))
  }

  if (!featuredProject) return null
  const p = featuredProject

  return (
    <section className={styles.section} id="featured" ref={ref}>
      {/* Left — diagram */}
      <div className={`${styles.visual} ${styles.reveal}`}>
        <div className={styles.diagLabel}>Architectuur</div>
        <svg width="100%" viewBox="0 0 320 220" role="img" aria-label="Featured project architectuur">
          <defs>
            <marker id="mfeat" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </marker>
          </defs>
          <rect x="10" y="88" width="60" height="38" rx="3" fill="#0D0D0D"/>
          <text x="40" y="104" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill="#F5F5F3">Frontend</text>
          <text x="40" y="118" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="rgba(245,245,243,0.4)">React</text>
          <line x1="70" y1="107" x2="94" y2="107" stroke="#CCC" strokeWidth="0.6" markerEnd="url(#mfeat)"/>
          <rect x="94" y="68" width="74" height="78" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5"/>
          <text x="131" y="94"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9"   fill="#333">Symfony</text>
          <text x="131" y="108" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">API Platform</text>
          <text x="131" y="121" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">Doctrine</text>
          <text x="131" y="134" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">JWT</text>
          <line x1="168" y1="90"  x2="192" y2="60"  stroke="#CCC" strokeWidth="0.6" markerEnd="url(#mfeat)"/>
          <line x1="168" y1="107" x2="192" y2="107" stroke="#CCC" strokeWidth="0.6" markerEnd="url(#mfeat)"/>
          <line x1="168" y1="124" x2="192" y2="155" stroke="#CCC" strokeWidth="0.6" markerEnd="url(#mfeat)"/>
          <rect x="192" y="42"  width="68" height="34" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5"/>
          <text x="226" y="56"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8.5" fill="#333">PostgreSQL</text>
          <text x="226" y="69"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">primary</text>
          <rect x="192" y="90"  width="68" height="34" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5"/>
          <text x="226" y="104" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8.5" fill="#333">Redis</text>
          <text x="226" y="117" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">cache</text>
          <rect x="192" y="138" width="68" height="34" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5"/>
          <text x="226" y="152" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8.5" fill="#333">Messenger</text>
          <text x="226" y="165" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">async</text>
        </svg>
      </div>

      {/* Right — content */}
      <div className={`${styles.content} ${styles.reveal}`} style={{ transitionDelay: '0.12s' }}>
        <div className={styles.num}>Featured — 01</div>
        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagPrimary}`}>Featured</span>
          {p.tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <h2 className={styles.title}>{p.title}</h2>
        <p className={styles.desc}>{p.description}</p>
        <div className={styles.rule} />
        <div className={styles.meta}>
          <div className={styles.metaItem}>Duur<span>{p.duration}</span></div>
          <div className={styles.metaItem}>Type<span>{p.type}</span></div>
          <div className={styles.metaItem}>Status<span>{p.status}</span></div>
        </div>
        <a href={`/project/${p.slug}`} className={styles.cta} onClick={handleCTA}>
          Bekijk case study →
        </a>
      </div>
    </section>
  )
}
