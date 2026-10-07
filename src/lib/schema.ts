export const SITE_URL = "https://www.shelteraidtx.org"

/**
 * One organization node, shared by / and /who-we-are so the two copies cannot
 * drift apart. `NGO` is the real schema.org type for a nonprofit
 * (`NonprofitOrganization` is not one); `nonprofitStatus` and `taxID` carry the
 * 501(c)(3) facts that used to live only in body copy.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${SITE_URL}/#organization`,
  name: "Shelter Aid TX",
  legalName: "Shelter Aid TX",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/main-logo.png`,
  },
  description:
    "Student-led 501(c)(3) in Dallas-Fort Worth that collects new and gently used shoes and delivers them to homeless shelters across DFW. Supporters can also donate money online, once or monthly.",
  email: "shelteraidtx@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5900 Balcones Dr Ste 100",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78731",
    addressCountry: "US",
  },
  // The address above is the IRS mailing address in Austin; the work happens in
  // Dallas-Fort Worth. Naming the cities keeps answer engines from calling this
  // an Austin organization.
  areaServed: [
    { "@type": "Place", name: "Dallas-Fort Worth, TX" },
    { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Fort Worth", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  founder: { "@type": "Person", name: "Vedant Subramanian" },
  nonprofitStatus: "Nonprofit501c3",
  taxID: "93-3584886",
  contactPoint: [{ "@type": "ContactPoint", contactType: "general", email: "shelteraidtx@gmail.com" }],
  sameAs: [
    "https://www.instagram.com/shelteraidtx",
    "https://www.linkedin.com/company/shelter-aid-tx",
    // IRS record (EIN 93-3584886): third-party corroboration of the 501(c)(3).
    "https://projects.propublica.org/nonprofits/organizations/933584886",
  ],
  foundingDate: "2023-10-01",
  // Real schema.org action, so search and answer engines can point "how do I
  // donate" straight at the page that takes both shoes and money.
  potentialAction: {
    "@type": "DonateAction",
    name: "Donate shoes or money to Shelter Aid TX",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/donate` },
  },
}

/** Site-name markup (Google uses WebSite for the name shown in results). Home only. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Shelter Aid TX",
  alternateName: "Shelter Aid",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
}
