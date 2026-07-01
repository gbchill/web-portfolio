# George Badulescu — Portfolio

Personal portfolio. Next.js (App Router), TypeScript, Tailwind, framer-motion / motion.

## Design brief

The goal is clean, professional, modern, and minimal. It should read like a real engineer made it, not an AI template. When in doubt, remove something.

**Voice and copy**
- First person, plain, specific. Lead with what was built and the result.
- No em dashes anywhere in user-facing copy. Use commas, periods, or "and". En dashes are allowed only in date ranges.
- No generic filler ("passionate about transforming innovative concepts into seamless experiences"). Cut it.
- Use the typographic apostrophe `'` in prose instead of `'` so ESLint stays quiet and text reads cleanly.
- The resume is the source of truth for facts, dates, and numbers (`George_Badulescu_Resume_2026.docx`).

**Direction: "hybrid"** — an engineering/brutalist-leaning look with personality.

**Type**
- Space Grotesk for display/body, Space Mono for metadata (labels, dates, tags, nav, eyebrows). Set via `next/font` in `app/layout.tsx` and exposed as Tailwind `font-sans` / `font-mono`.
- Headings are bold, uppercase, tight tracking (see `.heading` in `globals.css`).

**Color**
- Hybrid palette tokens in `globals.css` (`--canvas`, `--ink`, `--subtle`, `--line`, `--soft`, `--panel`, `--brand`), exposed as Tailwind `canvas/ink/subtle/line/soft/panel/brand`.
- Single accent: brand purple `#7c3aed` (light), `#9061f9` (dark). No other accent colors, no gradient text.
- Default theme is light; dark via next-themes toggle (`Theme-Switch`).

**Background**
- `components/ui/Background.tsx`: fine grid fading from the top, one soft brand glow, faint grain. Theme-aware via CSS vars.

**Layout / character**
- Heavy 2px `border-ink` section dividers and boxes. Hover-invert project cards (slide-up brand fill). Mono section labels.

**Motion** (`components/ui/motion.tsx`)
- Signature touches: scramble/decode section headings with a growing underline, blur+stagger hero reveal, count-up stats, magnetic buttons, two marquee tickers, scroll reveals.
- Keep UI feedback under 300ms, ease-out. Everything degrades for `prefers-reduced-motion` (handled per-component and globally in `globals.css`).

## Installed design skills
`impeccable`, `emil-design-eng`, `review-animations`, `gpt-taste`, `brandkit`, `animation-vocabulary` live in `.claude/skills`. Use `/polish` and the animation review before finishing UI work. Higgsfield MCP is connected for optional imagery (needs OAuth).
