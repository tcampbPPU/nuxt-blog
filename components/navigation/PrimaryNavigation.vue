<script setup lang="ts">
import { useNavLinks } from '~/composables/useNavLinks'

const { links } = useNavLinks()
</script>

<template>
  <nav>
    <ul class="flex space-x-4 rounded-full bg-white/90 px-3 py-2 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 text-md">
      <li v-for="link in links" :key="`${link.to}`" class="text-zinc-900 dark:text-zinc-100">
        <nuxt-link :to="link.to" active-class="text-teal-400">
          {{ link.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
