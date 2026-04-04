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
    </div>
  </section>
</template>

<script setup lang="ts">
import { contactInfo } from '@/data/contactInfo'

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
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
