import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

/**
 * CaseStudy — de pagina die opent na de project-transitie.
 *
 * Na mount: content faded in van onderaf (alsof de zwarte overlay
 * is verdwenen en de content eronder zichtbaar wordt).
 *
 * Later vul je hier de echte case study content per project in.
 */
export default function CaseStudy() {
  const { slug }    = useParams()
  const [in_, setIn] = useState(false)
  const project     = projects.find((p) => p.slug === slug)

  useEffect(() => {
    // Short delay so the transition overlay has faded
    const t = setTimeout(() => setIn(true), 80)
    return () => clearTimeout(t)
  }, [])

  if (!project) return (
    <div style={{ padding: '120px 44px', fontFamily: "'DM Mono',monospace" }}>
      <p>Project niet gevonden.</p>
      <Link to="/">← Terug</Link>
    </div>
  )

  const base = {
    fontFamily: "'DM Mono', monospace",
    opacity:    in_ ? 1 : 0,
    transform:  in_ ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>

      {/* Back nav */}
      <nav style={{
        ...base,
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '28px 44px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(13,13,13,0.09)',
        transitionDelay: '0.1s',
      }}>
        <Link to="/" style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#AEAAA4', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          ← Terug
        </Link>
        <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: '13px' }}>
          {project.title}
        </span>
      </nav>

      {/* Hero block */}
      <div style={{
        ...base,
        padding: '140px 44px 80px',
        borderBottom: '1px solid rgba(13,13,13,0.09)',
        transitionDelay: '0.05s',
      }}>
        <div style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8B89A', marginBottom: '20px' }}>
          Case study — {project.year}
        </div>
        <h1 style={{
          fontFamily: "'DM Serif Display',serif",
          fontSize: 'clamp(48px, 8vw, 96px)',
          lineHeight: 0.92, letterSpacing: '-0.025em',
          marginBottom: '32px',
        }}>
          {project.title}
        </h1>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {project.tags.map((t) => (
            <span key={t} style={{
              fontSize: '8px', letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '4px 10px', border: '0.5px solid rgba(13,13,13,0.16)', color: '#AEAAA4',
            }}>{t}</span>
          ))}
        </div>
        <p style={{ fontSize: '14px', lineHeight: 1.9, color: '#6A6560', maxWidth: '560px' }}>
          {project.description}
        </p>
      </div>

      {/* Placeholder sections — vul later in */}
      {['Probleem', 'Aanpak', 'Architectuur', 'Resultaat'].map((section, i) => (
        <div key={section} style={{
          ...base,
          padding: '72px 44px',
          borderBottom: '1px solid rgba(13,13,13,0.09)',
          transitionDelay: `${0.1 + i * 0.06}s`,
        }}>
          <div style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8B89A', marginBottom: '20px' }}>
            0{i + 1} — {section}
          </div>
          <div style={{
            height: '120px', background: '#F5F5F3',
            border: '0.5px solid rgba(13,13,13,0.09)', borderRadius: '4px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#AEAAA4',
          }}>
            Voeg hier je {section.toLowerCase()} content toe
          </div>
        </div>
      ))}

    </div>
  )
}
