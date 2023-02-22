<script setup lang="ts">
import { useProjects } from '@/composables/useProjects'

const { projects } = useProjects()
</script>

<template>
  <Container>
    Projects
    <pre>
      {{ projects }}
    </pre>
  </Container>
</template>
