<script setup lang="ts">
import { useNavLinks } from '~/composables/useNavLinks'

const { author } = useAppConfig()
const { linksWithoutHome: links } = useNavLinks()
</script>

<template>
  <footer class="mt-32">
    <div class="border-t  pt-10 pb-16 border-zinc-700/40">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="flex gap-6 text-sm font-medium text-zinc-200">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
            {{ link.label }}
          </NuxtLink>
        </div>
        <p class="text-sm text-zinc-500 mr-2">
          &copy; {{ new Date().getFullYear() }} {{ author }}
        </p>
      </div>
    </div>
  </footer>
</template>
