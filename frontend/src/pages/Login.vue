<template>
  <div
    class="flex h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
  >
    <div
      class="hidden md:block w-1/2 bg-cover bg-center"
      style="background-image: url('/src/assets/images/background.png')"
    ></div>
    <div
      class="w-full md:w-1/2 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div class="max-w-md w-full p-8">
        <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Entrar
        </h2>
        <form class="space-y-4">
          <input
            class="w-full border p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            placeholder="Email"
          />
          <input
            class="w-full border p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            placeholder="Senha"
            type="password"
          />

          <!-- Botão correto com ação de login -->
          <button
            @click.prevent="fakeLogin"
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Entrar
          </button>
        </form>
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-4">
          Ainda não tem uma conta?
          <router-link
            to="/cadastro"
            class="text-blue-700 dark:text-blue-400 font-semibold hover:underline"
            >Criar agora</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "../store";
import { useRouter } from "vue-router";

const store = useMainStore();
const router = useRouter();

function fakeLogin() {
  const user = {
    nome: "Usuário Teste",
    tipo: "admin",
  };
  store.login(user);
  router.push("/dashboard");
}
import { useTheme } from "../composables/useTheme";
useTheme(); // aplica o tema ao montar
</script>
