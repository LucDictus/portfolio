import styles from './DiagramHero.module.css'

/**
 * DiagramHero — de draw-in SVG op de hero.
 *
 * animate: boolean — zet op true zodra de loader klaar is,
 * dan starten de CSS animations.
 *
 * Later: vervang de inline SVG door jouw eigen architectuurdiagram.
 * De structuur (dline / dnode classes + animation-delay) blijft hetzelfde.
 */
export default function DiagramHero({ animate }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.eyebrow}>Project 01 — architectuur</div>
      <svg
        className={`${styles.svg} ${animate ? styles.animate : ''}`}
        width="100%"
        viewBox="0 0 580 200"
        role="img"
        aria-label="Architectuurdiagram van project 01"
      >
        <defs>
          <marker
            id="mhero"
            viewBox="0 0 10 10"
            refX="8" refY="5"
            markerWidth="5" markerHeight="5"
            orient="auto-start-reverse"
          >
            <path
              d="M2 1L8 5L2 9"
              fill="none"
              stroke="context-stroke"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {/* Lines */}
        <line className="dline" x1="86"  y1="100" x2="120" y2="100" stroke="#CCC" strokeWidth="0.6" markerEnd="url(#mhero)" style={{ animationDelay: '0.05s' }} />
        <line className="dline" x1="234" y1="100" x2="270" y2="65"  stroke="#CCC" strokeWidth="0.6" markerEnd="url(#mhero)" style={{ animationDelay: '0.3s'  }} />
        <line className="dline" x1="234" y1="100" x2="270" y2="135" stroke="#CCC" strokeWidth="0.6" markerEnd="url(#mhero)" style={{ animationDelay: '0.3s'  }} />
        <line className="dline" x1="360" y1="65"  x2="394" y2="88"  stroke="#CCC" strokeWidth="0.6" markerEnd="url(#mhero)" style={{ animationDelay: '0.55s' }} />
        <line className="dline" x1="360" y1="135" x2="394" y2="112" stroke="#CCC" strokeWidth="0.6" markerEnd="url(#mhero)" style={{ animationDelay: '0.55s' }} />
        <line className="dline" x1="464" y1="100" x2="498" y2="100" stroke="#CCC" strokeWidth="0.6" markerEnd="url(#mhero)" style={{ animationDelay: '0.8s'  }} />

        {/* Browser */}
        <g className="dnode" style={{ animationDelay: '0s' }}>
          <rect x="8" y="76" width="78" height="48" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5" />
          <text x="47" y="98"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9"   fill="#333">Browser</text>
          <text x="47" y="113" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">React 18</text>
        </g>

        {/* API Gateway */}
        <g className="dnode" style={{ animationDelay: '0.18s' }}>
          <rect x="120" y="62" width="114" height="76" rx="3" fill="#0D0D0D" stroke="#0D0D0D" strokeWidth="0.5" />
          <text x="177" y="90"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9"   fill="#F5F5F3">API Gateway</text>
          <text x="177" y="105" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="rgba(245,245,243,0.45)">Symfony 6</text>
          <text x="177" y="119" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="rgba(245,245,243,0.45)">REST / JWT</text>
        </g>

        {/* Auth */}
        <g className="dnode" style={{ animationDelay: '0.38s' }}>
          <rect x="270" y="44" width="90" height="42" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5" />
          <text x="315" y="62"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9"   fill="#333">Auth</text>
          <text x="315" y="76"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">OAuth 2.0</text>
        </g>

        {/* Queue */}
        <g className="dnode" style={{ animationDelay: '0.38s' }}>
          <rect x="270" y="114" width="90" height="42" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5" />
          <text x="315" y="132" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9"   fill="#333">Queue</text>
          <text x="315" y="146" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">RabbitMQ</text>
        </g>

        {/* Database */}
        <g className="dnode" style={{ animationDelay: '0.62s' }}>
          <rect x="394" y="72" width="70" height="56" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5" />
          <text x="429" y="96"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9"   fill="#333">Database</text>
          <text x="429" y="111" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">PostgreSQL</text>
        </g>

        {/* Cache */}
        <g className="dnode" style={{ animationDelay: '0.8s' }}>
          <rect x="498" y="82" width="72" height="36" rx="3" fill="#F5F5F3" stroke="#E2E2E0" strokeWidth="0.5" />
          <text x="534" y="98"  textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9"   fill="#333">Cache</text>
          <text x="534" y="111" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#AAA">Redis</text>
        </g>
      </svg>
    </div>
  )
}
