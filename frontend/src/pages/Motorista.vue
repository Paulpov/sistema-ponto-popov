<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Controle de Jornada (Motorista)</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      <button v-for="tipo in macros" :key="tipo" @click="registrarMacro(tipo)"
        class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
        {{ tipo }}
      </button>
    </div>

    <div class="h-64 w-full mb-4">
      <iframe
        width="100%" height="100%" style="border:0"
        loading="lazy" allowfullscreen
        :src="mapaURL"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    <table class="w-full text-sm bg-white dark:bg-gray-800 rounded">
      <thead>
        <tr class="text-left border-b dark:border-gray-700">
          <th class="py-2 px-4">Data</th>
          <th class="py-2 px-4">Hora</th>
          <th class="py-2 px-4">Local</th>
          <th class="py-2 px-4">Macro</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(macro, i) in jornada" :key="i" class="border-b dark:border-gray-700">
          <td class="py-2 px-4">{{ macro.data }}</td>
          <td class="py-2 px-4">{{ macro.hora }}</td>
          <td class="py-2 px-4">{{ macro.local }}</td>
          <td class="py-2 px-4">{{ macro.tipo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const macros = ['Em Rota', 'Descanso', 'Chegada no Cliente', 'Fim da Descarga', 'Aguardando', 'Em Direção']
const jornada = ref([])

const mapaURL = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDROTA-FakeKeyOnlyParaExemplo&q=Rolandia,PR'

function registrarMacro(tipo) {
  const agora = new Date()
  jornada.value.push({
    tipo,
    data: agora.toLocaleDateString(),
    hora: agora.toLocaleTimeString(),
    local: 'Rolândia, PR'
  })
}
</script>
