<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import StickyCallButton from '@/components/common/StickyCallButton.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
  <StickyCallButton />
</template>

<style scoped></style>
