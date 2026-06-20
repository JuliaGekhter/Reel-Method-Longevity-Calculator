import { HealthInputs, LongevityResult, REELScores } from './types'

const BASELINE_MALE = 76.3
const BASELINE_FEMALE = 81.2

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

function calculateExerciseImpact(hoursPerWeek: number): number {
  if (hoursPerWeek >= 7) return 4.5
  if (hoursPerWeek >= 5) return 3.8
  if (hoursPerWeek >= 3) return 2.5
  if (hoursPerWeek >= 1) return 1.0
  return -2.0
}

function calculateSleepImpact(hours: number): number {
  if (hours >= 7 && hours <= 9) return 2.0
  if (hours >= 6 && hours < 7) return 0.0
  if (hours >= 9 && hours <= 10) return 0.5
  return -2.5
}

function calculateDietImpact(quality: number): number {
  const impacts = [0, -3.0, -1.0, 0.5, 2.5, 4.0]
  return impacts[quality]
}

function calculateStressImpact(level: number): number {
  const impacts = [0, 1.5, 0.5, -0.5, -2.0, -4.0]
  return impacts[level]
}

function calculateSmokingImpact(status: string): number {
  if (status === 'current') return -10.0
  if (status === 'former') return -3.0
  return 1.0
}

function calculateAlcoholImpact(drinksPerWeek: number): number {
  if (drinksPerWeek === 0) return 0.5
  if (drinksPerWeek <= 7) return 0.0
  if (drinksPerWeek <= 14) return -1.5
  return -4.0
}

function calculateBMIImpact(bmi: number): number {
  if (bmi >= 18.5 && bmi < 25) return 2.0
  if (bmi >= 25 && bmi < 30) return -1.0
  if (bmi >= 30 && bmi < 35) return -3.0
  if (bmi >= 35) return -5.0
  return -2.0
}

function calculateSocialImpact(score: number): number {
  const impacts = [0, -3.0, -1.0, 0.5, 2.0, 3.5]
  return impacts[score]
}

function calculatePurposeImpact(score: number): number {
  const impacts = [0, -2.0, -0.5, 0.5, 2.0, 3.0]
  return impacts[score]
}

function calculateREELScores(inputs: HealthInputs): REELScores {
  const reflect = clamp(
    ((inputs.stressLevel <= 2 ? 80 : inputs.stressLevel <= 3 ? 60 : 30) +
      (inputs.purposeScore * 20)) / 2,
    0, 100
  )

  const envision = clamp(
    (inputs.purposeScore * 20 + inputs.socialConnectionScore * 10 +
      (inputs.dietQuality >= 4 ? 20 : inputs.dietQuality >= 3 ? 10 : 0)),
    0, 100
  )

  const execute = clamp(
    (Math.min(inputs.exerciseHoursPerWeek / 7, 1) * 40 +
      (inputs.sleepHoursPerNight >= 7 && inputs.sleepHoursPerNight <= 9 ? 30 : 10) +
      (inputs.smokingStatus === 'never' ? 30 : inputs.smokingStatus === 'former' ? 15 : 0)),
    0, 100
  )

  const learn = clamp(
    ((inputs.dietQuality * 15) +
      (inputs.bmi >= 18.5 && inputs.bmi < 25 ? 25 : 10) +
      (inputs.alcoholDrinksPerWeek <= 7 ? 20 : 5)),
    0, 100
  )

  const align = clamp(
    (reflect + envision + execute + learn) / 4,
    0, 100
  )

  return {
    reflect: Math.round(reflect),
    envision: Math.round(envision),
    execute: Math.round(execute),
    learn: Math.round(learn),
    align: Math.round(align),
  }
}

function generateRecommendations(inputs: HealthInputs): string[] {
  const recs: string[] = []

  if (inputs.exerciseHoursPerWeek < 3) {
    recs.push('Increase physical activity to at least 150 minutes per week for significant longevity benefits.')
  }
  if (inputs.sleepHoursPerNight < 7 || inputs.sleepHoursPerNight > 9) {
    recs.push('Optimize sleep to 7-9 hours per night to support cellular repair and cognitive health.')
  }
  if (inputs.stressLevel >= 4) {
    recs.push('Adopt stress management practices like meditation, breathwork, or mindfulness to reduce chronic inflammation.')
  }
  if (inputs.dietQuality <= 2) {
    recs.push('Shift toward a whole-foods, plant-rich diet with lean proteins and healthy fats.')
  }
  if (inputs.smokingStatus === 'current') {
    recs.push('Quitting smoking is the single most impactful change — it can add up to 10 years of life.')
  }
  if (inputs.alcoholDrinksPerWeek > 14) {
    recs.push('Reduce alcohol consumption to moderate levels (7 or fewer drinks per week).')
  }
  if (inputs.bmi >= 30) {
    recs.push('Work toward a healthy BMI range (18.5-24.9) through balanced nutrition and regular movement.')
  }
  if (inputs.socialConnectionScore <= 2) {
    recs.push('Strengthen social bonds — strong relationships are one of the most powerful predictors of longevity.')
  }
  if (inputs.purposeScore <= 2) {
    recs.push('Cultivate a sense of purpose and meaning — it correlates with longer, healthier lives.')
  }

  if (recs.length === 0) {
    recs.push('You\'re doing great! Maintain your current healthy habits and continue to refine your alignment.')
  }

  return recs.slice(0, 5)
}

export function calculateLongevity(inputs: HealthInputs): LongevityResult {
  const baseline = inputs.biologicalSex === 'male' ? BASELINE_MALE : BASELINE_FEMALE

  const totalImpact =
    calculateExerciseImpact(inputs.exerciseHoursPerWeek) +
    calculateSleepImpact(inputs.sleepHoursPerNight) +
    calculateDietImpact(inputs.dietQuality) +
    calculateStressImpact(inputs.stressLevel) +
    calculateSmokingImpact(inputs.smokingStatus) +
    calculateAlcoholImpact(inputs.alcoholDrinksPerWeek) +
    calculateBMIImpact(inputs.bmi) +
    calculateSocialImpact(inputs.socialConnectionScore) +
    calculatePurposeImpact(inputs.purposeScore)

  const ageAdjustment = inputs.age > 50 ? (inputs.age - 50) * -0.05 : 0
  const adjustedImpact = totalImpact + ageAdjustment

  const estimatedLifespan = Math.round((baseline + adjustedImpact) * 10) / 10
  const reelScores = calculateREELScores(inputs)

  return {
    estimatedLifespan: Math.max(estimatedLifespan, inputs.age + 1),
    baselineLifespan: baseline,
    yearsGainedOrLost: Math.round(adjustedImpact * 10) / 10,
    reelScores,
    topRecommendations: generateRecommendations(inputs),
    overallAlignmentScore: reelScores.align,
  }
}
