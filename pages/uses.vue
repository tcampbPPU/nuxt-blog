<script setup lang="ts">
import { useTools } from '@/composables/useTools'

const { author } = useAppConfig()
const { groupedTools } = useTools()

useHead({
  title: `Uses - ${author}`,
  meta: [
    {
      name: 'description',
      content: 'A list of the tools and services I use on a daily basis.',
    },
  ],
})
</script>

<template>
  <Container>
    Uses {{ groupedTools }}
  </Container>
</template>
