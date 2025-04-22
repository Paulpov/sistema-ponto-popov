<template>
  <div :class="{ 'dark': isDark }">
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <Header />
      <main class="p-4">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const storedTheme = localStorage.getItem('theme')
  isDark.value = storedTheme === 'dark'
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>
