
<template>
  <div v-if="user" class="p-6">
    <h1 class="text-2xl font-bold mb-4">Painel de Controle</h1>

    <div v-if="user.tipo === 'admin'">
      <h2 class="text-xl font-semibold text-blue-500">Área Administrativa</h2>
      <p>Aqui você vê os dados do sistema, relatórios, gestão de usuários etc.</p>
    </div>

    <div v-else-if="user.tipo === 'motorista'">
      <h2 class="text-xl font-semibold text-green-500">Área do Motorista</h2>
      <p>Visualize macros, entregas, status de viagem e ocorrências.</p>
    </div>

    <div v-else-if="user.tipo === 'funcionario'">
      <h2 class="text-xl font-semibold text-yellow-500">Área do Escritório</h2>
      <p>Controle de CT-es, lançamentos, digitalizações e documentos.</p>
    </div>

    <div v-else>
      <p class="text-red-500 font-semibold">Tipo de usuário desconhecido.</p>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "../store"
import { useRouter } from "vue-router"
import { watchEffect } from "vue"

const store = useMainStore()
const router = useRouter()

watchEffect(() => {
  if (!store.user || !store.user.tipo) {
    router.push("/")
  }
})
</script>

