import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { RouteLocationRaw } from 'vue-router'

export {}
declare global {
  export interface Article extends ParsedContent {
    slug: string
    title: string
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    tags: Array<string>
  }

  export type Articles = Array<Article>

  export interface Project extends ParsedContent {
    name: string
    link: string
    description: string
    image: string
  }

  export type Projects = Array<Project>


  export namespace styles {
    export type Theme = 'light' | 'dark'
    export type BthVariant = 'primary' | 'secondary'
    export type BthSize = 'sm' | 'md' | 'lg'
  }

  export namespace basic {
    export interface PrimaryNavigationLink {
      label: string
      to: RouteLocationRaw
    }
  }
}
