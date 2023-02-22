<script setup lang="ts">
const { author } = useAppConfig()

useHead({
  title: `About - ${author}`,
  meta: [
    {
      name: 'description',
      content: 'About me.',
    },
  ],
})
</script>

<template>
  <Container>
    About
  </Container>
</template>
