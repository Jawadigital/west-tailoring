<script setup lang="ts">

</script>

<template>
  <div class="card h-100 shadow-sm card-hover">
    <div v-if="$slots.image">
      <slot name="image"></slot>
    </div>

    <div class="card-body d-flex flex-column">
      <div v-if="$slots.header" class="mb-3">
        <slot name="header"></slot>
      </div>

      <div class="flex-grow-1">
        <slot></slot>
      </div>

      <div v-if="$slots.footer" class="mt-3 pt-3 border-top">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
