/**
 * The tournament currently shown on the /live page.
 *
 * Set `id` to the EOS tournament id (the long token in a tournament's EOS URL)
 * when an event is running; set the whole export to null between events to show
 * the "no live event" state. Scores update automatically while live — this only
 * points at which tournament. Changing it requires a redeploy (static site).
 */
export interface LiveTournament {
  id: string
  name: string
}

// No event live right now — the Next Gen shoots Aug 29, 2026. When it goes live,
// set this to the tournament below and push; set back to null when it ends.
//   { id: 'd2hHaFVkWEFKNDdoSTRQNWVwQ0pxZz09', name: '2026 Texas Ringer The Next Gen' }
export const LIVE_TOURNAMENT: LiveTournament | null = null
