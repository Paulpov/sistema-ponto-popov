<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <Sidebar />
    <div class="flex-1 p-4">
      <Header />
      <slot />
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
</script>
