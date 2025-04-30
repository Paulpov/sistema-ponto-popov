<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
