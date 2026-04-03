<script setup lang="ts">
import { inject } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'

const navigateHome = inject<() => void>('navigateHome')

const closeMobileMenu = () => {
  const navbarCollapse = document.getElementById('navbarNav')
  if (navbarCollapse?.classList.contains('show')) {
    const bsCollapse = window.bootstrap?.Collapse.getInstance(navbarCollapse)
    bsCollapse?.hide()
  }
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const waitForElement = (id: string, callback: () => void) => {
  const maxAttempts = 40
  let attempts = 0

  const check = () => {
    attempts++
    if (document.getElementById(id)) {
      callback()
    } else if (attempts < maxAttempts) {
      setTimeout(check, 50)
    }
  }

  setTimeout(check, 50)
}

const scrollTo = (id: string) => {
  closeMobileMenu()

  if (document.getElementById(id)) {
    scrollToSection(id)
    return
  }

  if (navigateHome) {
    navigateHome()
    waitForElement(id, () => scrollToSection(id))
  }
}

const goHome = () => {
  closeMobileMenu()
  navigateHome?.()
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
            <a class="nav-link" href="#why-us" @click.prevent="scrollTo('about')">Why Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services" @click.prevent="scrollTo('services')">Services</a>
          </li>
          <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
            <BaseButton @click="scrollTo('contact')">
              Contact Us
            </BaseButton>
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
