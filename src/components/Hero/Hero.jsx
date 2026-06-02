import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { featuredProject } from '../../data/projects.js'
import { useTransition } from '../../context/TransitionContext.jsx'
import styles from './Hero.module.css'

export default function Hero({ ready }) {
  const [wordsVisible, setWordsVisible] = useState([false, false])
  const [cardVisible,  setCardVisible]  = useState(false)
  const cardRef  = useRef(null)
  const navigate = useNavigate()
  const { startTransition } = useTransition()

  useEffect(() => {
    if (!ready) return
    setTimeout(() => setCardVisible(true),            80)
    setTimeout(() => setWordsVisible([true, false]),  160)
    setTimeout(() => setWordsVisible([true, true]),   300)
  }, [ready])

  function handleCard(e) {
    e.preventDefault()
    if (!cardRef.current || !featuredProject) return
    const rect = cardRef.current.getBoundingClientRect()
    startTransition(rect, () => navigate(`/project/${featuredProject.slug}`))
  }

  return (
    <section className={styles.hero}>

      {/* ── Centre: floating project card ── */}
      <div className={styles.centre}>
        <div
          ref={cardRef}
          className={`${styles.card} ${cardVisible ? styles.cardIn : ''}`}
          onClick={handleCard}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleCard(e)}
        >
          <div className={styles.cardVisual}>
            <svg width="100%" viewBox="0 0 320 200" role="img" aria-label="Featured project preview">
              <defs>
                <marker id="mcard" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
              </defs>
              <rect x="10" y="88" width="60" height="38" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5"/>
              <text x="40" y="104" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#555">Frontend</text>
              <text x="40" y="116" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#AAA">React</text>
              <line x1="70" y1="107" x2="94" y2="107" stroke="#CCC" strokeWidth="0.5" markerEnd="url(#mcard)"/>
              <rect x="94" y="68" width="74" height="76" rx="3" fill="#0D0D0D"/>
              <text x="131" y="93"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8"   fill="#F5F5F3">Symfony</text>
              <text x="131" y="106" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="rgba(245,245,243,0.4)">API Platform</text>
              <text x="131" y="118" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="rgba(245,245,243,0.4)">Doctrine</text>
              <text x="131" y="130" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="rgba(245,245,243,0.4)">JWT</text>
              <line x1="168" y1="88"  x2="192" y2="60"  stroke="#CCC" strokeWidth="0.5" markerEnd="url(#mcard)"/>
              <line x1="168" y1="107" x2="192" y2="107" stroke="#CCC" strokeWidth="0.5" markerEnd="url(#mcard)"/>
              <line x1="168" y1="126" x2="192" y2="152" stroke="#CCC" strokeWidth="0.5" markerEnd="url(#mcard)"/>
              <rect x="192" y="42"  width="68" height="34" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5"/>
              <text x="226" y="56"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#333">PostgreSQL</text>
              <text x="226" y="68"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#AAA">primary</text>
              <rect x="192" y="88"  width="68" height="34" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5"/>
              <text x="226" y="102" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#333">Redis</text>
              <text x="226" y="114" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#AAA">cache</text>
              <rect x="192" y="136" width="68" height="34" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5"/>
              <text x="226" y="150" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#333">Messenger</text>
              <text x="226" y="162" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="6.5" fill="#AAA">async</text>
            </svg>
          </div>

          <div className={styles.cardOverlay}>
            {featuredProject && (
              <>
                <span className={styles.cardTitle}>{featuredProject.title}</span>
                <span className={styles.cardSub}>{featuredProject.tags[0]}</span>
                <button className={styles.cardPill}>Bekijk project</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}