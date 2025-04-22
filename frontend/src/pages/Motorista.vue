<template>
  <div class="p-4">
    <!-- Botão Voltar -->
    <button
      @click="router.back()"
      class="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition mb-4"
    >
      <span class="text-lg">←</span> Voltar
    </button>

    <h2 class="text-2xl font-bold mb-4">Controle de Jornada (Motorista)</h2>

    <!-- Botões das Macros -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      <button
        v-for="macro in macros"
        :key="macro"
        @click="registrarMacro(macro)"
        class="bg-blue-900 text-white rounded py-2 hover:bg-blue-800 transition"
      >
        {{ macro }}
      </button>
    </div>

    <!-- Mapa com API segura -->
    <div class="w-full h-80 mb-6">
      <iframe
        class="w-full h-full rounded"
        :src="mapUrl"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- Tabela de macros -->
    <table class="w-full text-sm bg-white dark:bg-gray-800 rounded">
      <thead class="bg-gray-100 dark:bg-gray-700">
        <tr>
          <th class="text-left p-2">Data</th>
          <th class="text-left p-2">Hora</th>
          <th class="text-left p-2">Local</th>
          <th class="text-left p-2">Macro</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in registros" :key="i" class="border-t border-gray-200 dark:border-gray-700">
          <td class="p-2">{{ item.data }}</td>
          <td class="p-2">{{ item.hora }}</td>
          <td class="p-2">{{ item.local }}</td>
          <td class="p-2">{{ item.macro }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const macros = ['Em Rota', 'Descanso', 'Aguardando', 'Chegada no Cliente', 'Fim da Descarga', 'Em Direção']

const registros = ref([])

function registrarMacro(macro) {
  const now = new Date()
  registros.value.push({
    data: now.toLocaleDateString(),
    hora: now.toLocaleTimeString(),
    local: 'Rolândia, PR', // exemplo fixo
    macro
  })
}

// Leitura da chave segura do .env
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Rolandia,PR`
</script>
