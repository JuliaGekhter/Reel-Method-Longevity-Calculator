import { HealthInputs } from '../types'
import styles from './InputForm.module.css'

interface Props {
  inputs: HealthInputs
  onChange: (inputs: HealthInputs) => void
  onCalculate: () => void
}

const scaleLabels: Record<number, string> = {
  1: 'Very Low',
  2: 'Low',
  3: 'Moderate',
  4: 'High',
  5: 'Very High',
}

const stressLabels: Record<number, string> = {
  1: 'Very Low',
  2: 'Low',
  3: 'Moderate',
  4: 'High',
  5: 'Very High',
}

export default function InputForm({ inputs, onChange, onCalculate }: Props) {
  function update<K extends keyof HealthInputs>(key: K, value: HealthInputs[K]) {
    onChange({ ...inputs, [key]: value })
  }

  return (
    <div className={styles.form}>
      <div className={styles.sectionTitle}>
        <span className={styles.sectionIcon}>R</span>
        <h2>Reflect — Know Your Baseline</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Current Age</label>
          <input
            type="number"
            min={18}
            max={120}
            value={inputs.age}
            onChange={e => update('age', Number(e.target.value))}
            className={styles.numberInput}
          />
        </div>
        <div className={styles.field}>
          <label>Biological Sex</label>
          <select
            value={inputs.biologicalSex}
            onChange={e => update('biologicalSex', e.target.value as 'male' | 'female')}
            className={styles.select}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={styles.field}>
          <label>BMI</label>
          <input
            type="number"
            min={12}
            max={60}
            step={0.1}
            value={inputs.bmi}
            onChange={e => update('bmi', Number(e.target.value))}
            className={styles.numberInput}
          />
          <span className={styles.hint}>
            {inputs.bmi < 18.5 ? 'Underweight' :
             inputs.bmi < 25 ? 'Healthy' :
             inputs.bmi < 30 ? 'Overweight' : 'Obese'}
          </span>
        </div>
      </div>

      <div className={styles.sectionTitle}>
        <span className={styles.sectionIcon}>E</span>
        <h2>Envision — Set Your Health Vision</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Sense of Purpose: {scaleLabels[inputs.purposeScore]}</label>
          <input
            type="range"
            min={1}
            max={5}
            value={inputs.purposeScore}
            onChange={e => update('purposeScore', Number(e.target.value) as 1|2|3|4|5)}
          />
          <div className={styles.rangeLabels}><span>Low</span><span>High</span></div>
        </div>
        <div className={styles.field}>
          <label>Social Connection: {scaleLabels[inputs.socialConnectionScore]}</label>
          <input
            type="range"
            min={1}
            max={5}
            value={inputs.socialConnectionScore}
            onChange={e => update('socialConnectionScore', Number(e.target.value) as 1|2|3|4|5)}
          />
          <div className={styles.rangeLabels}><span>Isolated</span><span>Connected</span></div>
        </div>
      </div>

      <div className={styles.sectionTitle}>
        <span className={styles.sectionIcon}>E</span>
        <h2>Execute — Your Daily Habits</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Exercise (hours/week): {inputs.exerciseHoursPerWeek}</label>
          <input
            type="range"
            min={0}
            max={20}
            step={0.5}
            value={inputs.exerciseHoursPerWeek}
            onChange={e => update('exerciseHoursPerWeek', Number(e.target.value))}
          />
          <div className={styles.rangeLabels}><span>0h</span><span>20h</span></div>
        </div>
        <div className={styles.field}>
          <label>Sleep (hours/night): {inputs.sleepHoursPerNight}</label>
          <input
            type="range"
            min={3}
            max={12}
            step={0.5}
            value={inputs.sleepHoursPerNight}
            onChange={e => update('sleepHoursPerNight', Number(e.target.value))}
          />
          <div className={styles.rangeLabels}><span>3h</span><span>12h</span></div>
        </div>
        <div className={styles.field}>
          <label>Smoking Status</label>
          <select
            value={inputs.smokingStatus}
            onChange={e => update('smokingStatus', e.target.value as 'never' | 'former' | 'current')}
            className={styles.select}
          >
            <option value="never">Never Smoked</option>
            <option value="former">Former Smoker</option>
            <option value="current">Current Smoker</option>
          </select>
        </div>
        <div className={styles.field}>
          <label>Alcohol (drinks/week): {inputs.alcoholDrinksPerWeek}</label>
          <input
            type="range"
            min={0}
            max={30}
            value={inputs.alcoholDrinksPerWeek}
            onChange={e => update('alcoholDrinksPerWeek', Number(e.target.value))}
          />
          <div className={styles.rangeLabels}><span>0</span><span>30</span></div>
        </div>
      </div>

      <div className={styles.sectionTitle}>
        <span className={styles.sectionIcon}>L</span>
        <h2>Learn — Adapt & Improve</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Diet Quality: {scaleLabels[inputs.dietQuality]}</label>
          <input
            type="range"
            min={1}
            max={5}
            value={inputs.dietQuality}
            onChange={e => update('dietQuality', Number(e.target.value) as 1|2|3|4|5)}
          />
          <div className={styles.rangeLabels}><span>Poor</span><span>Excellent</span></div>
        </div>
        <div className={styles.field}>
          <label>Stress Level: {stressLabels[inputs.stressLevel]}</label>
          <input
            type="range"
            min={1}
            max={5}
            value={inputs.stressLevel}
            onChange={e => update('stressLevel', Number(e.target.value) as 1|2|3|4|5)}
          />
          <div className={styles.rangeLabels}><span>Calm</span><span>Overwhelmed</span></div>
        </div>
      </div>

      <button className={styles.calculateBtn} onClick={onCalculate}>
        Calculate Your Longevity Score
      </button>
    </div>
  )
}
