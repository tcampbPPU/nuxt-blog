export type Category = 'languages' | 'frameworks' | 'databases' | 'tools' | 'misc'

export interface Tool {
  category: Category
  name: string
  description: string
  image?: string
}

export function useTools() {
  const tools: Tool[] = [
    {
      category: 'languages',
      name: 'JavaScript',
      description: 'JavaScript is a high-level, interpreted programming language.',
      image: 'https://via.placeholder.com/150',
    },
    {
      category: 'frameworks',
      name: 'Vue',
      description: 'Vue is a progressive framework for building user interfaces.',
      image: 'https://via.placeholder.com/150',
    },
  ]

  const groupedTools = tools.reduce((acc, tool) => {
    if (!acc[tool.category])
      acc[tool.category] = []

    acc[tool.category].push(tool)

    return acc
  }, {} as Record<Category, Tool[]>)

  return {
    tools,
    groupedTools,
  }
}
