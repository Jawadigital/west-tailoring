<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Service } from '@/types/Service.ts';

interface Props {
  service: Service;
}
const props = defineProps<Props>();
const router = useRouter();

const handleLearnMore = () => {
  router.push(`/service/${props.service.id}`);
};
</script>

<template>
  <div class="col">
    <div class="service-card" @click="handleLearnMore">
      <div class="service-card__image-wrap">
        <img :src="service.imageUrl" :alt="service.title" class="service-card__image" />
        <div class="service-card__overlay"></div>
      </div>

      <div class="service-card__body">
        <h4 class="service-card__title">{{ service.title }}</h4>
        <p class="service-card__desc">{{ service.description }}</p>
        <div class="service-card__footer">
          <span class="service-card__link">
            Learn More <i class="bi bi-arrow-right ms-1"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.service-card__image-wrap {
  position: relative;
  overflow: hidden;
  height: 210px;
}

.service-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.service-card:hover .service-card__image {
  transform: scale(1.06);
}

.service-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.35));
}

.service-card__body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.service-card__title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.6rem;
}

.service-card__desc {
  font-size: 0.9rem;
  color: var(--text-muted-color);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1rem;
}

.service-card__footer {
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  padding-top: 0.9rem;
}

.service-card__link {
  color: var(--secondary-color);
  font-weight: 600;
  font-size: 0.9rem;
  transition: letter-spacing 0.2s ease;
}

.service-card:hover .service-card__link {
  letter-spacing: 0.03em;
}
</style>
