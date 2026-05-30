import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TransitionProvider } from './context/TransitionContext.jsx'
import Cursor    from './components/Cursor/Cursor.jsx'
import Home      from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <TransitionProvider>
        <Cursor />
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/project/:slug"  element={<CaseStudy />} />
        </Routes>
      </TransitionProvider>
    </BrowserRouter>
  )
}
