<template>
  <div class="service-detail-page">
    <ServiceDetailHero :service="service" />
    <ServiceDetailContent :service="service" />
    <MapSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ServiceDetailHero from '@/components/service/ServiceDetailHero.vue'
import ServiceDetailContent from '@/components/service/ServiceDetailContent.vue'
import MapSection from '@/components/home/MapSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import { services } from '@/data/services'

const route = useRoute()
const service = computed(() => services.find(s => s.id === Number(route.params.id)))
</script>
