<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  checked: {
    type: [Boolean, Array] as PropType<boolean | string[]>,
    default: false,
  },
  value: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
})

const emit = defineEmits<{
  (event: 'update:checked', value: boolean | string[]): void
}>()

const proxyChecked = computed({
  get() {
    return props.checked
  },

  set(val) {
    emit('update:checked', val)
  },
})
</script>

<template>
  <input
    v-model="proxyChecked"
    type="checkbox"
    :value="value"
    class="rounded border-zinc-300 text-violet-600 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
  >
</template>
