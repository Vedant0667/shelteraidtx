# Shelter Aid TX - Codebase Reference

## Tech Stack
- Next.js 15.4.2 (App Router), React 19, TypeScript
- Tailwind CSS + CSS Variables (in `globals.css`)
- Framer Motion (via `Motion.tsx` wrapper)
- Fonts: Inter (body), Space Grotesk (headings)

## Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout, SEO, fonts
│   ├── page.tsx                # Homepage (Hero, About, Impact, HowItWorks, Testimonials, Donate)
│   ├── globals.css             # CSS variables & design system
│   ├── who-we-are/page.tsx     # Team profiles
│   ├── our-work/page.tsx       # Programs & impact
│   ├── get-involved/page.tsx   # Donation CTAs
│   └── partners/page.tsx       # Shelter & community partners
└── components/
    ├── NavBar.tsx              # Navigation (client)
    ├── Hero.tsx                # Hero with stats (client)
    ├── About.tsx               # Mission (client)
    ├── Impact.tsx              # Statistics (client)
    ├── HowItWorks.tsx          # 4-step process (client)
    ├── Testimonials.tsx        # Vimeo videos (client)
    ├── Donate.tsx              # Contact (client)
    ├── Footer.tsx              # Footer (client)
    └── Motion.tsx              # Animation wrapper utility

public/images/
├── shelters/                   # Shelter logos
│   ├── family-gateway.png
│   ├── hope-restored.png
│   ├── aitf.png
│   ├── our-daily-bread.png
│   ├── journey-to-dream.png
│   └── genesis.png
├── greenhill.jpg, fleetfeet.png, cisv.png  # Community partner logos
└── logo.png, hero-bg.jpg, stock-*.jpg, etc.
```

## Design System (globals.css)
**Colors:**
- Primary: `#2B9FD9` (blue)
- Secondary: `#E8F4F8` (soft blue)
- Accent: `#D4A574` (warm cream)

**Common Patterns:**
- Section: `py-20 sm:py-28`, `max-w-7xl mx-auto px-5`
- Gradient sections: `bg-gradient-to-br from-[var(--color-secondary)] to-white`
- Buttons: `rounded-full`, gradient backgrounds
- Cards: `rounded-2xl` to `rounded-3xl`, `shadow-xl`

## Key Content Locations

**Shelter Partners** - `src/app/partners/page.tsx` (lines 57-64)
```typescript
{ name: "Name", desc: "Description", logo: "/images/shelters/filename.png" }
```

**Team Members** - `src/app/who-we-are/page.tsx` (lines 56-98)

**Statistics** (update all 3):
- `src/components/Hero.tsx`
- `src/components/Impact.tsx`
- `src/app/our-work/page.tsx`

**Current Stats:** 1,003 shoes | 6 shelters | 3 community partners | Founded Oct 2023

## Common Tasks

**Add Shelter Partner:**
1. Place logo in `public/images/shelters/` (use lowercase-hyphenated.png)
2. Add to array in `partners/page.tsx` (L57-64)
3. Update stats if count changes

**Add Community Partner:**
Add to `partners/page.tsx` (L86-127) with logo in `public/images/`

**Add Team Member:**
Add to `who-we-are/page.tsx` (L56-98) with photo in `public/images/`

**Update Colors:**
Edit CSS variables in `src/app/globals.css`
