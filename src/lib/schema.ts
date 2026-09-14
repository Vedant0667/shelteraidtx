export const SITE_URL = "https://shelteraidtx.org"

/**
 * One organization node, shared by / and /who-we-are so the two copies cannot
 * drift apart. `NGO` is the real schema.org type for a nonprofit
 * (`NonprofitOrganization` is not one); `nonprofitStatus` and `taxID` carry the
 * 501(c)(3) facts that used to live only in body copy.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Shelter Aid TX",
  legalName: "Shelter Aid TX",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/main-logo.png`,
  },
  description:
    "Student-led 501(c)(3) nonprofit providing warmth, dignity, and hope to those experiencing homelessness in Dallas-Fort Worth through shoe donations.",
  email: "shelteraidtx@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5900 Balcones Dr Ste 100",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78731",
    addressCountry: "US",
  },
  areaServed: { "@type": "Place", name: "Dallas-Fort Worth, TX" },
  nonprofitStatus: "Nonprofit501c3",
  taxID: "93-3584886",
  contactPoint: [{ "@type": "ContactPoint", contactType: "general", email: "shelteraidtx@gmail.com" }],
  sameAs: ["https://www.instagram.com/shelteraidtx", "https://www.linkedin.com/company/shelter-aid-tx"],
  foundingDate: "2023-10-01",
}
