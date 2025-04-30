<template>
  <div
    class="max-w-md w-full p-8 mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
  >
    <h2 class="text-2xl font-bold mb-6">Criar Conta</h2>
    <form class="space-y-4" @submit.prevent="cadastrar">
      <div class="grid grid-cols-2 gap-2">
        <input
          v-model="nome"
          placeholder="Nome"
          class="p-3 rounded border bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        />
        <input
          v-model="sobrenome"
          placeholder="Sobrenome"
          class="p-3 rounded border bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        />
      </div>
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full p-3 rounded border bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      />
      <input
        v-model="senha"
        type="password"
        placeholder="Senha"
        class="w-full p-3 rounded border bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      />
      <input
        v-model="cpf"
        placeholder="CPF"
        class="w-full p-3 rounded border bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        @blur="validarCPF"
      />
      <p v-if="cpfErro" class="text-red-600 text-sm">CPF inválido</p>
      <select
        v-model="tipo"
        class="w-full p-3 rounded border bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      >
        <option disabled value="">Selecione o tipo</option>
        <option value="admin">Administrador</option>
        <option value="motorista">Motorista</option>
        <option value="funcionario">Funcionário</option>
      </select>

      <button
        class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full"
      >
        Cadastrar
      </button>

      <!-- Mensagem de erro -->
      <div
        v-if="erro"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-center text-sm font-semibold"
      >
        {{ erro }}
      </div>
    </form>
    <p class="text-sm text-gray-600 dark:text-gray-300 mt-4">
      Já tem uma conta?
      <router-link to="/" class="text-red-600 font-semibold hover:underline"
        >Entrar</router-link
      >
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "../store";
import api from "../axios";
import { useTheme } from "../composables/useTheme";

useTheme();

const nome = ref("");
const sobrenome = ref("");
const email = ref("");
const senha = ref("");
const tipo = ref("");
const cpf = ref("");
const cpfErro = ref(false);
const erro = ref("");
const router = useRouter();
const store = useMainStore();

function validarCPF() {
  const cpfValue = cpf.value.replace(/[^0-9]/g, "");
  if (cpfValue.length !== 11 || /^(\d)\1+$/.test(cpfValue)) {
    cpfErro.value = true;
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpfValue.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfValue.charAt(9))) {
    cpfErro.value = true;
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpfValue.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfValue.charAt(10))) {
    cpfErro.value = true;
    return false;
  }

  cpfErro.value = false;
  return true;
}

async function cadastrar() {
  erro.value = "";

  if (!validarCPF()) {
    erro.value = "CPF inválido.";
    return;
  }

  try {
    const res = await api.post("/cadastro", {
      nome: nome.value,
      sobrenome: sobrenome.value,
      email: email.value,
      senha: senha.value,
      cpf: cpf.value,
      papel: tipo.value,
    });

    const user = res.data;
    localStorage.setItem("token", user.token);

    store.login({
      nome: user.nome,
      email: user.email,
      tipo: user.papel,
      id: user.id,
      token: user.token,
    });

    router.push("/dashboard");
  } catch (err) {
    erro.value = "Erro ao cadastrar usuário. Verifique os dados.";
  }
}
</script>


