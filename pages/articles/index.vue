<script setup lang="ts">
const { author } = useAppConfig()
const { data: articles } = await useAsyncData('articles', () => queryContent<Articles>('/articles').only(['slug', 'title', 'description']).find())

useHead({
  title: `Articles - ${author}`,
  meta: [
    {
      name: 'description',
      content: 'A list of the articles I have written.',
    },
  ],
})
</script>

<template>
  <Container>
    {{ articles }}
  </Container>
</template>
