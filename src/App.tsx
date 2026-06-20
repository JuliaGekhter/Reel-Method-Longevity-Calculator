import { useState } from 'react'
import { HealthInputs } from './types'
import { calculateLongevity } from './calculator'
import Header from './components/Header'
import InputForm from './components/InputForm'
import Results from './components/Results'
import Footer from './components/Footer'
import type { LongevityResult } from './types'

const defaultInputs: HealthInputs = {
  age: 35,
  biologicalSex: 'female',
  exerciseHoursPerWeek: 3,
  sleepHoursPerNight: 7,
  stressLevel: 3,
  dietQuality: 3,
  smokingStatus: 'never',
  alcoholDrinksPerWeek: 3,
  bmi: 23,
  socialConnectionScore: 3,
  purposeScore: 3,
}

export default function App() {
  const [inputs, setInputs] = useState<HealthInputs>(defaultInputs)
  const [result, setResult] = useState<LongevityResult | null>(null)

  function handleCalculate() {
    const r = calculateLongevity(inputs)
    setResult(r)
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <Header />
      <main style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}>
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-color)',
          padding: '1.5rem',
        }}>
          <InputForm inputs={inputs} onChange={setInputs} onCalculate={handleCalculate} />
        </div>

        {result && (
          <div id="results">
            <Results result={result} age={inputs.age} />
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
