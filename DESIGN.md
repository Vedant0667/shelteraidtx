---
name: Shelter Aid TX
description: Student-led DFW nonprofit that collects shoes and delivers every pair to shelter partners.
colors:
  sky: "#2B9FD9"
  sky-deep: "#1E87C4"
  sky-ink: "#1A7AB0"
  sky-tint: "#E8F4F8"
  sky-tint-deep: "#D1E7F0"
  cream: "#F5E6D3"
  sand: "#D4A574"
  sand-deep: "#B8895A"
  ink: "#0F172A"
  ink-soft: "#334155"
  ink-muted: "#475569"
  ink-faint: "#64748B"
  surface: "#FFFFFF"
  ground: "#FAFBFC"
  line: "#E2E8F0"
  line-soft: "#F1F5F9"
typography:
  display:
    fontFamily: "Libre Baskerville, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.75rem, 6vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Libre Baskerville, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Libre Baskerville, Georgia, 'Times New Roman', serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  quote:
    fontFamily: "Libre Baskerville, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.375rem, 2.4vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0"
  lede:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  body:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
  section: "clamp(4.5rem, 10vw, 8rem)"
  gutter: "1.5rem"
  container: "72rem"
  prose: "65ch"
components:
  button-primary:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.sky-deep}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
  button-on-dark:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
  link-arrow:
    backgroundColor: "transparent"
    textColor: "{colors.sky-ink}"
    typography: "{typography.label}"
  header:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    height: "4.5rem"
  header-scrolled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    height: "4rem"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    padding: "5rem 0 2.5rem"
  band-sky:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.surface}"
    padding: "{spacing.section} 0"
  band-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    padding: "{spacing.section} 0"
  logo-tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
    height: "7rem"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1rem"
  accordion-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "1.5rem 0"
---

# Design System: Shelter Aid TX

## 1. Overview

**Creative north star: the drive flyer on the gym door.** Big, honest headline in a book serif; plain, friendly sans underneath; a real photo of the shoes; the name of a shelter you recognize. Nothing to decode.

The register is brand. The design carries three feelings in order: trust, community pride, the urge to join. The palette was set before this system and stays: sky blue, warm cream and sand, navy ink. What changes is commitment. Blue and cream now cover whole bands instead of tinting the corners of cards. Navy is the footer and the closing call to action, not just body text.

Layout is editorial, not dashboard. Headlines sit left with the lede beside or beneath them; sections alternate white, cream, and blue grounds so the scroll has rhythm without needing boxes. Cards are used only where a thing is genuinely a card (a partner logo tile, a blog entry). Sections are separated by ground changes and generous space, never by hairline stacks of identically sized cards.

The homepage hero is fixed: full-bleed shoe photograph washed toward white, centered serif headline with the rotating word, eased counters. Every other page inherits its tone: serif for anything with a voice, sans for anything instructional, photography wherever a claim is made about people.

Anti-references, from PRODUCT.md: gradient text, glass cards, tiny uppercase tracked eyebrows above every section, numbered markers on non-sequential sections, identical icon-card grids, hover-lift on everything, and charity-guilt photography.

## 2. Colors: Sky, Cream, Ink

Three families, each with a job.

- **Sky** (`sky`, `sky-deep`, `sky-ink`, `sky-tint`, `sky-tint-deep`). The brand. Use `sky` for primary buttons, active nav, links on light grounds, and one full-bleed band per long page (the "join us" moment). `sky-ink` is the link color on white for contrast (5.2:1). `sky-tint` is the hero wash and the ground for the shelters logo wall.
- **Cream and sand** (`cream`, `sand`, `sand-deep`). Warmth. `cream` is the ground for story, testimonials, and the lead-partner feature. `sand-deep` is the only text color used on cream for labels (4.6:1); body on cream stays `ink`. `sand` is decorative only: rules, marks, the heart in the footer.
- **Ink** (`ink`, `ink-soft`, `ink-muted`, `ink-faint`). Text and the dark surfaces. Body copy is `ink-soft` on white and cream (10:1); secondary copy is `ink-muted` (7:1); `ink-faint` is reserved for captions and metadata at 14px or larger (4.8:1 on white). Never use `ink-faint` for paragraphs. The footer and the closing band on the About page are `ink` with white text at `line-height` 1.65.

Neutrals: `surface` white for content, `ground` for the page body, `line` for rules and borders. Do not introduce new grays; use opacity of `ink` on light grounds and of white on dark grounds.

## 3. Typography

Two families. **Libre Baskerville** speaks; **Work Sans** explains.

- `display` is the page title only (one per page). Cap at 4.75rem; `text-wrap: balance`.
- `headline` is every section title. Left-aligned by default; centered only in the hero and in full-bleed bands.
- `title` is a card or list-item title, and the FAQ question.
- `quote` is Baskerville regular for testimonials and pull quotes, never italic on the whole block; italicize a phrase at most.
- `lede` is the one-paragraph intro under a title, capped at 60ch.
- `body` is 17px Work Sans, 1.6 line height, capped at 65ch; `text-wrap: pretty`.
- `label` is buttons, nav, form labels, tags, and metadata. Sentence case. Uppercase tracked text appears in exactly one place per page at most (a tag on a lead partner, a "Founded 2023" mark), never as a section eyebrow.

Scale ratio between steps is at least 1.25. Letter-spacing on headings is between -0.02em and -0.01em; never tighter.

## 4. Elevation

Flat by default. Depth comes from ground changes (white on cream, cream on white, white on sky) and from photography, not from shadows.

- Rules: 1px `line` on white, 1px `ink` at 12% on cream, 1px white at 15% on navy or sky.
- The only shadow in the system is the scrolled header: `0 1px 0 line, 0 8px 24px -16px ink at 25%`.
- Logo tiles get a 1px `line` border and no shadow. Hover on a logo tile changes the border to `sky` and removes the grayscale; nothing lifts.
- Images get `rounded.lg` on light grounds and square edges when full-bleed.
- No backdrop blur, no glass, no glow blurs behind cards.

## 5. Components

**SiteHeader.** One component on every page. Transparent over page intros, white with the hairline shadow after 12px of scroll. Logo left, five links plus Login, then a `button-primary` Donate pill. Mobile: a full-height sheet with the links set in `headline` size, Donate pinned at the bottom. Focus rings are 2px `sky` with 2px offset.

**SiteFooter.** Navy ground. Four columns on desktop (mission and socials, site links, resources, contact with EIN), single column on mobile. Bottom row: copyright left, "Made by students in DFW" right.

**PageIntro.** The page-title block for every non-home page: `display` title left-aligned, `lede` beside it on desktop and below on mobile, optional photo band beneath at 16:7. Top padding clears the fixed header.

**SectionTitle.** `headline` plus optional lede in a two-column row (title left, lede right) on desktop; stacked on mobile. Replaces the old eyebrow + centered title + centered paragraph stack.

**Band.** A full-bleed section on `sky`, `cream`, or `ink` ground with matching text colors and button variants. One sky band and at most one ink band per page.

**Buttons.** `button-primary` (sky pill), `button-secondary` (ink outline pill that fills on hover), `button-on-dark` (white pill for sky and ink bands), and `link-arrow` (label weight, sky-ink, arrow that moves 4px on hover). Labels are verb + object: "Donate shoes", "Host a drive", "See all partners".

**LogoWall.** A grid of `logo-tile`s, 2 columns on mobile, 4 on tablet, 6 on desktop; logos grayscale at 70% opacity, full color on hover and on focus. Name under each tile in `label`. Featured partners render as a **LeadPartner** row instead: cream band, logo at 2x tile size on a white panel, name in `title`, one sentence, optional tag.

**Timeline.** Vertical spine (1px `line`) with year marks in `title` Baskerville and a `sky` dot; entries alternate sides on desktop, stack on mobile.

**Steps.** For a true sequence only (How it works). Numbered 1 to 4 in `headline` Baskerville, step title in `title`, one sentence, photo beside on desktop.

**Accordion.** FAQ. Items separated by 1px `line`; question in `title`, plus/minus mark in `sky`; answer in `body` at `ink-muted`. Native `<details>` where possible.

**Quote.** Testimonials. `quote` type on cream, attribution in `label` with the shelter name, no card, no quotation-mark glyph.

**Form fields.** `input` with 1px `line` border, `sky` border and ring on focus, label above in `label`, error text in words under the field in `#B91C1C`. Buttons full width on mobile.

**Reveal.** Enhance-only: content is visible by default; when JavaScript runs, elements marked for reveal start at opacity 0 and 16px lower and transition in (0.6s, ease-out-quint) when they enter the viewport. Stagger siblings by 60ms. Under `prefers-reduced-motion` nothing moves.

## 6. Do's and Don'ts

**Do**
- Lead every page with a real photograph or real partner logos above the fold.
- Left-align section titles and keep ledes under 60ch.
- Alternate grounds (white, cream, sky, navy) to pace the scroll.
- Keep numbers current; the hero stats are the source of truth and every other page must match them.
- Use `sky-ink` for text links on white, `ink` on cream, white on sky and navy.
- Write button labels as verb + object.

**Don't**
- No gradient text, glass cards, or backdrop blur anywhere.
- No uppercase tracked eyebrow above section titles.
- No numbered section markers unless the section is a real sequence.
- No side-stripe borders on quotes or callouts.
- No hover-lift, scale, or glow on cards and tiles; hover changes color or border only.
- No bounce or spring easing; no animation that gates whether content is visible.
- No new grays, no new accent colors, no purple or indigo gradients.
