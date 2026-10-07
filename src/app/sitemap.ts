import { MetadataRoute } from 'next'

/**
 * `priority` and `changeFrequency` are omitted on purpose: Google ignores both.
 * `lastModified` is a fixed ISO date per route, reflecting the last real content
 * change, rather than `new Date()` — a sitemap that claims every page changed on
 * every crawl teaches crawlers to ignore the field.
 */
// Last real content change per route (git log), not the build date.
const OCT_6 = '2026-10-06'
const OCT_7 = '2026-10-07'

const routes: { path: string; lastModified: string }[] = [
  { path: '', lastModified: OCT_7 },
  { path: '/who-we-are', lastModified: OCT_7 },
  { path: '/get-involved', lastModified: OCT_7 },
  { path: '/request-shoes', lastModified: OCT_7 },
  { path: '/donate', lastModified: OCT_7 },
  { path: '/partners', lastModified: OCT_7 },
  { path: '/events', lastModified: OCT_6 },
  { path: '/blog', lastModified: OCT_7 },
  { path: '/blog/starting-a-nonprofit-in-high-school', lastModified: OCT_7 },
  { path: '/privacy', lastModified: OCT_7 },
  { path: '/terms', lastModified: OCT_7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shelteraidtx.org'

  return routes.map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }))
}
