import { useState } from 'react'
import Loader      from '../components/Loader/Loader.jsx'
import Nav         from '../components/Nav/Nav.jsx'
import Hero        from '../components/Hero/Hero.jsx'
import Featured    from '../components/Featured/Featured.jsx'
import ProjectList from '../components/ProjectList/ProjectList.jsx'
import About       from '../components/About/About.jsx'

export default function Home() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <Loader onDone={() => setReady(true)} />
      <Nav visible={ready} />
      <main>
        <Hero     ready={ready} />
        <Featured />
        <ProjectList />
        <About />
      </main>
      <footer style={{
        borderTop: '1px solid rgba(13,13,13,0.09)',
        padding: '22px 44px',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: "'DM Mono', monospace",
        fontSize: '9px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#AEAAA4',
      }}>
        <span>Jouw Naam</span>
        <span>Full stack developer · NL</span>
      </footer>
    </>
  )
}
