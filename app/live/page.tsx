import type { Metadata } from 'next'
import { LIVE_TOURNAMENT } from '@/lib/live-config'
import { LiveBoard } from './live-board'

export const metadata: Metadata = {
  title: 'Live Scoring — Texas Ringer: The Next Gen',
}

export default function LivePage() {
  return (
    <>
      <span className="eyebrow">Live Scoring</span>
      <h1 className="page-title">{LIVE_TOURNAMENT ? LIVE_TOURNAMENT.name : 'Live Scoring'}</h1>
      {LIVE_TOURNAMENT ? (
        <>
          <p className="page-subtitle">Scores update automatically as the event progresses</p>
          <LiveBoard tournament={LIVE_TOURNAMENT} />
        </>
      ) : (
        <p className="page-subtitle">
          No event is live right now. Check back when the Next Gen is underway on Aug 29.
        </p>
      )}
    </>
  )
}
