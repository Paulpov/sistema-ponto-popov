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

const nome = ref("");
const sobrenome = ref("");
const email = ref("");
const senha = ref("");
const tipo = ref("");
const cpf = ref("");
const cpfErro = ref(false);

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

function cadastrar() {
  if (!validarCPF()) {
    alert("CPF inválido.");
    return;
  }
  alert(`Usuário ${nome.value} ${sobrenome.value} cadastrado com sucesso!`);
}
import { useTheme } from "../composables/useTheme";
useTheme(); // aplica o tema ao montar
</script>
