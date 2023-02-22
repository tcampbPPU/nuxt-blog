export interface Project {
  name: string
  description: string
  link: string
  image: string
}

export function useProjects() {
  const projects: Project[] = [
    {
      name: 'Project Name',
      description: 'Project Description',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/150',
    },
  ]

  return {
    projects,
  }
}
