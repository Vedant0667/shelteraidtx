# Google Search Console Setup Guide

## Prerequisites
- Access to shelteraidtx.org domain registrar or DNS provider
- Google account (shelteraidtx@gmail.com recommended)
- Website must be live and accessible

## Step 1: Add Property to Google Search Console

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with shelteraidtx@gmail.com

2. **Add a New Property**
   - Click "Add Property" in the top-left dropdown
   - Choose **Domain** property type (recommended)
   - Enter: `shelteraidtx.org`
   - Click "Continue"

## Step 2: Verify Domain Ownership

### Method A: DNS Verification (Recommended)

1. **Copy the TXT Record**
   - Google will provide a TXT record like: `google-site-verification=abc123xyz...`

2. **Add to DNS Provider**
   - Log into your domain registrar/DNS provider (e.g., Namecheap, GoDaddy, Cloudflare)
   - Navigate to DNS management for shelteraidtx.org
   - Add a new DNS record:
     - **Type:** TXT
     - **Host/Name:** @ (or leave blank for root domain)
     - **Value:** Paste the entire verification string
     - **TTL:** 1 hour (or default)

3. **Verify**
   - Return to Google Search Console
   - Click "Verify"
   - Wait up to 48 hours if verification fails (DNS propagation delay)

### Method B: HTML File Upload (Alternative)

1. **Download the HTML file** from Google Search Console
2. **Upload to your website:**
   - Place the file in: `/public/google[verification-code].html`
   - File should be accessible at: `https://shelteraidtx.org/google[verification-code].html`
3. **Click "Verify"** in Google Search Console

### Method C: HTML Meta Tag (Alternative)

1. **Copy the meta tag** provided by Google
2. **Add to your Next.js layout:**
   ```typescript
   // src/app/layout.tsx
   export const metadata: Metadata = {
     // ... existing metadata
     verification: {
       google: 'your-verification-code-here',
     },
   };
   ```
3. **Deploy the change** and click "Verify"

## Step 3: Submit Sitemap

1. **Generate Sitemap** (if not already done)
   - Next.js App Router sitemap: Create `src/app/sitemap.ts`
   ```typescript
   import { MetadataRoute } from 'next'

   export default function sitemap(): MetadataRoute.Sitemap {
     return [
       {
         url: 'https://shelteraidtx.org',
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 1,
       },
       {
         url: 'https://shelteraidtx.org/donate',
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.9,
       },
       {
         url: 'https://shelteraidtx.org/privacy',
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 0.3,
       },
       {
         url: 'https://shelteraidtx.org/terms',
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 0.3,
       },
     ]
   }
   ```

2. **Submit to Google Search Console**
   - In GSC, go to **Sitemaps** (left sidebar)
   - Enter sitemap URL: `sitemap.xml`
   - Click "Submit"
   - Status should show "Success" within minutes

## Step 4: Set Up URL Inspection

1. **Test Live URLs**
   - Use the URL Inspection tool (top search bar)
   - Enter key URLs:
     - `https://shelteraidtx.org`
     - `https://shelteraidtx.org/donate`
   - Check for indexing issues, mobile usability, structured data

2. **Request Indexing**
   - For each URL, click "Request Indexing"
   - Google will crawl and index within 1-7 days

## Step 5: Configure Settings

### Enable Email Notifications
- Go to **Settings** (left sidebar) → **Users and permissions**
- Add shelteraidtx@gmail.com as owner
- Enable notifications for:
  - Manual actions
  - Security issues
  - Indexing errors

### Set Target Country (Optional)
- Go to **Settings** → **General**
- Set target geographic location: **United States**

### Configure URL Parameters (if needed)
- For tracking parameters (?utm_source, etc.)
- Go to **Settings** → **Crawl stats**
- Monitor crawl rate (should increase over time)

## Step 6: Monitor Performance

### Key Metrics to Track
1. **Performance Report**
   - Total clicks, impressions, CTR, average position
   - Top queries: "donate shoes dallas," "dfw homeless shelters," etc.

2. **Coverage Report**
   - Indexed pages vs. errors
   - Target: All main pages indexed within 2 weeks

3. **Core Web Vitals**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

4. **Enhancements**
   - Structured Data: Verify FAQPage, NonprofitOrganization schemas
   - Mobile Usability: Should have 0 errors

## Step 7: Validate Structured Data

1. **Use Rich Results Test**
   - Visit: https://search.google.com/test/rich-results
   - Test URLs:
     - `https://shelteraidtx.org` (NonprofitOrganization)
     - `https://shelteraidtx.org/donate` (FAQPage)
   - Should show "Eligible for rich results"

2. **Check in GSC**
   - Go to **Enhancements** → **Structured Data**
   - Verify:
     - FAQPage detected on /donate
     - No errors or warnings

## Post-Setup Checklist

- [ ] Domain verified in Google Search Console
- [ ] Sitemap submitted and processed
- [ ] All main pages requested for indexing
- [ ] Email notifications enabled
- [ ] Performance report shows data (wait 1-3 days)
- [ ] Structured data validated (FAQ, Organization)
- [ ] Core Web Vitals monitored
- [ ] robots.txt accessible at /robots.txt
- [ ] No security issues or manual actions

## Troubleshooting

### "Site not verified"
- DNS changes take 24-48 hours to propagate
- Check TXT record using: https://mxtoolbox.com/SuperTool.aspx
- Try alternative verification method (HTML file or meta tag)

### "Sitemap couldn't be read"
- Ensure sitemap.xml is accessible: `curl https://shelteraidtx.org/sitemap.xml`
- Check for XML syntax errors
- Verify Content-Type header: `application/xml` or `text/xml`

### "Page not indexed"
- Check robots.txt isn't blocking: `https://shelteraidtx.org/robots.txt`
- Use URL Inspection tool for specific error
- Verify no `noindex` meta tags in page source
- Request indexing manually

### No data after 48 hours
- Google can take 1-2 weeks to start showing data for new sites
- Ensure site is crawlable (no authentication required)
- Check server logs for Googlebot requests

## Next Steps (30 Days Post-Setup)

1. **Analyze Search Queries**
   - Identify top-performing keywords
   - Find opportunities (high impressions, low CTR)

2. **Optimize Content**
   - Update titles/descriptions based on actual queries
   - Add content for underperforming pages

3. **Build Backlinks**
   - Submit to nonprofit directories
   - Partner announcements with shelters
   - Local news coverage

4. **Submit to Bing Webmaster Tools**
   - Similar process: https://www.bing.com/webmasters
   - Import settings from Google Search Console

## Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Structured Data Testing Tool](https://validator.schema.org/)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Core Web Vitals Guide](https://web.dev/vitals/)
