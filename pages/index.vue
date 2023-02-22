<script setup lang="ts">
import { useResume } from '@/composables/useResume'

const { author } = useAppConfig()
const { resume } = useResume()

useHead({
  title: `${author}`,
  meta: [
    {
      name: 'description',
      content: 'My portfolio.',
    },
  ],
})
</script>

<template>
  <Container>
    here
    {{ resume }}
  </Container>
</template>
