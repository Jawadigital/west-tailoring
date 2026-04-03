<template>
  <section class="map-section">
    <iframe
      class="map-container"
      :src="`https://maps.google.com/maps?q=${contactInfo.mapCoordinates.latitude},${contactInfo.mapCoordinates.longitude}&z=15&output=embed`"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <div class="map-button-wrapper">
      <button class="btn btn-primary btn-lg" @click="openGoogleMaps">
        <i class="bi bi-map me-2"></i>
        Open in Google Maps
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { contactInfo } from '@/data/contactInfo'

const openGoogleMaps = () => {
  const query = encodeURIComponent(
    'West Tailoring & Alterations, 208 Rodbourne Rd, Swindon SN2 2AA, United Kingdom',
  )
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank')
}
</script>

<style scoped>
.map-section {
  position: relative;
  width: 100%;
  height: 520px;
}

.map-container {
  width: 100%;
  height: 100%;
  border: none;
  z-index: 1;
}

.map-button-wrapper {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
