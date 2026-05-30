import { createContext, useContext, useState, useRef } from 'react'

/**
 * TransitionContext
 *
 * Houdt de staat bij van de project-open animatie.
 * De ProjectCard slaat zijn bounding rect op en triggert de transitie.
 * De CaseStudy pagina pikt dit op en animeert van die positie naar fullscreen.
 */
const TransitionContext = createContext(null)

export function TransitionProvider({ children }) {
  const [originRect, setOriginRect] = useState(null)
  const [transitioning, setTransitioning] = useState(false)
  const overlayRef = useRef(null)

  function startTransition(rect, callback) {
    setOriginRect(rect)
    setTransitioning(true)
    // Give the overlay one frame to mount, then animate + navigate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (overlayRef.current) {
          overlayRef.current.style.transition =
            'transform 0.72s cubic-bezier(0.76, 0, 0.24, 1), border-radius 0.72s cubic-bezier(0.76, 0, 0.24, 1)'
          overlayRef.current.style.transform = 'translate(0, 0) scale(1)'
          overlayRef.current.style.borderRadius = '0px'
        }
        setTimeout(() => {
          callback()
          setTransitioning(false)
          setOriginRect(null)
        }, 740)
      })
    })
  }

  return (
    <TransitionContext.Provider value={{ originRect, transitioning, startTransition, overlayRef }}>
      {children}
      {/* Transition overlay — the expanding card */}
      {transitioning && originRect && (
        <TransitionOverlay rect={originRect} overlayRef={overlayRef} />
      )}
    </TransitionContext.Provider>
  )
}

function TransitionOverlay({ rect, overlayRef }) {
  const vw = window.innerWidth
  const vh = window.innerHeight

  // Scale needed to fill viewport from the card rect
  const scaleX = vw / rect.width
  const scaleY = vh / rect.height

  // Initial position: card's top-left relative to viewport
  const tx = rect.left + rect.width  / 2 - vw / 2
  const ty = rect.top  + rect.height / 2 - vh / 2

  return (
    <div
      ref={overlayRef}
      style={{
        position:     'fixed',
        inset:        0,
        zIndex:       700,
        background:   '#0D0D0D',
        borderRadius: '8px',
        transform:    `translate(${tx}px, ${ty}px) scale(${1 / scaleX}, ${1 / scaleY})`,
        transformOrigin: 'center center',
        willChange:   'transform, border-radius',
        pointerEvents: 'none',
      }}
    />
  )
}

export function useTransition() {
  return useContext(TransitionContext)
}
