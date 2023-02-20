<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () => queryContent<Articles>('/articles').only(['slug', 'title', 'description']).find())
</script>

<template>
  <Container>
    {{ articles }}
  </Container>
</template>
