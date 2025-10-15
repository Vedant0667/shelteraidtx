"use client";

import Script from "next/script";
import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

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
      <nav
        className="text-sm text-slate-600 mb-6"
        aria-label="Breadcrumb navigation"
      >
        {items.map((item, i) => (
          <span key={i}>
            {i > 0 && (
              <span className="mx-2 text-slate-400" aria-hidden="true">
                /
              </span>
            )}
            {i === items.length - 1 ? (
              <span className="text-slate-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
