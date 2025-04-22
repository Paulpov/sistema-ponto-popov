<template>
  <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
    <h2 class="text-2xl font-bold mb-4">Registro de Ponto (Funcionário)</h2>

    <div class="mb-6">
      <button
        :disabled="registros.length >= tipos.length"
        @click="registrarProximo"
        class="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition disabled:opacity-50"
      >
        Registrar {{ proximoTipo || 'Ponto Completo' }}
      </button>
    </div>

    <table class="w-full text-sm bg-white dark:bg-gray-800 rounded">
      <thead>
        <tr class="text-left border-b dark:border-gray-700">
          <th class="py-2 px-4">Data</th>
          <th class="py-2 px-4">Hora</th>
          <th class="py-2 px-4">Tipo</th>
          <th class="py-2 px-4">Ajustar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ponto, i) in registros" :key="i" class="border-b dark:border-gray-700">
          <td class="py-2 px-4">{{ ponto.data }}</td>
          <td class="py-2 px-4">{{ ponto.hora }}</td>
          <td class="py-2 px-4">{{ ponto.tipo }}</td>
          <td class="py-2 px-4">
            <button @click="abrirAjuste(i)" class="text-blue-600 hover:underline">Ajustar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Popup de ajuste -->
    <div v-if="ajusteVisivel" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
      <div class="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-96">
        <h3 class="font-bold text-lg mb-4">Solicitar Ajuste</h3>
        <label class="block mb-2">Novo Horário:</label>
        <input v-model="novoHorario" type="time" class="w-full p-2 rounded border mb-4" />
        <label class="block mb-2">Justificativa:</label>
        <textarea v-model="justificativa" rows="3" class="w-full p-2 rounded border mb-4"></textarea>
        <div class="flex justify-end gap-4">
          <button @click="fecharPopup" class="text-gray-500">Cancelar</button>
          <button @click="enviarAjuste" class="bg-green-600 text-white px-4 py-2 rounded">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const tipos = ['Entrada', 'Saída Almoço', 'Volta Almoço', 'Saída Final']
const registros = ref([])

const proximoTipo = computed(() => tipos[registros.value.length] || null)

function registrarProximo() {
  if (registros.value.length >= tipos.length) return
  const agora = new Date()
  registros.value.push({
    tipo: tipos[registros.value.length],
    data: agora.toLocaleDateString(),
    hora: agora.toLocaleTimeString()
  })
}

const ajusteVisivel = ref(false)
const ajusteIndex = ref(null)
const novoHorario = ref('')
const justificativa = ref('')

function abrirAjuste(i) {
  ajusteIndex.value = i
  ajusteVisivel.value = true
}

function fecharPopup() {
  ajusteVisivel.value = false
  novoHorario.value = ''
  justificativa.value = ''
}

function enviarAjuste() {
  alert(`Ajuste solicitado para ${registros.value[ajusteIndex.value].tipo} às ${novoHorario.value}.\nMotivo: ${justificativa.value}`)
  fecharPopup()
}
import { useTheme } from '../composables/useTheme'
useTheme() // aplica o tema ao montar
</script>
