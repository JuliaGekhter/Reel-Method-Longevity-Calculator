import { useState } from 'react'
import { HealthInputs } from './types'
import { calculateLongevity } from './calculator'
import Header from './components/Header'
import InputForm from './components/InputForm'
import Results from './components/Results'
import PricingPage from './components/PricingPage'
import Footer from './components/Footer'
import type { LongevityResult } from './types'

type View = 'calculator' | 'pricing'

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

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0.25rem',
  background: 'var(--bg-secondary)',
  borderRadius: 'var(--radius)',
  padding: 4,
  maxWidth: 360,
  margin: '0 auto',
}

function navBtn(active: boolean): React.CSSProperties {
  return {
    flex: 1,
    padding: '0.55rem 1rem',
    border: 'none',
    borderRadius: 8,
    background: active ? 'var(--bg-card)' : 'transparent',
    color: active ? 'var(--text-primary)' : 'var(--text-muted)',
    fontSize: '0.8rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: active ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
  }
}

export default function App() {
  const [view, setView] = useState<View>('calculator')
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
        <nav style={navStyle}>
          <button style={navBtn(view === 'calculator')} onClick={() => setView('calculator')}>Calculator</button>
          <button style={navBtn(view === 'pricing')} onClick={() => setView('pricing')}>Memberships</button>
        </nav>

        {view === 'calculator' && (
          <>
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
          </>
        )}

        {view === 'pricing' && <PricingPage />}
      </main>
      <Footer />
    </>
  )
}
