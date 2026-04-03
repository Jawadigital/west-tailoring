<script setup lang="ts">
import { inject } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import type { Service } from '@/types/Service'

interface Props {
  service: Service
}

defineProps<Props>()

const navigateHome = inject<() => void>('navigateHome')

const goBack = () => navigateHome?.()
const scrollToContact = () =>
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
const scrollToDetails = () =>
  document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <section
    class="service-hero d-flex align-items-center text-white position-relative overflow-hidden"
  >
    <div class="hero-bg position-absolute w-100 h-100">
      <img
        :src="service.imageUrl"
        :alt="service.title"
        class="hero-bg-img w-100 h-100"
      />
      <div class="hero-overlay position-absolute w-100 h-100"></div>
    </div>

    <div class="hero-accent position-absolute"></div>

    <div class="container position-relative" style="z-index: 2">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <nav aria-label="breadcrumb" class="mb-4">
            <ol class="breadcrumb breadcrumb-custom mb-0">
              <li class="breadcrumb-item">
                <a href="#" class="text-white-75 text-decoration-none" @click.prevent="goBack">
                  <i class="bi bi-house me-1"></i>Home
                </a>
              </li>
              <li class="breadcrumb-item">
                <a href="#" class="text-white-75 text-decoration-none" @click.prevent="goBack"
                  >Services</a
                >
              </li>
              <li class="breadcrumb-item active text-white" aria-current="page">
                {{ service.title }}
              </li>
            </ol>
          </nav>

          <h1 class="display-3 fw-bold mb-4 hero-title">{{ service.title }}</h1>
          <p class="lead fs-5 mb-5 hero-subtitle">{{ service.description }}</p>

          <div class="d-flex flex-wrap gap-3">
            <BaseButton size="lg" @click="scrollToContact"> Contact Us </BaseButton>
            <button class="btn btn-outline-light btn-lg" @click="scrollToDetails">
              <i class="bi bi-info-circle me-2"></i>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-hero {
  min-height: 680px;
  padding: 6rem 0 8rem;
}

.hero-bg {
  top: 0;
  left: 0;
}

.hero-bg-img {
  object-fit: cover;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}

.hero-accent {
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(135deg, transparent 0%, rgba(231, 76, 60, 0.15) 100%);
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 1;
}

.hero-title {
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}
.hero-subtitle {
  opacity: 0.9;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
}

.breadcrumb-custom {
  background: none;
  padding: 0;
}
.breadcrumb-custom .breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.text-white-75 {
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.2s;
}
.text-white-75:hover {
  color: white;
}

.stats-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.stat-item + .stat-item {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
  .service-hero {
    min-height: auto;
    padding: 5rem 0 6rem;
  }
  .hero-accent {
    display: none;
  }
}
</style>
