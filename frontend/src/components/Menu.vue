<template>
    <nav>
      <ul>
        <li><RouterLink to="/home">🏠 Início</RouterLink></li>
        <li v-if="user.papel !== 'motorista'"><RouterLink to="/importar-cte">📂 Importar CT-e</RouterLink></li>
        <li v-if="user.papel === 'admin'"><RouterLink to="/usuarios">⚙️ Gestão de Usuários</RouterLink></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { useUserStore } from '@/stores/user'
  const user = useUserStore()
  </script>
  