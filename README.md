# FLO Engineering — Homepage V2

Next.js App Router, React, TypeScript and Tailwind CSS. Homepage at `/`, implemented as Server Components. No environment variables or external services required.

## Local development

Use Node.js 22 or 24 and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verification

```sh
pnpm lint
pnpm typecheck
pnpm build
```

## Vercel

Import this project from GitHub into Vercel, select the Next.js preset, keep the repository root as the root directory and use Node.js 22 or 24. Build command: `pnpm build`. The homepage is statically prerendered; image optimization uses Next.js. No custom output directory or secrets are required.

## Source and implementation

Figma file: https://www.figma.com/design/oSmqZK8Ck7wYbRPbhCzSgZ

Homepage V2: section `78:592`, desktop `182:5141`, hover states `182:5340` and `182:5355`.

- Main sections and reusable components: `src/components/home.tsx`.
- Route and font setup: `src/app/page.tsx`, `src/app/layout.tsx`.
- Tailwind import, design values and responsive rules: `src/app/globals.css`.
- Original downloaded imagery: `public/figma`. Export provenance: `assets-download.json`.
- Local PP Mori Regular/Semibold and PP Telegraf Regular fonts: `public/fonts`.

## Details requiring final source content

- Figma's hero contains a VIDEO fill. The available export provides a still of the original composition, stored as `hero.png`, with the original SVG mask. Replace with the source video when supplied.
- PP Mori Light was not present among the local fonts. Light text currently renders with PP Mori Regular, preserving family rather than substituting another font.
- Figma provides desktop and two service hover states, but no tablet/mobile frames in Homepage V2. Responsive behavior is inferred from that design.
- No project-detail pages, resource pages, legal documents or social URLs were supplied. Internal navigation uses section anchors. Project/resource/legal links currently open addressed email inquiries; social marks remain noninteractive. Replace these destinations with actual pages before public launch.
- Duplicate testimonial copy and the 2025 copyright year are preserved exactly from Figma.

No deployment has been made.
