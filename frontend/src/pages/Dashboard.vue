<template>
  <div class="flex justify-center items-center h-screen text-gray-700 dark:text-gray-200">
    Redirecionando para seu painel...
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useMainStore } from '../store'
import { onMounted } from 'vue'

const router = useRouter()
const store = useMainStore()

onMounted(() => {
  const user = store.user

  if (!user) {
    router.push('/')
  } else if (user.tipo === 'admin') {
    router.push('/admin')
  } else if (user.tipo === 'motorista') {
    router.push('/motorista')
  } else {
    router.push('/funcionario')
  }
})
</script>
j