<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import BaseButton from '@/components/common/BaseButton.vue'

const router = useRouter()
const route = useRoute()
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
const closeMobileMenu = () => {
  menuOpen.value = false
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const waitForElement = (id: string, callback: () => void) => {
  let attempts = 0
  const check = () => {
    if (document.getElementById(id)) {
      callback()
    } else if (attempts++ < 20) {
      setTimeout(check, 50)
    }
  }
  setTimeout(check, 50)
}

const scrollTo = (id: string) => {
  closeMobileMenu()
  if (route.path === '/') {
    scrollToSection(id)
  } else {
    router.push({ path: '/', state: { skipScroll: true } }).then(() => {
      waitForElement(id, () => scrollToSection(id))
    })
  }
}

const goHome = () => {
  closeMobileMenu()
  router.push('/')
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container">
      <a class="navbar-brand fw-bold text-primary-custom" href="#" @click.prevent="goHome">
        West Tailoring & Alterations
      </a>

      <button
        class="navbar-toggler"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="navbarNav"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <Transition name="menu">
        <div v-show="menuOpen" class="navbar-collapse" id="navbarNav">
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
      </Transition>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  font-size: 1rem;
}

@media (min-width: 992px) {
  .navbar-brand {
    font-size: 1.25rem;
  }
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--secondary-color) !important;
}

.menu-enter-active,
.menu-leave-active {
  transition: max-height 0.45s ease, opacity 0.45s ease;
  max-height: 400px;
  overflow: hidden;
}

.menu-enter-from,
.menu-leave-to {
  max-height: 0;
  opacity: 0;
}

@media (min-width: 992px) {
  .menu-enter-active,
  .menu-leave-active {
    transition: none;
    max-height: none;
  }
}
</style>
