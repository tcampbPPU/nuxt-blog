<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  value: String as PropType<string>,
})
</script>

<template>
  <label class="block font-medium font-title text-sm text-zinc-800">
    <span v-if="value">
      {{ value }}
    </span>
    <span v-else>
      <slot />
    </span>
  </label>
</template>
