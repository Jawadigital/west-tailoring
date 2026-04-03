<script setup lang="ts">
import { computed } from 'vue'
import SocialMediaLinks from '@/components/common/SocialMediaLinks.vue'
import { contactInfo, socialMedia } from '@/data/contactInfo.ts'

const contact = contactInfo
const socialMediaList = socialMedia
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="bg-dark-custom text-white py-5">
    <div class="container">
      <div class="row g-4">
        <!-- Company information -->
        <div class="col-lg-3 col-md-6">
          <h5 class="fw-bold mb-3">West Tailoring</h5>
          <p class="text-white-50">
            Professional tailoring services with over 20 years of experience. Quality craftsmanship
            guaranteed.
          </p>
        </div>

        <!-- Contact information -->
        <div class="col-lg-3 col-md-6">
          <h5 class="fw-bold mb-3">Contact Info</h5>
          <ul class="list-unstyled text-white-50">
            <li class="mb-2">
              <i class="bi bi-telephone me-2"></i>
              {{ contact.phone }}
            </li>
            <li class="mb-2">
              <i class="bi bi-envelope me-2"></i>
              {{ contact.email }}
            </li>
            <li class="mb-2">
              <i class="bi bi-geo-alt me-2"></i>
              {{ contact.address }}
            </li>
            <li class="mb-2">
              <i class="bi bi-clock me-2"></i>
              {{ contact.workingHours }}
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-3 col-md-6">
          <h5 class="fw-bold mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#home" class="text-white-50 text-decoration-none hover-link">Home</a>
            </li>
            <li class="mb-2">
              <a href="#why-us" class="text-white-50 text-decoration-none hover-link">Why Us</a>
            </li>
            <li class="mb-2">
              <a href="#services" class="text-white-50 text-decoration-none hover-link">Services</a>
            </li>
            <li class="mb-2">
              <a href="#reviews" class="text-white-50 text-decoration-none hover-link">Reviews</a>
            </li>
            <li class="mb-2">
              <a href="#contact" class="text-white-50 text-decoration-none hover-link">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="col-lg-3 col-md-6">
          <h5 class="fw-bold mb-3">Follow Us</h5>
          <SocialMediaLinks :social-media-list="socialMediaList" />
        </div>

        <hr class="my-5 bg-white opacity-25" />

        <div class="text-center text-white-25">
          <p class="mb-0">
            &copy; {{ currentYear }} West Tailoring & Alterations. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hover-link {
  transition: color 0.3s ease;
}

.hover-link:hover {
  color: white !important;
}
</style>
