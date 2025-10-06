# Shelter Aid TX - Official Website

A fully SEO-optimized Next.js 15 website for Shelter Aid TX, a nonprofit organization dedicated to donating shoes to shelters across the Dallas-Fort Worth area.

## Features

- **SEO-Optimized**: Comprehensive metadata, JSON-LD structured data, and keyword integration
- **Responsive Design**: Mobile-first approach with smooth animations
- **Warm & Inviting Design**: Custom color system with light blue and cream accents
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized fonts, images, and code splitting
- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion

## Design System

### Color Palette (Updated for Better Contrast)

- **Primary**: Vibrant Blue (#2B9FD9)
- **Primary Hover**: Deep Blue (#1E87C4)
- **Secondary**: Soft Blue (#E8F4F8)
- **Accent**: Warm Cream (#D4A574)
- **Background**: Micro-dots pattern with subtle blue tint

### Typography

- **Body Font**: Inter
- **Display Font**: Space Grotesk
- **Monospace Font**: JetBrains Mono

### Design Feel

Warm/Inviting with:
- Rounded corners (rounded-2xl to rounded-3xl)
- Spring physics animations (stiffness: 120, damping: 18)
- Floating decorative elements
- Soft shadows and rings

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
shelteraidtx/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles & color system
│   │   ├── who-we-are/
│   │   │   └── page.tsx         # Team & mission page
│   │   ├── our-work/
│   │   │   └── page.tsx         # Programs & impact page
│   │   ├── get-involved/
│   │   │   └── page.tsx         # Donation & volunteer page
│   │   └── partners/
│   │       └── page.tsx         # Partner organizations page
│   └── components/
│       ├── Motion.tsx           # Animation utilities
│       ├── NavBar.tsx           # Navigation with multi-page links
│       ├── Hero.tsx             # Hero section
│       ├── About.tsx            # Mission/About section
│       ├── Impact.tsx           # Impact statistics
│       ├── HowItWorks.tsx       # Process explanation
│       ├── Testimonials.tsx     # Partner testimonials
│       ├── Donate.tsx           # Donation CTA
│       └── Footer.tsx           # Footer with links
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## SEO Implementation

### Metadata
- Title: "Shelter Aid TX - Donate Shoes to Shelters | Help Homeless in DFW"
- Description: Optimized with target keywords (donation, shoes, donate shoes, help shelters)
- OpenGraph and Twitter cards configured
- Keywords: donation, shoes, donate shoes, help shelters, nonprofit donation partners

### Structured Data
- JSON-LD schema for NonprofitOrganization
- Includes address, service area, and nonprofit status
- Social media profiles linked

### Keyword Integration
Primary keywords appear in:
- Page title (first 60 characters)
- H1 heading
- First paragraph
- Meta description
- Section headings
- Image alt texts

## Accessibility

- WCAG AA color contrast compliance
- Keyboard navigation support
- Proper ARIA labels on all interactive elements
- Semantic HTML structure
- Screen reader friendly
- Reduced motion support

## Performance Optimizations

- Next.js Image component for optimized images
- Font loading with `display: optional`
- Code splitting and lazy loading
- Minimal bundle size
- Target metrics:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/shelteraidtx)

## Website Pages

### Homepage (/)
1. **Hero**: Primary value proposition with donation statistics
2. **About**: Mission and organizational commitment
3. **Impact**: Key statistics and achievements
4. **How It Works**: 4-step donation process
5. **Testimonials**: Partner quotes and success stories
6. **Donate**: Multiple ways to get involved

### Additional Pages
- **/who-we-are**: Team information, mission, values, and media recognition
- **/our-work**: Programs (shoes, essential items, partnerships, fundraising) and impact metrics
- **/get-involved**: Multiple ways to help (donate shoes, give monthly, volunteer, partnerships)
- **/partners**: Shelter partners and community organizations

## Target Audience

- Nonprofit donation partners (prospective)
- Individual donors
- Homeless shelters in DFW
- Community supporters

## License

© 2025 Shelter Aid TX. All rights reserved. 501(c)3 Nonprofit Organization.

## Contact

- Website: [shelteraidtx.org](https://shelteraidtx.org)
- Instagram: [@shelteraidtx](https://instagram.com/shelteraidtx)
