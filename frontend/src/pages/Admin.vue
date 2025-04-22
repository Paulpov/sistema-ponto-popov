<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Dashboard</h2>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in items"
        :key="item.title"
        @click="router.push(item.route)"
        class="p-6 rounded shadow bg-white dark:bg-gray-800 text-center hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
        :title="item.desc"
      >
        <div class="text-4xl mb-2">{{ item.emoji }}</div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-sm text-gray-500">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const items = [
  {
    emoji: '🕓',
    title: 'Controle de Ponto',
    desc: 'Registro de entrada e saída',
    route: '/funcionario'
  },
  {
    emoji: '🛣️',
    title: 'Controle de Rotas e Jornada',
    desc: 'Visualização e análise das rotas',
    route: '/motorista'
  },
  {
    emoji: '📊',
    title: 'Fechamento PJ',
    desc: 'Relatórios e PDFs dos prestadores',
    route: '/fechamento'
  }
]
</script>
