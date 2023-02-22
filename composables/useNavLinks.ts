import type { RouteLocationRaw } from 'vue-router'

export interface PrimaryNavigationLink {
  label: string
  to: RouteLocationRaw
}

export function useNavLinks() {
  const links: PrimaryNavigationLink[] = [
    {
      label: 'About',
      to: '/about',
    },
    {
      label: 'Projects',
      to: '/projects',
    },
    {
      label: 'Articles',
      to: '/articles',
    },
    {
      label: 'Uses',
      to: '/uses',
    },
  ]

  return {
    links,
  }
}
