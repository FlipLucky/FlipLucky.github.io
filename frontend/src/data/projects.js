// Placeholder content — swap every field here for a real project before
// this ships. Kept deliberately generic (not invented case studies) so
// nothing here is mistaken for an actual project.

export const PROJECTS = [
  {
    slug: 'project-one',
    color: 'red',
    unit: '01',
    tag: 'Placeholder',
    title: 'Project One',
    summary: 'One-line placeholder summary — replace with a real project.',
    body: 'Placeholder body copy for the project detail page. Replace with an actual write-up: what it is, what you built, what stack it uses, and why it exists.',
    wasm: null,
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
]

export function getProject(slug) {
  return PROJECTS.find((project) => project.slug === slug)
}
