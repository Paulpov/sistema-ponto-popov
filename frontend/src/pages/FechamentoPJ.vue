<template>
  <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
    <h2 class="text-2xl font-bold mb-6">Fechamento PJ</h2>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      Gere relatórios mensais com ou sem comissão e exporte como PDF.
    </p>

    <div class="grid gap-4">
      <input
        type="text"
        v-model="nome"
        placeholder="Nome da Empresa/Prestador"
        class="w-full p-2 rounded border bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      />

      <input
        type="number"
        v-model.number="bruto"
        placeholder="Faturamento Bruto (R$)"
        class="w-full p-2 rounded border bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      />

      <select
        v-model="comissao"
        class="w-full p-2 rounded border bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      >
        <option value="0">Sem comissão</option>
        <option value="0.10">Comissão 10%</option>
        <option value="0.15">Comissão 15%</option>
      </select>

      <div class="text-right text-lg font-semibold text-gray-700 dark:text-white">
        Valor líquido: R$ {{ liquido.toFixed(2) }}
      </div>

      <button
        class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        @click="gerarPDF"
      >
        📄 Gerar PDF
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { gerarPDFPJMock } from '../utils/pdfGenerator'

const nome = ref('')
const bruto = ref(0)
const comissao = ref(0)
const liquido = computed(() => bruto.value - (bruto.value * parseFloat(comissao.value)))

function gerarPDF() {
  gerarPDFPJMock(nome.value || 'Prestador PJ', bruto.value, parseFloat(comissao.value), liquido.value)
}
import { useTheme } from '../composables/useTheme'
useTheme() // aplica o tema ao montar
</script>
