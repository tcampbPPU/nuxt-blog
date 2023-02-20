<script setup lang="ts">
export interface Props {
  checked: boolean | string[]
  value: string | undefined
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  value: undefined,
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
