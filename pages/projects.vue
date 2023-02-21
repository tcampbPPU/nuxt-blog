<script setup lang="ts">
const { data } = await useAsyncData('projects', () => queryContent<Projects>('/projects').only(['projects']).findOne(), { immediate: true })
</script>

<template>
  <Container>
    Projects
    <pre>
      {{ data?.projects }}
    </pre>
  </Container>
</template>
