import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export {}
declare global {
  export namespace articles {

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
  }

  export namespace styles {
    export type Theme = 'light' | 'dark'
    export type BthVariant = 'primary' | 'secondary'
    export type BthSize = 'sm' | 'md' | 'lg'
  }

  export namespace basic {
    export interface PrimaryNavigationLink {
      label: string
      to: string
    }
  }
}
