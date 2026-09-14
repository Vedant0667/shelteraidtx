import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb trail: small muted `meta` links separated by a slash, prose
 * width, no top padding of its own (the page controls spacing above it).
 * Keeps the BreadcrumbList JSON-LD for search engines.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://shelteraidtx.org${item.url}`,
    })),
  };

  return (
    <>
      <nav className="wrap-prose" aria-label="Breadcrumb navigation">
        <ol className="meta flex flex-wrap items-center">
          {items.map((item, i) => (
            <li key={item.url} className="flex items-center">
              {i > 0 && (
                <span aria-hidden="true" className="px-2 text-[var(--hairline-strong)]">
                  /
                </span>
              )}
              {i === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className="transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {/* Plain <script>, not next/script: structured data has to be in the
          server-rendered HTML for crawlers that never execute JS. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
