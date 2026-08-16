// The rest of this file (past the first entry) is placeholder content —
// swap every field for a real project before this ships. Kept deliberately
// generic (not invented case studies) so nothing here is mistaken for an
// actual project.

export const PROJECTS = [
  {
    slug: 'this-website',
    color: 'blue',
    unit: '00',
    tag: 'Design System',
    title: 'This Website',
    summary: 'A hand-built SolidJS site and the industrial tech-noir design system it runs on.',
    body: 'A personal site built from scratch with SolidStart, statically prerendered and deployed to GitHub Pages via GitHub Actions. No component library, no Tailwind — the whole typekit (colors, type scale, the hard-edge shadow system below) is hand-rolled SCSS. Dark mode gets its depth from a neon glow printed in each accent color; light mode gets the same shadow system printed in flat ink instead, since there is no glow to fake on a light surface.',
    wasm: null,
    showcase: 'styleguide',
  },
  {
    slug: 'project-two',
    color: 'orange',
    unit: '02',
    tag: 'Placeholder',
    title: 'Project Two',
    summary: 'One-line placeholder summary — replace with a real project.',
    body: 'Placeholder body copy for the project detail page. Replace with an actual write-up: what it is, what you built, what stack it uses, and why it exists.',
    wasm: null,
  },
  {
    slug: 'project-three',
    color: 'teal',
    unit: '03',
    tag: 'Placeholder',
    title: 'Project Three',
    summary: 'One-line placeholder summary — replace with a real project.',
    body: 'Placeholder body copy for the project detail page. Replace with an actual write-up: what it is, what you built, what stack it uses, and why it exists.',
    wasm: null,
  },
  {
    slug: 'project-four',
    color: 'red',
    unit: '04',
    tag: 'Placeholder',
    title: 'Project Four',
    summary: 'One-line placeholder summary — replace with a real project.',
    body: 'Placeholder body copy for the project detail page. Replace with an actual write-up: what it is, what you built, what stack it uses, and why it exists.',
    wasm: null,
  },
]

export function getProject(slug) {
  return PROJECTS.find((project) => project.slug === slug)
}
