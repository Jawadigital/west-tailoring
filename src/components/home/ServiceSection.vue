<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import ServiceCard from '@/components/home/ServiceCard.vue'
import { services } from '@/data/services.ts'

const servicesList = services
</script>

<template>
  <section id="services" class="section-padding bg-light-custom">
    <div class="container">
      <SectionHeader
        title="Our Services"
        subtitle="Professional tailoring solutions for every need"
      />

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <ServiceCard
          v-for="service in servicesList"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
