<script setup lang="ts">
import { useNavLinks } from '~/composables/useNavLinks'

const { links } = useNavLinks()
</script>

<template>
  <nav>
    <ul class="flex space-x-4">
      <li v-for="link in links" :key="`${link.to}`" class="text-zinc-900 dark:text-zinc-100">
        <nuxt-link :to="link.to" active-class="text-teal-400 ">
          {{ link.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
