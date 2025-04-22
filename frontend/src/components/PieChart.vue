<template>
  <div class="w-full">
    <canvas ref="pieCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  labels: Array,
  values: Array
})

const pieCanvas = ref(null)

onMounted(() => {
  new Chart(pieCanvas.value, {
    type: 'pie',
    data: {
      labels: props.labels,
      datasets: [{
        data: props.values,
        backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6']
      }]
    },
    options: {
      responsive: true
    }
  })
})
</script>
