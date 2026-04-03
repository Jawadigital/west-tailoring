<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue';
import { whyUs } from '@/data/whyUs.ts';

</script>

<template>
  <section id="why-us" class="section-padding bg-white">
    <div class="container">
      <SectionHeader
        title="Why Choose Us"
        subtitle="Experience the difference of true craftsmanship"
      />
      <div class="row g-4">
        <div v-for="reason in whyUs"
             :key="reason.id"
             class="col-lg-3 col-md-6"
        >
          <div class="text-center p-4">
            <div class="mb-3">
              <i :class="['bi', reason.icon, 'text-secondary-custom']" style="font-size: 3rem"> </i>
              <div>
                <h4 class="fw-bold mb-3">{{ reason.title }}</h4>
                <p class="text-muted">{{ reason.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped></style>
