<template>
  <header class="flex justify-between items-center px-4 py-2 bg-white dark:bg-gray-800 shadow-md">
    <h1 class="text-xl font-bold text-gray-800 dark:text-white">Sistema de Ponto</h1>
    <div class="flex items-center gap-4">
      <span class="text-gray-700 dark:text-gray-200">Olá, Usuário</span>
      <button @click="logout" class="text-sm text-red-500 hover:underline">Sair</button>
    </div>
  </header>
</template>

<script setup>
function logout() {
  localStorage.clear()
  window.location.href = '/'
}
</script>
