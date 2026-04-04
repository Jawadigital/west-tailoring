import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ServiceDetailPage from '@/views/ServiceDetailPage.vue'

function slowScrollToTop() {
  const start = window.scrollY
  const duration = 800
  const startTime = performance.now()

  function animate(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    window.scrollTo(0, start * (1 - ease))
    if (progress < 1) requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/service/:id', component: ServiceDetailPage },
  ],
  scrollBehavior() {
    if (history.state?.skipScroll) return false
    slowScrollToTop()
    return false
  },
})

export default router
