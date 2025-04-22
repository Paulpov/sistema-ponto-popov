<template>
  <header
    class="flex justify-between items-center px-6 py-3 bg-white dark:bg-gray-800 shadow-md"
  >
    <div class="flex items-center gap-3">
      <img
        src="/src/assets/images/LOGO POPOV HORUS.png"
        alt="Popov Logo"
        class="h-8 w-auto"
      />
      <h1 class="text-xl font-bold text-gray-800 dark:text-white">
        Popov Hórus
      </h1>
    </div>
    <div class="flex items-center gap-4">
      <button @click="toggleTheme">
        {{ isDark ? "🌞" : "🌙" }}
      </button>

      <div v-if="user" class="flex items-center gap-2">
        <span class="text-gray-700 dark:text-gray-200"
          >Olá, {{ user.nome }}</span
        >
        <button @click="logout" class="text-sm text-red-500 hover:underline">
          Sair
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useMainStore } from "../store";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "../composables/useTheme";

const store = useMainStore();
const router = useRouter();
const user = computed(() => store.user);

const { isDark, toggleTheme } = useTheme();

function logout() {
  store.logout();
  router.push("/");
}
</script>

