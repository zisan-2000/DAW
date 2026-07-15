import type { AudienceId } from './types'
import { AUDIENCE_IDS } from './types'

export const AUDIENCE_LABELS: Record<AudienceId, string> = {
  individuals: 'Individuals',
  'job-seekers': 'Job Seekers',
  'small-businesses': 'Small Businesses',
  executives: 'Executives',
  'large-companies': 'Large Companies',
}

export const AUDIENCE_ORDER = [...AUDIENCE_IDS]

export function isAudienceId(value: string): value is AudienceId {
  return (AUDIENCE_IDS as readonly string[]).includes(value)
}
