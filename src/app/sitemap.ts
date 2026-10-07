import { MetadataRoute } from 'next'

/**
 * `priority` and `changeFrequency` are omitted on purpose: Google ignores both.
 * `lastModified` is a fixed ISO date per route, reflecting the last real content
 * change, rather than `new Date()` — a sitemap that claims every page changed on
 * every crawl teaches crawlers to ignore the field.
 */
// Every route's copy changed in the 2026-10-06 grotesk redesign.
const UPDATED = '2026-10-06'

const routes: { path: string; lastModified: string }[] = [
  { path: '', lastModified: UPDATED },
  { path: '/who-we-are', lastModified: UPDATED },
  { path: '/get-involved', lastModified: UPDATED },
  { path: '/request-shoes', lastModified: UPDATED },
  { path: '/donate', lastModified: UPDATED },
  { path: '/partners', lastModified: UPDATED },
  { path: '/events', lastModified: UPDATED },
  { path: '/blog', lastModified: UPDATED },
  { path: '/blog/starting-a-nonprofit-in-high-school', lastModified: UPDATED },
  { path: '/privacy', lastModified: UPDATED },
  { path: '/terms', lastModified: UPDATED },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shelteraidtx.org'

  return routes.map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }))
}
