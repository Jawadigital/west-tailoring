<script setup lang="ts">
import { useRouter } from 'vue-router';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import type { Service } from '@/types/Service.ts';

interface Props {
  service : Service;
}
const props = defineProps<Props>();

const router = useRouter();

const handleLearnMore = () => {
  router.push(`/service/${props.service.id}`);
};
</script>

<template>
  <div class="col">
    <BaseCard>

      <template #image>
        <img
          :src="service.imageUrl"
          :alt="service.title"
          class="card-img-top service-image"
        />
      </template>

      <template #header>
        <h4 class="card-title fw-bold">{{ service.title }}</h4>
      </template>

      <p class="card-text text-muted">{{ service.description }}</p>

      <template #footer>
        <div class="text-center">
          <button class="btn btn-outline-dark btn-sm" @click="handleLearnMore">
            Learn More
          </button>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped>
.service-image {
  height: 200px;
  object-fit: cover;
  width: 100%;
}
</style>
