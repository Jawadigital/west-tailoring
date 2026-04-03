<script setup lang="ts">
import BaseCard from '@/components/common/BaseCard.vue'
import type { Review } from '@/types/Review'

interface Props {
  review: Review
}
defineProps<Props>()
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="col">
    <BaseCard>
      <template #header>
        <div class="d-flex align-items-center gap-3">
          <div class="avatar">
            {{ getInitials(review.name) }}
          </div>
          <div class="flex-grow-1">
            <h5 class="mb-1 fw-bold">{{ review.name }}</h5>
            <div class="text-warning">
              <i
                v-for="star in 5"
                :key="star"
                :class="star <= review.rating ? 'bi-star-fill' : 'bi-star'"
                class="bi"
              ></i>
            </div>
          </div>
        </div>
      </template>

      <p class="card-text fst-italic text-muted">"{{ review.comment }}"</p>

      <template #footer>
        <small class="text-muted">
          <i class="bi bi-calendar me-1"></i>
          {{ formatDate(review.date) }}
        </small>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped>
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
}
</style>
