<template>
  <div
    class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-6"
  >
    <button
      @click="router.back()"
      class="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition mb-4"
    >
      <span class="text-lg">←</span> Voltar
    </button>

    <!-- Atalhos do Admin -->
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
      <div
        v-for="item in items"
        :key="item.title"
        @click="router.push(item.route)"
        class="p-6 rounded shadow bg-white dark:bg-gray-800 text-center hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
        :title="item.desc"
      >
        <div class="text-4xl mb-2">{{ item.emoji }}</div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-300">{{ item.desc }}</p>
      </div>
    </div>

    <!-- Relatório de Colaboradores -->
    <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-6 shadow">
      <h3 class="text-lg font-semibold mb-4">📋 Status dos Colaboradores</h3>
      <table class="w-full text-sm table-auto">
        <thead class="bg-gray-200 dark:bg-gray-600">
          <tr>
            <th class="py-2 px-4 text-left">Nome</th>
            <th class="py-2 px-4 text-left">Tipo</th>
            <th class="py-2 px-4 text-left">Status</th>
            <th class="py-2 px-4 text-left">Último Registro</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="colab in colaboradores"
            :key="colab.nome"
            class="border-b border-gray-300 dark:border-gray-600"
          >
            <td class="py-2 px-4">{{ colab.nome }}</td>
            <td class="py-2 px-4">{{ colab.tipo }}</td>
            <td class="py-2 px-4">{{ colab.status }}</td>
            <td class="py-2 px-4">{{ colab.horario }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Gráficos -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- PieChart Funcionários -->
      <div class="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h4 class="font-semibold mb-4">📈 Status dos Funcionários</h4>
        <div class="max-w-[300px] mx-auto">
          <PieChart
            :labels="['Entrada', 'Saída Almoço', 'Volta Almoço', 'Saída Final']"
            :values="[5, 2, 3, 4]"
          />
        </div>
      </div>

      <!-- PieChart Motoristas -->
      <div class="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h4 class="font-semibold mb-4">🚚 Status dos Motoristas</h4>
        <div class="max-w-[300px] mx-auto">
          <PieChart
            :labels="['Em Direção', 'Descanso', 'Aguardando']"
            :values="[2, 1, 1]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useTheme } from "../composables/useTheme";
import PieChart from "../components/PieChart.vue";

useTheme();
const router = useRouter();

const items = [
  {
    emoji: "🕓",
    title: "Controle de Ponto",
    desc: "Registro de entrada e saída",
    route: "/funcionario",
  },
  {
    emoji: "🛣️",
    title: "Controle de Rotas e Jornada",
    desc: "Visualização e análise das rotas",
    route: "/motorista",
  },
  {
    emoji: "📊",
    title: "Fechamento PJ",
    desc: "Relatórios e PDFs dos prestadores",
    route: "/fechamento",
  },
];

const colaboradores = [
  {
    nome: "João Paulo",
    tipo: "Funcionário",
    status: "Saída Final",
    horario: "22/04 - 18:10",
  },
  {
    nome: "Ana Costa",
    tipo: "Funcionário",
    status: "Volta Almoço",
    horario: "22/04 - 13:14",
  },
  {
    nome: "Lucas Almeida",
    tipo: "Motorista",
    status: "Em Direção",
    horario: "22/04 - 17:45",
  },
  {
    nome: "Carla Martins",
    tipo: "Motorista",
    status: "Descanso",
    horario: "22/04 - 16:30",
  },
];
</script>
