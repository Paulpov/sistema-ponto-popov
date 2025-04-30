<template>
  <div class="flex h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
    <div class="hidden md:block w-1/2 bg-cover bg-center" style="background-image: url('/src/assets/images/background.png')"></div>
    <div class="w-full md:w-1/2 flex items-center justify-center">
      <div class="max-w-md w-full p-8">
        <h2 class="text-3xl font-bold mb-6">Entrar</h2>
        <form class="space-y-4" @submit.prevent="realLogin">
          <input v-model="form.email" class="w-full border p-3 rounded bg-gray-100 dark:bg-gray-800" placeholder="Email" />
          <input v-model="form.senha" type="password" class="w-full border p-3 rounded bg-gray-100 dark:bg-gray-800" placeholder="Senha" />

          <div v-if="erro" class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-center text-sm font-semibold">
            {{ erro }}
          </div>

          <button type="submit" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">Entrar</button>
        </form>
        <p class="text-sm text-gray-600 mt-4">
          Ainda não tem uma conta?
          <router-link to="/cadastro" class="text-blue-700 font-semibold hover:underline">Criar agora</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from '../store'
import api from '../axios'

const store = useMainStore()
const router = useRouter()

const form = reactive({ email: '', senha: '' })
const erro = ref('')

async function realLogin() {
  erro.value = ""

  try {
    const response = await api.post('/login', {
      email: form.email,
      senha: form.senha
    })

    const user = response.data
    localStorage.setItem("token", user.token)

    store.login({
      nome: user.nome,
      email: user.email,
      tipo: user.papel,
      token: user.token,
      id: user.id
    })

    console.log("🔁 Redirecionando para /dashboard")
    router.push('/dashboard')
  } catch (err) {
    erro.value = "Email ou senha inválidos"
  }
}
</script>
