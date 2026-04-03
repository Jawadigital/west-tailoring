<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'

const heroStyle = {
  backgroundImage: `url(${import.meta.env.BASE_URL}placeholder.png)`,
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToServices = () => {
  const servicesSection = document.getElementById('services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="home"
    class="hero-section d-flex align-items-center text-white position-relative"
    :style="heroStyle"
  >
    <div class="hero-overlay position-absolute w-100 h-100"></div>

    <div class="container position-relative" style="z-index: 1">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h1 class="display-3 fw-bold mb-4">Expert Tailoring Services</h1>
          <p>
            Custom-fitted clothing crafted with precision and care. Over 20 years of excellence in
            tailoring.
          </p>
          <div class="d-flex gap-3 justify-content-center align-items-center">
            <BaseButton size="lg" @click="scrollToContact"> Contact Today</BaseButton>
            <BaseButton size="lg" variant="outline" @click="scrollToServices">Our Services</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.hero-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 500px;
  }
}
</style>
