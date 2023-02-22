<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData('article', () => queryContent<Article>('/articles').where({ _path: path }).findOne(), { immediate: true })
</script>

<template>
  <!-- <Container>
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" />
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </Container> -->
  <Container>
    <ContentDoc>
      <template #not-found>
        <div class="flex flex-row justify-center space-x-12">
          <BackButton />
          <div class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Document not found
          </div>
        </div>
      </template>
    </ContentDoc>
  </Container>
</template>
