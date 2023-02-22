export interface Experience {
  company: string
  position: string
  start: string
  end: string
  logo: string
}

export function useResume() {
  const resume: Experience[] = [
    {
      company: 'Company Name',
      position: 'Position Name',
      start: '2021',
      end: 'Present',
      logo: 'https://via.placeholder.com/150',
    },
  ]

  return {
    resume,
  }
}
