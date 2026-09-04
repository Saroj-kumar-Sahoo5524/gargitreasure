# Gargi Treasure — Next.js Project

This is the original static `gargi-treasure.html` converted into a runnable
Next.js 14 (App Router) project.

## Structure

```
gargi-treasure-nextjs/
├── app/
│   ├── layout.js       # <html>/<head>, page metadata, Google Fonts + Font Awesome links
│   ├── globals.css     # all CSS extracted from the original <style> block
│   ├── page.js         # client component: mounts the markup + runs the JS
│   ├── bodyMarkup.js    # the original <body> markup, extracted as a string
│   └── initScript.js   # the original vanilla <script> logic, wrapped in an init function
├── public/              # static assets (empty — the source file used no images)
├── package.json
├── next.config.js
└── jsconfig.json        # enables the "@/" import alias
```

## How the conversion works

Rather than hand-rewriting ~1,700 lines of markup into JSX (which risks
introducing subtle bugs across the loan/investment calculators, FAQ
accordion, goal picker, mobile nav, etc.), the page was split into its
three natural layers and each was ported 1:1:

1. **CSS** (`<style>…</style>`) → `app/globals.css`, imported once in
   `app/layout.js`. Selectors, custom properties, and media queries are
   unchanged.
2. **Markup** (`<body>…</body>`) → `app/bodyMarkup.js`, a plain string
   rendered via `dangerouslySetInnerHTML` inside `app/page.js`. All the
   original `id`s and `class`es are preserved so the CSS and JS keep
   targeting the right elements.
3. **Behaviour** (`<script>…</script>`) → `app/initScript.js`, wrapped in a
   single `initGargiTreasure()` function and called from a `useEffect` in
   `app/page.js` once the markup has mounted. This covers: sticky-nav
   scroll state, the mobile menu, scroll-reveal animations, animated stat
   counters, the timeline fill, the "goal" picker, both the loan EMI
   calculator and the investment growth calculator (with its inline SVG
   chart), the FAQ accordion, and the client-side contact form
   validation/demo-submit flow.

`page.js` is a Client Component (`"use client"`) because the script relies
on `window`/`document` and DOM event listeners.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes / things you may want to do next

- The contact form only simulates a submission (`setTimeout` + a success
  message) — wire `app/initScript.js`'s submit handler up to a real
  API route (e.g. `app/api/contact/route.js`) when you're ready to
  actually receive leads.
- Font Awesome and Google Fonts are still loaded from their CDNs via
  `<link>` tags in `app/layout.js`, exactly as in the original file. Swap
  these for `next/font` and a local icon set later if you want to drop the
  external requests.
- Because the markup is injected with `dangerouslySetInnerHTML`, this page
  intentionally does not use React state/props for the calculators, menu,
  etc. — it behaves exactly like the original static page. If you later
  want idiomatic React (controlled inputs, component splitting), that's a
  further refactor beyond this direct port.
# gargitreasure
