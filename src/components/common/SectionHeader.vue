<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="text-center mb-5">
    <h2 class="display-5 fw-bold text-primary-custom mb-3">{{title}}</h2>
    <p v-if="subtitle" class="lead text-muted mx-auto" style="max-width: 600px">
      {{subtitle}}
    </p>

  </div>
</template>

