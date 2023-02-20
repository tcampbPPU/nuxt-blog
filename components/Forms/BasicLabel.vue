<script setup lang="ts">
export interface Props {
  value: string | undefined
}

const { value } = withDefaults(defineProps<Props>(), {
  value: undefined,
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
