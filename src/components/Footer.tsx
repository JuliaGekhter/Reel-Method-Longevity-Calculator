import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.hierarchy}>
          <span>Shape The Wave Longevity&trade;</span>
          <span className={styles.arrow}>&rarr;</span>
          <span>REEL&trade; Align Method&trade;</span>
          <span className={styles.arrow}>&rarr;</span>
          <span>ReelVerse AI&trade;</span>
          <span className={styles.arrow}>&rarr;</span>
          <span>ReelVerse OS&trade;</span>
        </div>
        <p className={styles.disclaimer}>
          This calculator provides estimates based on population-level health data.
          It is not medical advice. Consult a healthcare professional for personalized guidance.
        </p>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Shape The Wave Longevity&trade;. All rights reserved.</p>
      </div>
    </footer>
  )
}
