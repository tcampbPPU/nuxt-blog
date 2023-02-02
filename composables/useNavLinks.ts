export function useNavLinks() {
  const links: basic.PrimaryNavigationLink[] = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'About',
      to: '/about',
    },
    {
      label: 'Projects',
      to: '/projects',
    },
    {
      label: 'Uses',
      to: '/uses',
    },
    {
      label: 'Articles',
      to: '/articles',
    },
  ]

  const linksWithoutHome = links.slice(1)

  return {
    links,
    linksWithoutHome,
  }
}
