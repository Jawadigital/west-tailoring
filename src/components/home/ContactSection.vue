<script setup lang="ts">
import { reactive, ref } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { contactInfo } from '@/data/contactInfo'
import type { ContactFormData } from '@/types/ContactInfo'

const formData = reactive<ContactFormData>({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref<'success' | 'error'>('success')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Success
    submitStatus.value = 'success'
    submitMessage.value = "Thank you! We'll get back to you soon."

    // Reset form
    Object.assign(formData, {
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  } catch (error) {
    submitStatus.value = 'error'
    submitMessage.value = 'Oops! Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
<template>
  <section id="contact" class="section-padding bg-white">
    <div class="container">
      <SectionHeader title="Get In Touch" subtitle="We'd love to hear from you" />

      <div class="row g-5">
        <!-- Contact Information -->
        <div class="col-lg-5">
          <h4 class="fw-bold mb-4">Contact Information</h4>

          <div class="d-flex gap-3 mb-4">
            <div class="flex-shrink-0">
              <i class="bi bi-telephone-fill text-primary fs-4"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-1">Phone</h6>
              <a :href="`tel:${contactInfo.phone}`" class="text-decoration-none text-muted">
                {{ contactInfo.phone }}
              </a>
            </div>
          </div>

          <div class="d-flex gap-3 mb-4">
            <div class="flex-shrink-0">
              <i class="bi bi-envelope-fill text-primary fs-4"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-1">Email</h6>
              <a :href="`mailto:${contactInfo.email}`" class="text-decoration-none text-muted">
                {{ contactInfo.email }}
              </a>
            </div>
          </div>

          <div class="d-flex gap-3 mb-4">
            <div class="flex-shrink-0">
              <i class="bi bi-geo-alt-fill text-primary fs-4"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-1">Address</h6>
              <p class="text-muted mb-0">{{ contactInfo.address }}</p>
            </div>
          </div>

          <div class="d-flex gap-3">
            <div class="flex-shrink-0">
              <i class="bi bi-clock-fill text-primary fs-4"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-1">Working Hours</h6>
              <p class="text-muted mb-0">{{ contactInfo.workingHours }}</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-lg-7">
          <form @submit.prevent="handleSubmit" class="p-4 bg-light-custom rounded">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="name" class="form-label fw-bold">Name *</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="form-control"
                  required
                  placeholder="Your name"
                />
              </div>

              <div class="col-md-6">
                <label for="email" class="form-label fw-bold">Email *</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="form-control"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div class="col-12">
                <label for="phone" class="form-label fw-bold">Phone</label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  class="form-control"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div class="col-12">
                <label for="message" class="form-label fw-bold">Message *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  class="form-control"
                  required
                  rows="5"
                  placeholder="Tell us about your tailoring needs..."
                ></textarea>
              </div>

              <div class="col-12">
                <BaseButton type="submit" size="lg" :disabled="isSubmitting" class="w-100">
                  <span v-if="isSubmitting">
                    <span
                      class="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </span>
                  <span v-else>
                    <i class="bi bi-send me-2"></i>
                    Send Message
                  </span>
                </BaseButton>
              </div>

              <div v-if="submitMessage" class="col-12">
                <div
                  :class="['alert', submitStatus === 'success' ? 'alert-success' : 'alert-danger']"
                  role="alert"
                >
                  <i
                    :class="[
                      'bi',
                      submitStatus === 'success' ? 'bi-check-circle' : 'bi-exclamation-circle',
                      'me-2',
                    ]"
                  ></i>
                  {{ submitMessage }}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
