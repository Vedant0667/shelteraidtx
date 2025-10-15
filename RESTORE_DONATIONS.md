# How to Restore Online Donations

When banking details are ready, follow these steps to re-enable online donations:

## Step 1: Update Feature Flags

Search for `DONATIONS_ENABLED = false` and change to `true` in these files:

1. **src/app/donate/page.tsx** (line 16)
2. **src/components/NavBar.tsx** (line 8)
3. **src/components/QuickDonate.tsx** (line 8)

## Step 2: Configure Stripe Keys

Update `.env.local` with your actual Stripe keys:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

## Step 3: Test Locally

```bash
npm run dev
```

- Visit http://localhost:3000
- Click "Donate Now" button (should no longer show "Coming Soon")
- Try making a test donation with Stripe test card: 4242 4242 4242 4242

## Step 4: Deploy

```bash
npm run build
# Deploy to your hosting platform (Vercel/Netlify/etc)
```

## Quick Find & Replace

Use your IDE's find & replace:

**Find:** `const DONATIONS_ENABLED = false;`
**Replace:** `const DONATIONS_ENABLED = true;`
**Files:** `src/**/*.{ts,tsx}`

That's it! All donation UI will instantly re-enable.
