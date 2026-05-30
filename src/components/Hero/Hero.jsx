import { useState, useEffect } from 'react'
import { about } from '../../data/about.js'
import DiagramHero from '../DiagramHero/DiagramHero.jsx'
import styles from './Hero.module.css'

export default function Hero({ ready }) {
  const [wordsVisible, setWordsVisible] = useState([false, false])
  const [diagVisible,  setDiagVisible]  = useState(false)

  useEffect(() => {
    if (!ready) return
    setTimeout(() => setDiagVisible(true),        60)
    setTimeout(() => setWordsVisible([true, false]), 100)
    setTimeout(() => setWordsVisible([true, true]),  220)
  }, [ready])

  return (
    <section className={styles.hero}>
      <div className={styles.centre}>
        <div className={`${styles.diagramMask} ${diagVisible ? styles.revealed : ''}`}>
          <DiagramHero animate={ready} />
        </div>
      </div>
    </section>
  )
}