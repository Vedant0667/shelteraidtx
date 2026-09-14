import { MetadataRoute } from 'next'

/**
 * `priority` and `changeFrequency` are omitted on purpose: Google ignores both.
 * `lastModified` is a fixed ISO date per route, reflecting the last real content
 * change, rather than `new Date()` — a sitemap that claims every page changed on
 * every crawl teaches crawlers to ignore the field.
 */
const REDESIGN = '2026-09-13'

const routes: { path: string; lastModified: string }[] = [
  { path: '', lastModified: REDESIGN },
  { path: '/who-we-are', lastModified: REDESIGN },
  { path: '/get-involved', lastModified: REDESIGN },
  { path: '/request-shoes', lastModified: REDESIGN },
  { path: '/donate', lastModified: REDESIGN },
  { path: '/partners', lastModified: REDESIGN },
  { path: '/events', lastModified: REDESIGN },
  { path: '/blog', lastModified: REDESIGN },
  { path: '/blog/starting-a-nonprofit-in-high-school', lastModified: '2025-10-26' },
  { path: '/privacy', lastModified: '2026-01-27' },
  { path: '/terms', lastModified: '2026-01-27' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shelteraidtx.org'

  return routes.map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }))
}
