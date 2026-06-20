import { useState } from 'react'
import { memberships, bundles, packages, services, modelSummary } from '../businessModel'
import type { Membership, Bundle, Package, Service } from '../businessModel'
import styles from './PricingPage.module.css'

type Tab = 'memberships' | 'bundles' | 'packages' | 'services'

function MembershipCard({ m }: { m: Membership }) {
  return (
    <div className={`${styles.membershipCard} ${m.highlighted ? styles.highlighted : ''}`}>
      {m.highlighted && <div className={styles.badge}>Most Popular</div>}
      <h3 className={styles.membershipName}>{m.name}</h3>
      <p className={styles.membershipTagline}>{m.tagline}</p>
      <div className={styles.price}>
        {m.monthlyPrice === 0 ? (
          <span className={styles.priceAmount}>Free</span>
        ) : (
          <>
            <span className={styles.priceCurrency}>$</span>
            <span className={styles.priceAmount}>{m.monthlyPrice}</span>
            <span className={styles.pricePeriod}>/mo</span>
          </>
        )}
      </div>
      {m.annualPrice > 0 && (
        <p className={styles.annualNote}>${m.annualPrice}/yr (save ${m.monthlyPrice * 12 - m.annualPrice})</p>
      )}
      <p className={styles.membershipDesc}>{m.description}</p>
      <ul className={styles.featureList}>
        {m.features.map((f, i) => (
          <li key={i}><span className={styles.check}></span>{f}</li>
        ))}
      </ul>
    </div>
  )
}

function BundleCard({ b }: { b: Bundle }) {
  const pkgs = b.packageIds.map(id => packages.find(p => p.id === id)).filter(Boolean) as Package[]
  return (
    <div className={styles.card}>
      <div className={styles.cardCategory}>{b.category}</div>
      <h4 className={styles.cardName}>{b.name}</h4>
      <p className={styles.cardDesc}>{b.description}</p>
      <div className={styles.cardPrice}>
        <span>${b.monthlyPrice}</span><span className={styles.pricePeriod}>/mo</span>
        <span className={styles.savingsBadge}>Save ${b.savings}</span>
      </div>
      <div className={styles.cardIncludes}>
        <span className={styles.includesLabel}>Includes {pkgs.length} packages:</span>
        {pkgs.map(p => <span key={p.id} className={styles.includedItem}>{p.name}</span>)}
      </div>
    </div>
  )
}

function PackageCard({ p }: { p: Package }) {
  const svcs = p.serviceIds.map(id => services.find(s => s.id === id)).filter(Boolean) as Service[]
  return (
    <div className={styles.card}>
      <div className={styles.cardCategory}>{p.product} &middot; {p.tier}</div>
      <h4 className={styles.cardName}>{p.name}</h4>
      <p className={styles.cardDesc}>{p.description}</p>
      <div className={styles.cardPrice}>
        <span>${p.monthlyPrice}</span><span className={styles.pricePeriod}>/mo</span>
        <span className={styles.savingsBadge}>Save ${p.savings}</span>
      </div>
      <div className={styles.cardIncludes}>
        <span className={styles.includesLabel}>{svcs.length} services:</span>
        {svcs.map(s => <span key={s.id} className={styles.includedItem}>{s.name}</span>)}
      </div>
    </div>
  )
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceProduct}>{s.product}</div>
      <h4 className={styles.serviceName}>{s.name}</h4>
      <p className={styles.serviceDesc}>{s.description}</p>
      <div className={styles.servicePrice}>${s.monthlyPrice}/mo</div>
    </div>
  )
}

export default function PricingPage() {
  const [tab, setTab] = useState<Tab>('memberships')

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h2 className={styles.pageTitle}>ReelVerse OS&trade; Business Model</h2>
        <p className={styles.pageSubtitle}>Your personal transformation operating system</p>
        <div className={styles.counts}>
          <span>{modelSummary.memberships} Memberships</span>
          <span className={styles.dot}>&middot;</span>
          <span>{modelSummary.bundles} Bundles</span>
          <span className={styles.dot}>&middot;</span>
          <span>{modelSummary.packages} Packages</span>
          <span className={styles.dot}>&middot;</span>
          <span>{modelSummary.services} Services</span>
        </div>
      </div>

      <div className={styles.tabs}>
        {([
          ['memberships', `Memberships (${modelSummary.memberships})`],
          ['bundles', `Bundles (${modelSummary.bundles})`],
          ['packages', `Packages (${modelSummary.packages})`],
          ['services', `Services (${modelSummary.services})`],
        ] as const).map(([key, label]) => (
          <button
            key={key}
            className={`${styles.tab} ${tab === key ? styles.activeTab : ''}`}
            onClick={() => setTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {tab === 'memberships' && (
          <div className={styles.membershipGrid}>
            {memberships.map(m => <MembershipCard key={m.id} m={m} />)}
          </div>
        )}
        {tab === 'bundles' && (
          <div className={styles.cardGrid}>
            {bundles.map(b => <BundleCard key={b.id} b={b} />)}
          </div>
        )}
        {tab === 'packages' && (
          <div className={styles.cardGrid}>
            {packages.map(p => <PackageCard key={p.id} p={p} />)}
          </div>
        )}
        {tab === 'services' && (
          <div className={styles.serviceGrid}>
            {services.map(s => <ServiceCard key={s.id} s={s} />)}
          </div>
        )}
      </div>
    </div>
  )
}
