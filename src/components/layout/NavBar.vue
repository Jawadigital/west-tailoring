<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { Collapse } from 'bootstrap'
import BaseButton from '@/components/common/BaseButton.vue'

const router = useRouter()
const route = useRoute()

const closeMobileMenu = () => {
  const navbarCollapse = document.getElementById('navbarNav')
  if (navbarCollapse?.classList.contains('show')) {
    const bsCollapse = Collapse.getInstance(navbarCollapse) ?? new Collapse(navbarCollapse)
    bsCollapse.hide()
  }
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollTo = (id: string) => {
  closeMobileMenu()
  if (route.path === '/') {
    scrollToSection(id)
  } else {
    router.push('/').then(() => {
      setTimeout(() => scrollToSection(id), 100)
    })
  }
}

const goHome = () => {
  closeMobileMenu()
  router.push('/')
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadowsm sticky-top">
    <div class="container">
      <a class="navbar-brand fw-bold fs-4 text-primary-custom" href="#" @click.prevent="goHome">
        West Tailoring & Alterations
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item">
            <a class="nav-link" href="#home" @click.prevent="scrollTo('home')">Home</a>
          </li>
          <li>
            <a class="nav-link" href="#why-us" @click.prevent="scrollTo('why-us')">Why Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services" @click.prevent="scrollTo('services')">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" @click.prevent="scrollTo('contact')">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--secondary-color) !important;
}
</style>
