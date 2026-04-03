<template>
  <div class="home-page">
    <HeroSection />
    <WhyUsSection />
    <ServicesSection />
    <ReviewsSection />
    <MapSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import WhyUsSection from '@/components/home/WhyUsSection.vue'
import ServicesSection from '@/components/home/ServiceSection.vue'
import ReviewsSection from '@/components/home/ReviewSection.vue'
import MapSection from '@/components/home/MapSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
</script>
