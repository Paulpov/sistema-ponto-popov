<template>
  <div class="flex h-screen">
    <div class="hidden md:block w-1/2 bg-cover bg-center" style="background-image: url('/src/assets/images/logistica.jpg')"></div>
    <div class="w-full md:w-1/2 flex items-center justify-center bg-white dark:bg-gray-900">
      <div class="max-w-md w-full p-8">
        <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Criar Conta</h2>
        <form class="space-y-4">
          <div class="flex gap-2">
            <input class="w-1/2 border p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white" placeholder="Nome" />
            <input class="w-1/2 border p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white" placeholder="Sobrenome" />
          </div>
          <input class="w-full border p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white" placeholder="Email" />
          <input class="w-full border p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white" placeholder="Senha" type="password" />
          <select class="w-full border p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
            <option>Selecione o tipo</option>
            <option>Motorista</option>
            <option>Funcionário Escritório</option>
            <option>Administrador</option>
          </select>
          <button class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full">Cadastrar</button>
        </form>
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-4">
          Já tem uma conta?
          <router-link to="/" class="text-red-600 dark:text-red-400 font-semibold hover:underline">Entrar</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
