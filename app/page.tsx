import Link from 'next/link'
import { asset } from '@/lib/asset'
import { listEvents } from '@/data/events'

export default function HomePage() {
  const events = listEvents()

  return (
    <>
      <section className="nextgen-hero">
        <img
          src={asset('/brand/ringer-antlers-white.png')}
          alt=""
          className="nextgen-hero-mark"
        />
        <span className="nextgen-hero-kicker">2026 · Texas Archery</span>
        <h1 className="nextgen-hero-title">Next Gen</h1>
        <span className="nextgen-hero-rule" />
        <p className="nextgen-hero-tagline">
          The next generation of the Texas Ringer · Aug 29, 2026
        </p>
      </section>

      <h2 className="section-title">Results</h2>
      <p className="section-sub">
        Brackets, champions, and qualification standings from the Next Gen
      </p>
      <div className="series-grid">
        {events.map((e) =>
          e.comingSoon ? (
            <Link
              key={e.year}
              href={`/events/${e.year}`}
              className="series-card series-card-soon"
            >
              <h2 className="series-card-name">{e.name}</h2>
              <span className="series-card-soon-badge">Scores coming soon!</span>
            </Link>
          ) : (
            <Link key={e.year} href={`/events/${e.year}`} className="series-card">
              <h2 className="series-card-name">{e.name}</h2>
              <p className="series-card-format">
                {e.venue} · {e.date}
              </p>
              <div className="series-card-stats">
                <div>
                  <span className="stat-label">Divisions</span>
                  <span className="stat-value">{e.divisions.length}</span>
                </div>
                <div>
                  <span className="stat-label">Archers</span>
                  <span className="stat-value">{e.archers}</span>
                </div>
              </div>
            </Link>
          ),
        )}
      </div>
    </>
  )
}
