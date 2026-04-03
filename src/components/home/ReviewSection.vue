<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import ReviewCard from './ReviewCard.vue'
import { reviews } from '@/data/reviews'

const reviewsList = reviews
</script>

<template>
  <section id="reviews" class="section-padding bg-white">
    <div class="container">
      <SectionHeader
        title="What Our Clients Say"
        subtitle="Real feedback from satisfied customers"
      />

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <ReviewCard v-for="review in reviewsList" :key="review.id" :review="review" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
