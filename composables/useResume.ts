export interface Experience {
  company: string
  position: string
  present: boolean
  start: string
  end?: string
  logo: string
}

export function useResume() {
  const resume: Experience[] = [
    {
      company: 'Company Name',
      position: 'Position Name',
      present: true,
      start: '2021',
      logo: 'https://via.placeholder.com/150',
    },
  ]

  return {
    resume,
  }
}
