<template>
  <div class="w-full">
    <canvas ref="barCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  labels: Array,
  values: Array
})

const barCanvas = ref(null)

onMounted(() => {
  new Chart(barCanvas.value, {
    type: 'bar',
    data: {
      labels: props.labels,
      datasets: [{
        label: 'Total por Funcionário',
        data: props.values,
        backgroundColor: ['#3b82f6', '#10b981', '#facc15']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
})
</script>
