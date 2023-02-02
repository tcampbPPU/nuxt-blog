<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData('article', () => queryContent<articles.Article>('/articles').where({ _path: path }).findOne(), { immediate: true })
</script>

<template>
  <main>
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" />
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </main>
</template>
