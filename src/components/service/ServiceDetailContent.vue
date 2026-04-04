<script setup lang="ts">
import { computed } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import type { Service } from '@/types/Service'

interface Props {
  service: Service
}

const props = defineProps<Props>()

const paragraphs = computed(() =>
  (props.service.detailText ?? props.service.description)
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean),
)
</script>

<template>
  <div id="service-details" style="overflow-x: hidden">
    <!-- About This Service -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row align-items-start g-5">
          <div class="col-lg-7">
            <span class="section-label">About This Service</span>
            <h2 class="display-5 fw-bold text-primary-custom mt-3 mb-4">{{ service.title }}</h2>
            <div class="detail-text">
              <p
                v-for="(paragraph, index) in paragraphs"
                :key="index"
                class="text-muted mb-4"
                :class="{ lead: index === 0 }"
              >
                {{ paragraph }}
              </p>
            </div>
            <div class="d-flex flex-wrap gap-3 mt-4">
              <a href="tel:+15551234567" class="btn btn-outline-secondary">
                <i class="bi bi-telephone me-2"></i>
                Call Us
              </a>
            </div>
          </div>

          <!-- What's Included sidebar -->
          <div class="col-lg-5">
            <div class="includes-card p-4 rounded-4 shadow-sm" v-if="service.includes?.length">
              <h5 class="fw-bold mb-4 d-flex align-items-center gap-2">
                <span class="includes-icon"><i class="bi bi-check-circle-fill"></i></span>
                What's Included
              </h5>
              <ul class="list-unstyled mb-0">
                <li
                  v-for="item in service.includes"
                  :key="String(item)"
                  class="d-flex align-items-start gap-3 mb-3"
                >
                  <i class="bi bi-check2 text-success mt-1 fw-bold flex-shrink-0"></i>
                  <span class="text-muted">{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Floating highlight -->
            <div class="highlight-card mt-4 p-4 rounded-4 d-flex align-items-center gap-3">
              <div class="highlight-icon flex-shrink-0">
                <i class="bi bi-shield-check text-white fs-4"></i>
              </div>
              <div>
                <div class="fw-bold text-white">100% Satisfaction Guaranteed</div>
                <div class="text-white-50 small">We get it right — or we make it right.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="section-padding bg-light-custom" v-if="service.processSteps?.length">
      <div class="container">
        <SectionHeader
          title="Our Process"
          subtitle="Simple, transparent, and stress-free from start to finish"
        />

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div v-for="(step, index) in service.processSteps" :key="step.step" class="col">
            <div class="process-card h-100 p-4 rounded-4 bg-white shadow-sm card-hover">
              <div class="process-number mb-3">{{ String(index + 1).padStart(2, '0') }}</div>
              <h5 class="fw-bold mb-2">{{ step.step }}</h5>
              <p class="text-muted mb-0 small">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-label {
  display: inline-block;
  background: rgba(231, 76, 60, 0.1);
  color: var(--secondary-color);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
}

.detail-text p {
  line-height: 1.85;
  font-size: 1rem;
}

/* Includes card */
.includes-card {
  background: var(--bg-secondary);
  border: 2px dashed rgba(204, 34, 34, 0.25);
  color: var(--primary-color);
}

.includes-icon {
  color: var(--secondary-color);
  font-size: 1.2rem;
}

/* Highlight card */
.highlight-card {
  background: linear-gradient(260deg, var(--accent-hover), var(--secondary-color));
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.2);
}

.highlight-icon {
  width: 52px;
  height: 52px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Process cards */
.process-number {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  color: var(--secondary-color);
}

.process-card {
  background: #ffffff !important;
  border: 1px solid var(--border-subtle);
  transition: border-color 0.3s, border-style 0.3s;
  color: var(--primary-color);
}

.process-card:hover {
  border-color: var(--secondary-color);
}

.process-card:hover .process-number {
  opacity: 1.2;
}
</style>
