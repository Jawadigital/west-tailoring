<script setup lang="ts">
import SectionHeader from '@/components/common/SectionHeader.vue'
import { contactInfo } from '@/data/contactInfo'

const openGoogleMaps = () => {
  const query = encodeURIComponent(
    'West Tailoring & Alterations, 208 Rodbourne Rd, Swindon SN2 2AA, United Kingdom',
  )
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank')
}
</script>

<template>
  <section id="contact" class="section-padding bg-white">
    <div class="container">
      <SectionHeader title="Get In Touch" subtitle="We'd love to hear from you" />

      <div class="row justify-content-center g-4">

        <div class="col-lg-3 col-md-6">
          <a :href="`tel:${contactInfo.phone}`" class="contact-card text-decoration-none">
            <i class="bi bi-telephone-fill fs-2 mb-3"></i>
            <h5 class="fw-bold">Call Us</h5>
            <p class="mb-0">{{ contactInfo.phone }}</p>
          </a>
        </div>

        <div class="col-lg-3 col-md-6">
          <a
            :href="`mailto:${contactInfo.email}`"
            class="contact-card text-decoration-none"
          >
            <i class="bi bi-envelope-fill fs-2 mb-3"></i>
            <h5 class="fw-bold">Email Us</h5>
            <p class="mb-0">{{ contactInfo.email }}</p>
          </a>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="contact-card" style="cursor:pointer" @click="openGoogleMaps">
            <i class="bi bi-geo-alt-fill fs-2 mb-3"></i>
            <h5 class="fw-bold">Visit Us</h5>
            <p class="mb-0">{{ contactInfo.address }}</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="contact-card">
            <i class="bi bi-clock-fill fs-2 mb-3"></i>
            <h5 class="fw-bold">Working Hours</h5>
            <p class="mb-0">{{ contactInfo.workingHours }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background-color: var(--bg-card);
  color: #ffffff;
  height: 100%;
  transition: border-color 0.3s, transform 0.3s;
  border: 1px solid var(--border-subtle);
}

.contact-card:hover {
  border-color: var(--secondary-color);
  transform: translateY(-4px);
}

.contact-card i {
  color: var(--secondary-color);
}
</style>
