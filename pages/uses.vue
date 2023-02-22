<script setup lang="ts">
import { useTools } from '@/composables/useTools'

const { groupedTools } = useTools()
</script>

<template>
  <Container>
    Uses {{ groupedTools }}
  </Container>
</template>
