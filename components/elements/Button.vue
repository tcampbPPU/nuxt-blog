<script setup lang="ts">
export interface Props {
  variant: styles.BthVariant
  size: styles.BthSize
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-zinc-500 text-white hover:bg-zinc-600'
    case 'secondary':
      return 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1 text-sm'
    case 'md':
      return 'px-4 py-2 text-base'
    case 'lg':
      return 'px-6 py-3 text-lg'
  }
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
    :class="[
      variantClasses,
      sizeClasses,
    ]"
  >
    <slot />
  </button>
</template>
