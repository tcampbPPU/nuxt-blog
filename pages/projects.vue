<script setup lang="ts">
import { useProjects } from '@/composables/useProjects'

const { author } = useAppConfig()
const { projects } = useProjects()

useHead({
  title: `Projects - ${author}`,
  meta: [
    {
      name: 'description',
      content: 'A list of the projects I have worked on.',
    },
  ],
})
</script>

<template>
  <Container>
    Projects
    <pre>
      {{ projects }}
    </pre>
  </Container>
</template>
