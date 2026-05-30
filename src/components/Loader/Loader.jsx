import { useState, useEffect } from 'react'
import styles from './Loader.module.css'

const FIRST = 'Luc'
const LAST  = 'Dictus'

export default function Loader({ onDone }) {
  const [lettersIn,  setLettersIn]  = useState([])
  const [toCorner,   setToCorner]   = useState(false)
  const [overlayOut, setOverlayOut] = useState(false)
  const [background, setBackground] = useState(false)

  useEffect(() => {
    const allLetters = [...FIRST, ...LAST].length

    const letterTimers = [...Array(allLetters)].map((_, idx) =>
      setTimeout(() => {
        setLettersIn((prev) => [...prev, idx])
      }, 200 + idx * 65)
    )

    const totalDuration = 200 + allLetters * 65 + 400

    const t1 = setTimeout(() => setToCorner(true), totalDuration)

    const t2 = setTimeout(() => {
      setOverlayOut(true)
      onDone()
    }, totalDuration + 1050)

    // Zet naam naar achtergrond — content scrollt erover
    const t3 = setTimeout(() => setBackground(true), totalDuration + 1100)

    return () => {
      letterTimers.forEach(clearTimeout)
      ;[t1, t2, t3].forEach(clearTimeout)
    }
  }, [onDone])

  const firstLetters = [...FIRST].map((char, i) => ({ char, id: `f${i}`, globalIdx: i }))
  const lastLetters  = [...LAST ].map((char, i) => ({ char, id: `l${i}`, globalIdx: FIRST.length + i }))

  return (
    <>
      <div
        className={`${styles.name} ${toCorner ? styles.toCorner : ''}`}
        style={{ zIndex: background ? 0 : 901 }}
      >
        <div>
          {firstLetters.map(({ char, id, globalIdx }) => (
            <span
              key={id}
              className={`${styles.letter} ${lettersIn.includes(globalIdx) ? styles.in : ''}`}
            >
              {char}
            </span>
          ))}
        </div>
        <div>
          {lastLetters.map(({ char, id, globalIdx }) => (
            <span
              key={id}
              className={`${styles.letter} ${lettersIn.includes(globalIdx) ? styles.in : ''}`}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      <div className={`${styles.overlay} ${overlayOut ? styles.out : ''}`} />
    </>
  )
}