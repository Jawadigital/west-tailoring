<script setup lang="ts">
import { contactInfo } from '@/data/contactInfo'
</script>

<template>
  <a :href="`tel:${contactInfo.phone}`" class="sticky-call">
    <i class="bi bi-telephone-fill me-2"></i>
    Call Us
  </a>
</template>

<style scoped>
.sticky-call {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  background-color: var(--secondary-color);
  color: #ffffff;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.sticky-call:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  color: #ffffff;
}
</style>
