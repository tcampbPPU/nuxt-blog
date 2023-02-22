export function useNavLinks() {
  const links: basic.PrimaryNavigationLink[] = [
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
