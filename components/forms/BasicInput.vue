<script setup lang="ts">
export interface Props {
  modelValue: string | undefined
}

const { modelValue } = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const input = ref<HTMLInputElement | null>(null)

const emitChange = (value: string) => emit('update:modelValue', value)

onMounted(() => {
  if (input.value?.hasAttribute('autofocus'))
    input.value.focus()
})

defineExpose({ focus: () => input.value?.focus() })
</script>

<template>
  <input
    ref="input"
    class="rounded-md border-gray-300 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50 text-zinc-800"
    :value="modelValue"
    v-bind="$attrs"
    @input="emitChange(($event.target as HTMLInputElement)?.value)"
  >
</template>
