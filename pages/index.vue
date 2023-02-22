<script setup lang="ts">
import { useResume } from '@/composables/useResume'

const { resume } = useResume()
</script>

<template>
  <Container>
    here
    {{ resume }}
  </Container>
</template>
