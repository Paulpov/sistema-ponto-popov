<template>
  <div class="flex h-screen">
    <div class="w-1/2 bg-cover bg-center hidden md:block" style="background-image: url('/src/assets/images/logistica.jpg')"></div>
    <div class="w-full md:w-1/2 flex items-center justify-center bg-white dark:bg-gray-900">
      <div class="max-w-md w-full p-8">
        <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Entrar</h2>
        <form class="space-y-4">
          <input class="w-full border p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white" placeholder="Email" />
          <input class="w-full border p-3 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white" placeholder="Senha" type="password" />
          <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">Entrar</button>
        </form>
      </div>
    </div>
  </div>
</template>
