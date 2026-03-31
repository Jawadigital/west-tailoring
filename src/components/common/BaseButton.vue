<script setup lang="ts">

import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'success';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClass = computed(() => {
  const classes = ['btn'];

  if (props.variant === 'primary') {
    classes.push('btn-primary');
  } else if (props.variant === 'secondary') {
    classes.push('btn-secondary');
  } else if (props.variant === 'outline') {
    classes.push('btn-outline');
  } else if (props.variant === 'success') {
    classes.push('btn-success');
  }

  if (props.size === 'sm') {
    classes.push('btn-sm');
  } else if (props.size === 'lg') {
    classes.push('btn-lg');
  }

  return classes.join(' ');
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
}
</script>

<template>
  <button
    :class="buttonClass"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
