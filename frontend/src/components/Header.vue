<template>
  <header class="flex justify-between items-center px-6 py-3 bg-white dark:bg-gray-800 shadow-md">
    <h1 class="text-xl font-bold text-gray-800 dark:text-white">Popov Hórus</h1>
    <div class="flex items-center gap-4">
      <button @click="toggleTheme" class="text-lg" :title="isDark ? 'Tema Claro' : 'Tema Escuro'">
        {{ isDark ? '🌞' : '🌙' }}
      </button>
      <div v-if="user" class="flex items-center gap-2">
        <span class="text-gray-700 dark:text-gray-200">Olá, {{ user.nome }}</span>
        <button @click="logout" class="text-sm text-red-500 hover:underline">Sair</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useMainStore } from '../store'
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const store = useMainStore()
const router = useRouter()
const user = computed(() => store.user)

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved === 'dark'
  document.documentElement.classList.toggle('dark', isDark.value)
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function logout() {
  store.logout()
  router.push('/')
}
</script>
