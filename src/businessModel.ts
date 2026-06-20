// Shape The Wave Longevity™ — Complete Business Model
// 5 Memberships · 16 Bundles · 21 Packages · 49 Services

// ─────────────────────────────────────────────
// 49 SERVICES
// ─────────────────────────────────────────────

export interface Service {
  id: string
  name: string
  description: string
  product: Product
  monthlyPrice: number
}

export type Product =
  | 'ReelVerse Coach'
  | 'ReelVerse Mirror'
  | 'ReelVerse Compass'
  | 'ReelVerse Momentum'
  | 'ReelVerse Academy'
  | 'Longevity Tools'

export const services: Service[] = [
  // ── ReelVerse Coach™ — AI Guidance (8 services) ──
  { id: 'coach-01', name: 'AI Health Assessment', description: 'Comprehensive AI-driven evaluation of current health metrics, lifestyle factors, and longevity indicators.', product: 'ReelVerse Coach', monthlyPrice: 19 },
  { id: 'coach-02', name: 'Personalized Coaching Sessions', description: 'One-on-one AI coaching conversations tailored to your health goals and REEL alignment scores.', product: 'ReelVerse Coach', monthlyPrice: 29 },
  { id: 'coach-03', name: 'Real-Time Habit Nudges', description: 'Context-aware push notifications and behavioral prompts delivered at optimal moments throughout the day.', product: 'ReelVerse Coach', monthlyPrice: 9 },
  { id: 'coach-04', name: 'Weekly Progress Check-Ins', description: 'Structured weekly review sessions analyzing habit adherence, health trends, and alignment drift.', product: 'ReelVerse Coach', monthlyPrice: 14 },
  { id: 'coach-05', name: 'Crisis Intervention Support', description: 'Immediate AI-guided support during stress episodes, emotional crises, or habit relapse moments.', product: 'ReelVerse Coach', monthlyPrice: 24 },
  { id: 'coach-06', name: 'Goal-Setting Guidance', description: 'SMART goal creation framework powered by AI, mapped to REEL method principles and longevity science.', product: 'ReelVerse Coach', monthlyPrice: 12 },
  { id: 'coach-07', name: 'Behavioral Pattern Analysis', description: 'Deep-learning analysis of recurring behavioral patterns, triggers, and habit loops over time.', product: 'ReelVerse Coach', monthlyPrice: 19 },
  { id: 'coach-08', name: 'Custom Action Plans', description: 'Personalized 30/60/90-day action plans with milestone tracking and adaptive difficulty scaling.', product: 'ReelVerse Coach', monthlyPrice: 14 },

  // ── ReelVerse Mirror™ — Reflection & Journaling (8 services) ──
  { id: 'mirror-01', name: 'Guided Journaling Prompts', description: 'Daily AI-generated prompts aligned with REEL phases to deepen self-awareness and reflection practice.', product: 'ReelVerse Mirror', monthlyPrice: 7 },
  { id: 'mirror-02', name: 'Voice-to-Journal Transcription', description: 'Speak your thoughts and have them transcribed, organized, and analyzed for emotional themes.', product: 'ReelVerse Mirror', monthlyPrice: 9 },
  { id: 'mirror-03', name: 'Mood Tracking & Analytics', description: 'Continuous mood monitoring with trend visualization, correlations to habits, and predictive insights.', product: 'ReelVerse Mirror', monthlyPrice: 7 },
  { id: 'mirror-04', name: 'Reflection Pattern Insights', description: 'AI analysis of journal entries revealing recurring themes, growth areas, and cognitive patterns.', product: 'ReelVerse Mirror', monthlyPrice: 12 },
  { id: 'mirror-05', name: 'Gratitude Practice Tools', description: 'Structured gratitude exercises with streak tracking and scientifically-backed wellbeing prompts.', product: 'ReelVerse Mirror', monthlyPrice: 5 },
  { id: 'mirror-06', name: 'Shadow Work Modules', description: 'Guided deep-reflection exercises for exploring limiting beliefs, unresolved patterns, and inner blocks.', product: 'ReelVerse Mirror', monthlyPrice: 14 },
  { id: 'mirror-07', name: 'Life Review Timelines', description: 'Interactive visual timeline of life events, turning points, and growth milestones with narrative analysis.', product: 'ReelVerse Mirror', monthlyPrice: 9 },
  { id: 'mirror-08', name: 'Dream Journaling & Analysis', description: 'Capture and decode dreams with AI-assisted symbol interpretation and subconscious pattern mapping.', product: 'ReelVerse Mirror', monthlyPrice: 7 },

  // ── ReelVerse Compass™ — Goals, Values & Direction (8 services) ──
  { id: 'compass-01', name: 'Core Values Assessment', description: 'Comprehensive assessment identifying your top values and measuring daily alignment to them.', product: 'ReelVerse Compass', monthlyPrice: 9 },
  { id: 'compass-02', name: 'Life Purpose Discovery', description: 'Multi-session guided exploration combining ikigai, strengths, and meaning frameworks.', product: 'ReelVerse Compass', monthlyPrice: 19 },
  { id: 'compass-03', name: 'Vision Board Creator', description: 'Digital vision board tool with AI-suggested imagery, affirmations, and goal visualization features.', product: 'ReelVerse Compass', monthlyPrice: 7 },
  { id: 'compass-04', name: 'Goal Mapping & Milestones', description: 'Hierarchical goal trees with dependencies, deadlines, and automated milestone celebrations.', product: 'ReelVerse Compass', monthlyPrice: 9 },
  { id: 'compass-05', name: 'Decision Framework Tools', description: 'AI-powered decision matrices, values-weighted scoring, and scenario modeling for life choices.', product: 'ReelVerse Compass', monthlyPrice: 12 },
  { id: 'compass-06', name: 'Life Audit Scorecards', description: 'Quarterly life-area assessments across health, relationships, career, finances, and personal growth.', product: 'ReelVerse Compass', monthlyPrice: 9 },
  { id: 'compass-07', name: 'Quarterly Planning Sessions', description: 'Structured 12-week planning sprints with OKR-style objectives aligned to your longevity vision.', product: 'ReelVerse Compass', monthlyPrice: 14 },
  { id: 'compass-08', name: 'Values Alignment Tracker', description: 'Daily check-in measuring how well today\'s actions aligned with stated values and purpose.', product: 'ReelVerse Compass', monthlyPrice: 7 },

  // ── ReelVerse Momentum™ — Habits & Progress (9 services) ──
  { id: 'momentum-01', name: 'Habit Streak Tracking', description: 'Visual streak counters, heat maps, and consistency scores across all tracked health habits.', product: 'ReelVerse Momentum', monthlyPrice: 5 },
  { id: 'momentum-02', name: 'Micro-Habit Builder', description: 'Break large goals into 2-minute starter habits with progressive complexity scaling over time.', product: 'ReelVerse Momentum', monthlyPrice: 7 },
  { id: 'momentum-03', name: 'Progress Dashboard', description: 'Unified dashboard showing all health metrics, habit scores, and REEL alignment in real time.', product: 'ReelVerse Momentum', monthlyPrice: 9 },
  { id: 'momentum-04', name: 'Accountability Partner Matching', description: 'AI-matched accountability partnerships based on goals, schedules, and personality compatibility.', product: 'ReelVerse Momentum', monthlyPrice: 12 },
  { id: 'momentum-05', name: 'Habit Stacking Planner', description: 'Design habit chains anchored to existing routines for maximum adherence and minimal friction.', product: 'ReelVerse Momentum', monthlyPrice: 7 },
  { id: 'momentum-06', name: 'Behavioral Trigger Mapping', description: 'Identify and map cue-routine-reward loops to rewire negative patterns and reinforce positive ones.', product: 'ReelVerse Momentum', monthlyPrice: 9 },
  { id: 'momentum-07', name: 'Momentum Score Analytics', description: 'Proprietary momentum scoring algorithm tracking velocity of behavior change across all dimensions.', product: 'ReelVerse Momentum', monthlyPrice: 12 },
  { id: 'momentum-08', name: 'Weekly Momentum Reports', description: 'Automated weekly digest with wins, setbacks, trend analysis, and next-week optimization suggestions.', product: 'ReelVerse Momentum', monthlyPrice: 7 },
  { id: 'momentum-09', name: 'Gamified Challenges', description: 'Community and solo challenges with XP, levels, badges, and leaderboards to sustain engagement.', product: 'ReelVerse Momentum', monthlyPrice: 5 },

  // ── ReelVerse Academy™ — Courses & Certification (9 services) ──
  { id: 'academy-01', name: 'Foundations of Longevity Course', description: 'Self-paced course covering the science of aging, Blue Zone research, and evidence-based longevity strategies.', product: 'ReelVerse Academy', monthlyPrice: 19 },
  { id: 'academy-02', name: 'REEL Method Masterclass', description: 'Deep-dive into the Reflect-Envision-Execute-Learn-Align framework with practical implementation guides.', product: 'ReelVerse Academy', monthlyPrice: 29 },
  { id: 'academy-03', name: 'Nutrition & Longevity Workshop', description: 'Evidence-based nutrition for healthspan: Mediterranean, MIND, and longevity-optimized eating patterns.', product: 'ReelVerse Academy', monthlyPrice: 19 },
  { id: 'academy-04', name: 'Movement & Exercise Science', description: 'Exercise programming for longevity: zone 2 cardio, resistance training, mobility, and recovery protocols.', product: 'ReelVerse Academy', monthlyPrice: 19 },
  { id: 'academy-05', name: 'Stress Mastery Program', description: 'Comprehensive stress management: breathwork, meditation, nervous system regulation, and resilience building.', product: 'ReelVerse Academy', monthlyPrice: 19 },
  { id: 'academy-06', name: 'Sleep Optimization Course', description: 'Sleep science fundamentals, circadian rhythm hacking, and protocols for restorative sleep architecture.', product: 'ReelVerse Academy', monthlyPrice: 14 },
  { id: 'academy-07', name: 'Social Connection Workshop', description: 'Building and maintaining meaningful relationships as a pillar of longevity and emotional health.', product: 'ReelVerse Academy', monthlyPrice: 14 },
  { id: 'academy-08', name: 'Advanced Practitioner Training', description: 'Professional-track training for coaching others using the REEL Align Method with supervised practice hours.', product: 'ReelVerse Academy', monthlyPrice: 99 },
  { id: 'academy-09', name: 'Continuing Education Credits', description: 'Ongoing CEU modules for Certified REEL Method Practitioners to maintain credentials and deepen expertise.', product: 'ReelVerse Academy', monthlyPrice: 29 },

  // ── Longevity Calculator & Tools (7 services) ──
  { id: 'tools-01', name: 'Longevity Calculator Pro', description: 'Advanced longevity estimation with expanded biomarker inputs, family history, and environmental factors.', product: 'Longevity Tools', monthlyPrice: 9 },
  { id: 'tools-02', name: 'Biological Age Assessment', description: 'Estimate biological vs. chronological age using lifestyle factors, fitness metrics, and health indicators.', product: 'Longevity Tools', monthlyPrice: 14 },
  { id: 'tools-03', name: 'Health Risk Profiling', description: 'Personalized risk scores for cardiovascular disease, diabetes, cognitive decline, and other age-related conditions.', product: 'Longevity Tools', monthlyPrice: 14 },
  { id: 'tools-04', name: 'Nutrition Analysis Tools', description: 'Meal logging, macro/micronutrient tracking, and AI-powered dietary optimization recommendations.', product: 'Longevity Tools', monthlyPrice: 9 },
  { id: 'tools-05', name: 'Fitness Assessment Suite', description: 'VO2max estimation, strength benchmarks, flexibility scoring, and personalized exercise prescriptions.', product: 'Longevity Tools', monthlyPrice: 12 },
  { id: 'tools-06', name: 'Sleep Quality Analyzer', description: 'Sleep log analysis, quality scoring, and evidence-based recommendations for sleep architecture improvement.', product: 'Longevity Tools', monthlyPrice: 7 },
  { id: 'tools-07', name: 'Comprehensive Health Reports', description: 'Monthly PDF reports synthesizing all health data, trends, REEL scores, and actionable next steps.', product: 'Longevity Tools', monthlyPrice: 9 },
]

// ─────────────────────────────────────────────
// 21 PACKAGES
// ─────────────────────────────────────────────

export type PackageTier = 'Starter' | 'Pro' | 'Elite'

export interface Package {
  id: string
  name: string
  description: string
  product: Product | 'Cross-Platform'
  tier: PackageTier
  serviceIds: string[]
  monthlyPrice: number
  savings: number
}

export const packages: Package[] = [
  // ── Coach Packages (3) ──
  { id: 'pkg-coach-starter', name: 'Coach Starter', description: 'Essential AI guidance: health assessment and personalized action plans to get started.', product: 'ReelVerse Coach', tier: 'Starter', serviceIds: ['coach-01', 'coach-06', 'coach-08'], monthlyPrice: 35, savings: 10 },
  { id: 'pkg-coach-pro', name: 'Coach Pro', description: 'Full coaching experience with sessions, real-time nudges, and weekly check-ins.', product: 'ReelVerse Coach', tier: 'Pro', serviceIds: ['coach-01', 'coach-02', 'coach-03', 'coach-04', 'coach-06', 'coach-08'], monthlyPrice: 79, savings: 18 },
  { id: 'pkg-coach-elite', name: 'Coach Elite', description: 'Complete Coach suite including crisis support and deep behavioral pattern analysis.', product: 'ReelVerse Coach', tier: 'Elite', serviceIds: ['coach-01', 'coach-02', 'coach-03', 'coach-04', 'coach-05', 'coach-06', 'coach-07', 'coach-08'], monthlyPrice: 119, savings: 21 },

  // ── Mirror Packages (3) ──
  { id: 'pkg-mirror-starter', name: 'Mirror Starter', description: 'Begin your reflection practice with guided prompts, mood tracking, and gratitude tools.', product: 'ReelVerse Mirror', tier: 'Starter', serviceIds: ['mirror-01', 'mirror-03', 'mirror-05'], monthlyPrice: 15, savings: 4 },
  { id: 'pkg-mirror-pro', name: 'Mirror Pro', description: 'Full journaling suite with voice transcription, pattern insights, and life timelines.', product: 'ReelVerse Mirror', tier: 'Pro', serviceIds: ['mirror-01', 'mirror-02', 'mirror-03', 'mirror-04', 'mirror-05', 'mirror-07'], monthlyPrice: 39, savings: 10 },
  { id: 'pkg-mirror-elite', name: 'Mirror Elite', description: 'Complete Mirror experience with shadow work modules and dream analysis.', product: 'ReelVerse Mirror', tier: 'Elite', serviceIds: ['mirror-01', 'mirror-02', 'mirror-03', 'mirror-04', 'mirror-05', 'mirror-06', 'mirror-07', 'mirror-08'], monthlyPrice: 55, savings: 15 },

  // ── Compass Packages (3) ──
  { id: 'pkg-compass-starter', name: 'Compass Starter', description: 'Find your direction with values assessment, vision boards, and goal mapping.', product: 'ReelVerse Compass', tier: 'Starter', serviceIds: ['compass-01', 'compass-03', 'compass-04'], monthlyPrice: 19, savings: 6 },
  { id: 'pkg-compass-pro', name: 'Compass Pro', description: 'Full planning toolkit with decision frameworks, life audits, and alignment tracking.', product: 'ReelVerse Compass', tier: 'Pro', serviceIds: ['compass-01', 'compass-03', 'compass-04', 'compass-05', 'compass-06', 'compass-08'], monthlyPrice: 42, savings: 11 },
  { id: 'pkg-compass-elite', name: 'Compass Elite', description: 'Complete Compass suite with quarterly planning and purpose discovery deep-dives.', product: 'ReelVerse Compass', tier: 'Elite', serviceIds: ['compass-01', 'compass-02', 'compass-03', 'compass-04', 'compass-05', 'compass-06', 'compass-07', 'compass-08'], monthlyPrice: 69, savings: 17 },

  // ── Momentum Packages (3) ──
  { id: 'pkg-momentum-starter', name: 'Momentum Starter', description: 'Build momentum with habit tracking, micro-habit builder, and gamified challenges.', product: 'ReelVerse Momentum', tier: 'Starter', serviceIds: ['momentum-01', 'momentum-02', 'momentum-09'], monthlyPrice: 13, savings: 4 },
  { id: 'pkg-momentum-pro', name: 'Momentum Pro', description: 'Full habit system with dashboard, stacking planner, accountability, and weekly reports.', product: 'ReelVerse Momentum', tier: 'Pro', serviceIds: ['momentum-01', 'momentum-02', 'momentum-03', 'momentum-04', 'momentum-05', 'momentum-08', 'momentum-09'], monthlyPrice: 39, savings: 13 },
  { id: 'pkg-momentum-elite', name: 'Momentum Elite', description: 'Complete Momentum suite with trigger mapping, score analytics, and full behavioral toolkit.', product: 'ReelVerse Momentum', tier: 'Elite', serviceIds: ['momentum-01', 'momentum-02', 'momentum-03', 'momentum-04', 'momentum-05', 'momentum-06', 'momentum-07', 'momentum-08', 'momentum-09'], monthlyPrice: 59, savings: 14 },

  // ── Academy Packages (3) ──
  { id: 'pkg-academy-starter', name: 'Academy Starter', description: 'Begin learning with the Foundations course plus one specialty workshop of your choice.', product: 'ReelVerse Academy', tier: 'Starter', serviceIds: ['academy-01', 'academy-06'], monthlyPrice: 27, savings: 6 },
  { id: 'pkg-academy-pro', name: 'Academy Pro', description: 'Full course library including REEL Masterclass and all specialty workshops.', product: 'ReelVerse Academy', tier: 'Pro', serviceIds: ['academy-01', 'academy-02', 'academy-03', 'academy-04', 'academy-05', 'academy-06', 'academy-07'], monthlyPrice: 99, savings: 34 },
  { id: 'pkg-academy-elite', name: 'Academy Elite', description: 'Complete Academy with practitioner training track and continuing education credits.', product: 'ReelVerse Academy', tier: 'Elite', serviceIds: ['academy-01', 'academy-02', 'academy-03', 'academy-04', 'academy-05', 'academy-06', 'academy-07', 'academy-08', 'academy-09'], monthlyPrice: 199, savings: 62 },

  // ── Tools Packages (3) ──
  { id: 'pkg-tools-starter', name: 'Tools Starter', description: 'Essential longevity tools: calculator, sleep analyzer, and monthly health reports.', product: 'Longevity Tools', tier: 'Starter', serviceIds: ['tools-01', 'tools-06', 'tools-07'], monthlyPrice: 19, savings: 6 },
  { id: 'pkg-tools-pro', name: 'Tools Pro', description: 'Full assessment suite with biological age, nutrition analysis, and fitness scoring.', product: 'Longevity Tools', tier: 'Pro', serviceIds: ['tools-01', 'tools-02', 'tools-04', 'tools-05', 'tools-06', 'tools-07'], monthlyPrice: 45, savings: 15 },
  { id: 'pkg-tools-elite', name: 'Tools Elite', description: 'Complete tools suite with health risk profiling and all assessment capabilities.', product: 'Longevity Tools', tier: 'Elite', serviceIds: ['tools-01', 'tools-02', 'tools-03', 'tools-04', 'tools-05', 'tools-06', 'tools-07'], monthlyPrice: 59, savings: 15 },

  // ── Cross-Platform Packages (3) ──
  { id: 'pkg-reel-essentials', name: 'REEL Essentials', description: 'One Starter package from every product — the complete foundation for your longevity journey.', product: 'Cross-Platform', tier: 'Starter', serviceIds: ['coach-01', 'coach-06', 'coach-08', 'mirror-01', 'mirror-03', 'mirror-05', 'compass-01', 'compass-03', 'compass-04', 'momentum-01', 'momentum-02', 'momentum-09', 'academy-01', 'academy-06', 'tools-01', 'tools-06', 'tools-07'], monthlyPrice: 99, savings: 29 },
  { id: 'pkg-reel-professional', name: 'REEL Professional', description: 'Every Pro package across all products — serious commitment to transformation.', product: 'Cross-Platform', tier: 'Pro', serviceIds: ['coach-01', 'coach-02', 'coach-03', 'coach-04', 'coach-06', 'coach-08', 'mirror-01', 'mirror-02', 'mirror-03', 'mirror-04', 'mirror-05', 'mirror-07', 'compass-01', 'compass-03', 'compass-04', 'compass-05', 'compass-06', 'compass-08', 'momentum-01', 'momentum-02', 'momentum-03', 'momentum-04', 'momentum-05', 'momentum-08', 'momentum-09', 'academy-01', 'academy-02', 'academy-03', 'academy-04', 'academy-05', 'academy-06', 'academy-07', 'tools-01', 'tools-02', 'tools-04', 'tools-05', 'tools-06', 'tools-07'], monthlyPrice: 279, savings: 64 },
  { id: 'pkg-reel-complete', name: 'REEL Complete', description: 'Every Elite package across all products — the ultimate longevity transformation system.', product: 'Cross-Platform', tier: 'Elite', serviceIds: services.map(s => s.id), monthlyPrice: 449, savings: 111 },
]

// ─────────────────────────────────────────────
// 16 BUNDLES
// ─────────────────────────────────────────────

export interface Bundle {
  id: string
  name: string
  description: string
  category: 'Product' | 'Cross-Product' | 'Tier' | 'Ultimate'
  packageIds: string[]
  monthlyPrice: number
  savings: number
}

export const bundles: Bundle[] = [
  // ── Product-Specific Bundles (6) ──
  { id: 'bun-coach', name: 'Coach Bundle', description: 'All three Coach packages — from starter guidance to elite behavioral analysis.', category: 'Product', packageIds: ['pkg-coach-starter', 'pkg-coach-pro', 'pkg-coach-elite'], monthlyPrice: 189, savings: 44 },
  { id: 'bun-mirror', name: 'Mirror Bundle', description: 'All three Mirror packages — the complete reflection and self-awareness toolkit.', category: 'Product', packageIds: ['pkg-mirror-starter', 'pkg-mirror-pro', 'pkg-mirror-elite'], monthlyPrice: 89, savings: 20 },
  { id: 'bun-compass', name: 'Compass Bundle', description: 'All three Compass packages — full direction-setting from values to quarterly planning.', category: 'Product', packageIds: ['pkg-compass-starter', 'pkg-compass-pro', 'pkg-compass-elite'], monthlyPrice: 105, savings: 25 },
  { id: 'bun-momentum', name: 'Momentum Bundle', description: 'All three Momentum packages — complete habit-building and progress tracking system.', category: 'Product', packageIds: ['pkg-momentum-starter', 'pkg-momentum-pro', 'pkg-momentum-elite'], monthlyPrice: 89, savings: 22 },
  { id: 'bun-academy', name: 'Academy Bundle', description: 'All three Academy packages — from foundations through practitioner certification.', category: 'Product', packageIds: ['pkg-academy-starter', 'pkg-academy-pro', 'pkg-academy-elite'], monthlyPrice: 269, savings: 56 },
  { id: 'bun-tools', name: 'Tools Bundle', description: 'All three Tools packages — every calculator, assessment, and analysis tool.', category: 'Product', packageIds: ['pkg-tools-starter', 'pkg-tools-pro', 'pkg-tools-elite'], monthlyPrice: 99, savings: 24 },

  // ── Cross-Product Bundles (5) ──
  { id: 'bun-self-discovery', name: 'Self-Discovery Bundle', description: 'Mirror + Compass Elite packages — deep self-awareness meets clear direction.', category: 'Cross-Product', packageIds: ['pkg-mirror-elite', 'pkg-compass-elite'], monthlyPrice: 99, savings: 25 },
  { id: 'bun-action-growth', name: 'Action & Growth Bundle', description: 'Coach + Momentum Elite packages — AI guidance meets daily habit execution.', category: 'Cross-Product', packageIds: ['pkg-coach-elite', 'pkg-momentum-elite'], monthlyPrice: 149, savings: 29 },
  { id: 'bun-knowledge-tools', name: 'Knowledge & Tools Bundle', description: 'Academy + Tools Elite packages — learn the science and measure the results.', category: 'Cross-Product', packageIds: ['pkg-academy-elite', 'pkg-tools-elite'], monthlyPrice: 219, savings: 39 },
  { id: 'bun-mind-body', name: 'Mind-Body Bundle', description: 'Mirror + Momentum + Tools Elite — reflection, habits, and measurement in harmony.', category: 'Cross-Product', packageIds: ['pkg-mirror-elite', 'pkg-momentum-elite', 'pkg-tools-elite'], monthlyPrice: 139, savings: 34 },
  { id: 'bun-leadership', name: 'Leadership Bundle', description: 'Coach + Compass + Academy Elite — for those who lead by example and teach others.', category: 'Cross-Product', packageIds: ['pkg-coach-elite', 'pkg-compass-elite', 'pkg-academy-elite'], monthlyPrice: 319, savings: 68 },

  // ── Tier Bundles (3) ──
  { id: 'bun-all-starter', name: 'Starter Bundle', description: 'Every Starter package across all six products — sample the full ecosystem.', category: 'Tier', packageIds: ['pkg-coach-starter', 'pkg-mirror-starter', 'pkg-compass-starter', 'pkg-momentum-starter', 'pkg-academy-starter', 'pkg-tools-starter'], monthlyPrice: 99, savings: 29 },
  { id: 'bun-all-pro', name: 'Pro Bundle', description: 'Every Pro package across all six products — committed to comprehensive change.', category: 'Tier', packageIds: ['pkg-coach-pro', 'pkg-mirror-pro', 'pkg-compass-pro', 'pkg-momentum-pro', 'pkg-academy-pro', 'pkg-tools-pro'], monthlyPrice: 279, savings: 64 },
  { id: 'bun-all-elite', name: 'Elite Bundle', description: 'Every Elite package across all six products — maximum transformation power.', category: 'Tier', packageIds: ['pkg-coach-elite', 'pkg-mirror-elite', 'pkg-compass-elite', 'pkg-momentum-elite', 'pkg-academy-elite', 'pkg-tools-elite'], monthlyPrice: 449, savings: 111 },

  // ── Ultimate Bundles (2) ──
  { id: 'bun-reelverse-complete', name: 'ReelVerse Complete', description: 'Every package from every product at every tier — the entire ReelVerse OS in your hands.', category: 'Ultimate', packageIds: packages.map(p => p.id), monthlyPrice: 699, savings: 261 },
  { id: 'bun-practitioner-business', name: 'Practitioner Business', description: 'ReelVerse Complete plus advanced practitioner certification, CEUs, and client-facing tools.', category: 'Ultimate', packageIds: packages.map(p => p.id), monthlyPrice: 899, savings: 361 },
]

// ─────────────────────────────────────────────
// 5 MEMBERSHIPS
// ─────────────────────────────────────────────

export interface Membership {
  id: string
  name: string
  tagline: string
  description: string
  monthlyPrice: number
  annualPrice: number
  includedBundleIds: string[]
  features: string[]
  highlighted: boolean
}

export const memberships: Membership[] = [
  {
    id: 'mem-explorer',
    name: 'Explorer',
    tagline: 'Start your journey',
    description: 'Free access to the Longevity Calculator, basic REEL scoring, and introductory content to explore the Shape The Wave ecosystem.',
    monthlyPrice: 0,
    annualPrice: 0,
    includedBundleIds: [],
    features: [
      'Longevity Calculator (basic)',
      'REEL Alignment Score overview',
      'Community forum access',
      '1 guided journal prompt per week',
      '1 Academy preview lesson',
    ],
    highlighted: false,
  },
  {
    id: 'mem-align',
    name: 'Align',
    tagline: 'Build your foundation',
    description: 'Starter-tier access across the full ecosystem — everything you need to begin building aligned health habits.',
    monthlyPrice: 49,
    annualPrice: 468,
    includedBundleIds: ['bun-all-starter'],
    features: [
      'All Starter packages (6 products)',
      'AI Health Assessment',
      'Guided journaling & mood tracking',
      'Values assessment & goal mapping',
      'Habit tracking & micro-habits',
      'Foundations of Longevity course',
      'Longevity Calculator Pro + reports',
      'Community forum access',
    ],
    highlighted: false,
  },
  {
    id: 'mem-momentum',
    name: 'Momentum',
    tagline: 'Accelerate your transformation',
    description: 'Pro-tier access across the full ecosystem — deep coaching, full journaling, comprehensive planning, and all courses.',
    monthlyPrice: 149,
    annualPrice: 1428,
    includedBundleIds: ['bun-all-pro'],
    features: [
      'All Pro packages (6 products)',
      'Personalized AI coaching sessions',
      'Real-time habit nudges',
      'Weekly progress check-ins',
      'Full journaling suite with insights',
      'Decision frameworks & life audits',
      'Accountability partner matching',
      'Full course library & REEL Masterclass',
      'Complete assessment suite',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    id: 'mem-transform',
    name: 'Transform',
    tagline: 'Unlock your full potential',
    description: 'Elite-tier access to everything — crisis support, shadow work, practitioner training, and the complete behavioral toolkit.',
    monthlyPrice: 299,
    annualPrice: 2868,
    includedBundleIds: ['bun-all-elite'],
    features: [
      'All Elite packages (6 products)',
      'Crisis intervention support',
      'Behavioral pattern deep analysis',
      'Shadow work & dream analysis',
      'Purpose discovery & quarterly planning',
      'Full behavioral trigger mapping',
      'Momentum score analytics',
      'Practitioner training track',
      'Continuing education credits',
      'Health risk profiling',
      'Dedicated success manager',
      'Early access to new features',
    ],
    highlighted: false,
  },
  {
    id: 'mem-legacy',
    name: 'Legacy',
    tagline: 'Lead the movement',
    description: 'The complete ReelVerse OS plus practitioner certification, business tools, white-label options, and the ability to coach others using the REEL Method.',
    monthlyPrice: 499,
    annualPrice: 4788,
    includedBundleIds: ['bun-practitioner-business'],
    features: [
      'Everything in Transform',
      'Certified REEL Method Practitioner™ credential',
      'Client management dashboard',
      'White-label calculator for your practice',
      'Referral revenue sharing program',
      'Private practitioner community',
      'Monthly group supervision calls',
      'Co-branded marketing materials',
      'API access for integrations',
      'Custom reporting for clients',
      'Founding member recognition',
      'Direct line to product team',
    ],
    highlighted: false,
  },
]

// ─────────────────────────────────────────────
// SUMMARY & VALIDATION
// ─────────────────────────────────────────────

export const modelSummary = {
  services: services.length,     // 49
  packages: packages.length,     // 21
  bundles: bundles.length,       // 16
  memberships: memberships.length, // 5
  products: [...new Set(services.map(s => s.product))].length, // 6
} as const
