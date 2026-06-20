import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <svg viewBox="0 0 32 32" fill="none" className={styles.icon}>
              <circle cx="16" cy="16" r="15" fill="#0f172a"/>
              <path d="M4 18 C8 12, 12 22, 16 16 S24 10, 28 16" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M4 22 C8 16, 12 26, 16 20 S24 14, 28 20" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
            </svg>
          </div>
          <div>
            <h1 className={styles.title}>Shape The Wave Longevity<span className={styles.tm}>&trade;</span></h1>
            <p className={styles.subtitle}>REEL&trade; Align Method&trade; Calculator</p>
          </div>
        </div>
        <p className={styles.tagline}>Optimize health. Align habits. Live longer, better.</p>
      </div>
    </header>
  )
}
