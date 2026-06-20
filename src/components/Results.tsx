import { LongevityResult } from '../types'
import styles from './Results.module.css'

interface Props {
  result: LongevityResult
  age: number
}

function ScoreBar({ label, score, letter, color }: { label: string; score: number; letter: string; color: string }) {
  return (
    <div className={styles.scoreRow}>
      <div className={styles.scoreLetter} style={{ background: color }}>{letter}</div>
      <div className={styles.scoreInfo}>
        <div className={styles.scoreLabel}>
          <span>{label}</span>
          <span className={styles.scoreValue}>{score}/100</span>
        </div>
        <div className={styles.barTrack}>
          <div
            className={styles.barFill}
            style={{ width: `${score}%`, background: color }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Results({ result, age }: Props) {
  const yearsRemaining = Math.max(0, Math.round((result.estimatedLifespan - age) * 10) / 10)
  const isPositive = result.yearsGainedOrLost >= 0

  return (
    <div className={styles.results}>
      <div className={styles.hero}>
        <div className={styles.lifespanCard}>
          <p className={styles.lifespanLabel}>Estimated Lifespan</p>
          <p className={styles.lifespanValue}>{result.estimatedLifespan}</p>
          <p className={styles.lifespanUnit}>years</p>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Years Remaining</span>
            <span className={styles.statValue}>{yearsRemaining}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>vs. Baseline</span>
            <span className={`${styles.statValue} ${isPositive ? styles.positive : styles.negative}`}>
              {isPositive ? '+' : ''}{result.yearsGainedOrLost} yrs
            </span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Alignment</span>
            <span className={styles.statValue}>{result.overallAlignmentScore}%</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>REEL&trade; Alignment Scores</h3>
        <p className={styles.sectionDesc}>Reflect. Envision. Execute. Learn. Align.</p>
        <div className={styles.scores}>
          <ScoreBar label="Reflect" score={result.reelScores.reflect} letter="R" color="#38bdf8" />
          <ScoreBar label="Envision" score={result.reelScores.envision} letter="E" color="#818cf8" />
          <ScoreBar label="Execute" score={result.reelScores.execute} letter="E" color="#34d399" />
          <ScoreBar label="Learn" score={result.reelScores.learn} letter="L" color="#fbbf24" />
          <ScoreBar label="Align" score={result.reelScores.align} letter="A" color="#a78bfa" />
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Top Recommendations</h3>
        <p className={styles.sectionDesc}>Build habits. Break patterns. Live aligned.</p>
        <ul className={styles.recommendations}>
          {result.topRecommendations.map((rec, i) => (
            <li key={i} className={styles.recItem}>
              <span className={styles.recBullet} />
              {rec}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.ecosystem}>
        <p className={styles.ecosystemLabel}>Powered by</p>
        <p className={styles.ecosystemBrand}>ReelVerse AI&trade;</p>
        <p className={styles.ecosystemTagline}>Behavior change powered by intelligence.</p>
      </div>
    </div>
  )
}
