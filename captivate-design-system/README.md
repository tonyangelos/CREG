# Captivate Onboarding Design System

Extracted from the live Captivate Agent Onboarding Map. Plain HTML, CSS and JS. No build step, no framework.

## Files

| File | Purpose |
|---|---|
| `tokens.css` | All design tokens (`--ar-*`): color, type, light and dark themes |
| `components.css` | Every component style, scoped under `#cr`, plus responsive rules |
| `content.js` | Stage, FAQ and team data. Edit copy here |
| `app.js` | Renders lanes, stepper, detail panel, FAQ accordion, team cards |
| `index.html` | Reference page that uses every component |
| `assets/` | Logo and team photos (see "Assets") |

Open `index.html` in a browser to preview.

## Foundations

**Fonts** (Google Fonts): Lexend 200–600 for display, Nunito Sans 400/600/700/800 for body. Body stack: Avenir, Avenir Next, Nunito Sans, system-ui (Avenir appears on Apple devices only).

**Color roles**

| Token | Hex | Use |
|---|---|---|
| `--ar-brand` | `#31473B` | Nav, hero, footer, accent |
| `--ar-brand-deep` | `#26382E` | Hero arch shape |
| `--ar-ink` | `#141414` | Body text |
| `--ar-muted` / `--ar-muted2` | `#4A4A4A` / `#626262` | Secondary text |
| `--ar-ground` | `#F7F7F7` | Page background |
| `--ar-card` | `#FFFFFF` | Card surface |
| `--ar-mist` | `#EFEFEF` | Neutral fill (eXp path card, help box) |
| `--ar-border` | `#E3E3E3` | Hairlines |
| `--ar-accent-soft` / `--ar-accent-line` | `#EBF0ED` / `#B7C7BE` | Captivate-path tint and line |
| `--ar-exp` / `--ar-exp-line` | `#626262` / `#C6C6C6` | eXp path dot and line |
| `--ar-focus` | `#6C8577` | Focus ring |

Rule: **green = Captivate, gray = eXp.** Dots, tabs and path cards use `--c` (set inline) so one component serves both paths.

**Type scale**: H1 56px/1.1 light (40px compact, 34px phone) · H2 40px/1.15 light (32/28) · H3 34px/1.15 light (28) · Body 17px/1.55 (16 compact) · Hero lead 20px · Eyebrow 12px, uppercase, 0.24em tracking, Lexend 400.

**Shape**: cards and panels 8px radius; buttons, tabs, chips and pills 999px; dots and avatars 50%.

**Motion**: `ar-pop` (10px rise + fade, 0.3–0.5s); hover transitions 0.2s; everything disabled under `prefers-reduced-motion`.

**Theming**: dark theme follows the OS, or force with `<html data-theme="dark|light">`.

**Breakpoints**: JS measures width and sets `.ar-compact` (<820px) and `.ar-phone` (<560px) on `#cr`. Style responsive variants with those classes, not media queries.

## Components

Naming: every class is prefixed `ar-`.

- **Nav** `.ar-nav` · logo + "Onboarding" sub-label, links, `.ar-pill` CTA. Links hide under compact; the pill stays.
- **Hero** `.ar-hero` · `.ar-badge`, H1, lead, `.ar-cta`, decorative `.ar-arch` shapes, `.ar-summary` card.
- **Buttons** `.ar-btn` + `.ar-btn-primary` (white on green) or `.ar-btn-ghost` (outline). 44px min height. Use on brand-colored backgrounds.
- **Path card** `.ar-path-card.exp|.cap` with `.ar-count` number tile.
- **Section header** `.ar-head` · `.ar-eyebrow` + `.ar-h2` + optional paragraph.
- **Card** `.ar-card` · white, 1px border, 28px padding.
- **Lane / track** `.ar-lane-head`, `.ar-track`, `.ar-stop` (dot, name, tag). Horizontal scroll on desktop, vertical timeline when compact. `.ar-dot.sticky` (dashed ring) flags stages that often take longest.
- **Stepper** `#ar-stepper` · same `.ar-stop` markup as buttons; `.is-active` shows black dot with ring. Names hide when compact.
- **Tabs** `.ar-tabs` / `.ar-tab[aria-selected]` · pill tabs, selected fill = `--c`.
- **Detail panel** `.ar-detail`, `.ar-detail-main`, `.ar-kicker`, `.ar-intro`, `.ar-item` (label `lbl-do|lbl-get|lbl-exp`), `.ar-note` (default = green tint, `.heads` = gray), `.ar-side` with `.ar-pn` prev/next and `.ar-help`.
- **FAQ accordion** `.ar-q[.open]` · button + `.ar-plus` (rotates to ×) + `.ar-a`. One open at a time. Text before the first colon in an answer is bolded automatically.
- **Team** `.ar-team` grid of `.ar-person` · `.ar-avatar` (photo or initials), `.ar-role`, `.ar-contact`.
- **Footer** `.ar-foot` · closing CTA, `.ar-foot-grid` contacts, `.ar-foot-brand`.
- **Inline link** `.ar-inline-link` · bold, underlined; email and URLs in content are auto-linked.
- **Connect note** `.ar-connect` and **legend** `.ar-legend`.

## Accessibility rules

- 44px minimum tap target on buttons, tabs, pills; FAQ rows 56px.
- Visible `:focus-visible` outline (white on brand backgrounds, `--ar-focus` elsewhere).
- Tabs use `role="tab"` and `aria-selected`; stepper buttons use `aria-pressed` and descriptive `aria-label`s; FAQ buttons use `aria-expanded`; detail panel is `aria-live="polite"`.
- Respect `prefers-reduced-motion` and `prefers-color-scheme`.
- Support iOS safe areas (`env(safe-area-inset-*)`).

## Assets

Not included here (large embedded images in the original). Add before use:
- `assets/captivate-logo.png`: wordmark, shown at 28px tall (22px compact, 19px phone).
- `assets/monica-gump.jpg`, `tony-angelos.jpg`, `mo-duffield.jpg`, `dan-spitz.jpg`: square-ish headshots. Missing photos fall back to initials automatically.
- Shabana's photo loads from the original CDN URL in `content.js`.

## Using it elsewhere

1. Load the Google Fonts link, `tokens.css`, then `components.css`.
2. Wrap your page in `<div id="cr">` (components are scoped to it).
3. Copy markup patterns from `index.html`; render dynamic parts from data like `content.js` does.
4. Never hardcode colors or spacing; use `--ar-*` tokens.
