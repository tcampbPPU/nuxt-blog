<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

export interface Props {
  large?: boolean
  alt?: string
  source?: string
  to?: RouteLocationRaw
}

const { source, alt, large, to } = withDefaults(defineProps<Props>(), {
  source: '/profile.png',
  alt: 'Profile Photo',
  large: true,
  to: '/',
})
</script>

<template>
  <nuxt-link :to="to">
    <img
      :src="source"
      :alt="alt"
      class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
      :class="large ? 'h-16 w-16' : 'w-9 h-9'"
      :sizes="large ? '4rem' : '2.25rem'"
    >
  </nuxt-link>
</template>
