<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  message: String as PropType<string>,
})
</script>

<template>
  <div v-show="message">
    <p class="text-sm text-rose-600">
      {{ message }}
    </p>
  </div>
</template>
