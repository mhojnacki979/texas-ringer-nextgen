import { describe, it, expect } from 'vitest'
import type { EventDivision } from './events'
import { getEvent, getPodium, listEvents } from './events'

describe('annual event data', () => {
  it('exposes the 2026 Next Gen event as coming soon', () => {
    const years = listEvents().map((e) => e.year)
    expect(years).toContain(2026)
    const nextgen = getEvent(2026)
    expect(nextgen?.name).toBe('2026 Texas Ringer The Next Gen')
    expect(nextgen?.comingSoon).toBe(true)
  })

  it('returns null for an unknown year', () => {
    expect(getEvent(1999)).toBeNull()
  })
})

describe('getPodium', () => {
  it('derives placings from the final round (bracket winners, not raw score)', () => {
    // Gold match: A beats B despite B's higher score; bronze match: C beats D.
    const division: EventDivision = {
      name: 'Recurve Adult Open',
      champion: 'Archer A',
      qualification: [],
      bracket: {
        rounds: [
          {
            name: 'Final',
            matches: [
              {
                a: { name: 'Archer A', seed: 2, score: 270, winner: true },
                b: { name: 'Archer B', seed: 1, score: 275, winner: false },
              },
              {
                a: { name: 'Archer C', seed: 3, score: 260, winner: true },
                b: { name: 'Archer D', seed: 4, score: 255, winner: false },
              },
            ],
          },
        ],
      },
    }
    const podium = getPodium(division)
    expect(podium.first).toBe('Archer A')
    expect(podium.second).toBe('Archer B')
    expect(podium.third).toBe('Archer C')
  })

  it('falls back to top qualifiers when a division has no bracket', () => {
    const division: EventDivision = {
      name: 'Barebow',
      champion: null,
      qualification: [
        { rank: 2, name: 'Second Seed', avg: '', score: 200 },
        { rank: 1, name: 'Top Seed', avg: '', score: 210 },
        { rank: 3, name: 'Third Seed', avg: '', score: 190 },
      ],
      bracket: null,
    }
    const podium = getPodium(division)
    expect(podium.first).toBe('Top Seed')
    expect(podium.second).toBe('Second Seed')
    expect(podium.third).toBe('Third Seed')
  })
})
