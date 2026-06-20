export interface HealthInputs {
  age: number
  biologicalSex: 'male' | 'female'
  exerciseHoursPerWeek: number
  sleepHoursPerNight: number
  stressLevel: 1 | 2 | 3 | 4 | 5
  dietQuality: 1 | 2 | 3 | 4 | 5
  smokingStatus: 'never' | 'former' | 'current'
  alcoholDrinksPerWeek: number
  bmi: number
  socialConnectionScore: 1 | 2 | 3 | 4 | 5
  purposeScore: 1 | 2 | 3 | 4 | 5
}

export interface REELScores {
  reflect: number
  envision: number
  execute: number
  learn: number
  align: number
}

export interface LongevityResult {
  estimatedLifespan: number
  baselineLifespan: number
  yearsGainedOrLost: number
  reelScores: REELScores
  topRecommendations: string[]
  overallAlignmentScore: number
}
