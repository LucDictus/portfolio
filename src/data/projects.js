/**
 * projects.js — voeg hier al je projecten toe.
 *
 * featured: true  → groot bovenaan (Featured sectie)
 * featured: false → kleinere rij in ProjectList
 *
 * diagram: JSX-compatible SVG string die je zelf invult.
 * Voor nu: placeholder. Later vervang je dit door je echte
 * architectuurdiagram als inline SVG component.
 */

export const projects = [
  {
    id: 1,
    slug: 'project-een',
    featured: true,
    title: 'Projectnaam',
    description:
      'Korte omschrijving van het probleem dat dit project oplost. ' +
      'Schrijf vanuit het probleem, niet de techniek — het diagram spreekt voor zichzelf.',
    tags: ['Symfony 6', 'React 18', 'PostgreSQL', 'Redis'],
    year: '2024',
    duration: '3 maanden',
    type: 'Solo project',
    status: 'Live',
    link: '#',
    // Vervang later door je echte diagramcomponent
    diagram: null,
  },
  {
    id: 2,
    slug: 'project-twee',
    featured: false,
    title: 'Project twee',
    description: 'Korte omschrijving van wat dit project doet.',
    tags: ['PHP', 'Symfony', 'MySQL'],
    year: '2023',
    link: '#',
    diagram: null,
  },
  {
    id: 3,
    slug: 'project-drie',
    featured: false,
    title: 'Project drie',
    description: 'Korte omschrijving van wat dit project doet.',
    tags: ['React', 'Node.js', 'REST'],
    year: '2023',
    link: '#',
    diagram: null,
  },
  {
    id: 4,
    slug: 'project-vier',
    featured: false,
    title: 'Project vier',
    description: 'Korte omschrijving van wat dit project doet.',
    tags: ['PHP', 'Redis', 'RabbitMQ'],
    year: '2022',
    link: '#',
    diagram: null,
  },
  {
    id: 5,
    slug: 'project-vijf',
    featured: false,
    title: 'Project vijf',
    description: 'Korte omschrijving van wat dit project doet.',
    tags: ['Full stack', 'Docker'],
    year: '2022',
    link: '#',
    diagram: null,
  },
]

export const featuredProject = projects.find((p) => p.featured)
export const otherProjects   = projects.filter((p) => !p.featured)
