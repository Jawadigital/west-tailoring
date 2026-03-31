<script setup lang="ts">
import type { SocialMedia } from '@/types/ContactInfo.ts'

interface Props {
  socialMediaList: SocialMedia[]
}

defineProps<Props>()
</script>

<template>
  <div class="d-flex gap-3 justify-content-center">
    <a
      v-for="social in socialMediaList"
      :key="social.platform"
      :href="social.url"
      :aria-label="social.platform"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link"
    >
      <i :class="['bi', social.icon, 'fs-4']"></i>
    </a>
  </div>
</template>

<style scoped>
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background-color: var(--secondary-color);
  transform: translateY(-3px);
  color: white;
}
</style>
