<script setup lang="ts">
export interface Props {
  message?: string
}

const { message } = withDefaults(defineProps<Props>(), {
  message: undefined,
})
</script>

<template>
  <div v-show="message">
    <p class="text-sm text-rose-600">
      {{ message }}
    </p>
  </div>
</template>
