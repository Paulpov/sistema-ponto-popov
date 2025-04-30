import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Cadastro from '../pages/Cadastro.vue'
import Dashboard from '../pages/Dashboard.vue'
import Admin from '../pages/Admin.vue'
import Motorista from '../pages/Motorista.vue'
import Funcionario from '../pages/Funcionario.vue'
import FechamentoPJ from '../pages/FechamentoPJ.vue'
import AcessoNegado from '../pages/AcessoNegado.vue' // (🆕 criar se necessário)

import { useUserStore } from '../store/user'

const routes = [
  { path: '/', component: Login },
  { path: '/cadastro', component: Cadastro },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/admin', component: Admin, meta: { requiresAuth: true, roles: ['admin'] } },
  { path: '/motorista', component: Motorista, meta: { requiresAuth: true, roles: ['motorista'] } },
  { path: '/funcionario', component: Funcionario, meta: { requiresAuth: true, roles: ['escritorio'] } },
  { path: '/fechamento', component: FechamentoPJ, meta: { requiresAuth: true, roles: ['admin', 'escritorio'] } },
  { path: '/acesso-negado', component: AcessoNegado },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()

  const isAuthenticated = !!store.token
  const allowedRoles = to.meta.roles
  const requiresAuth = to.meta.requiresAuth

  if (requiresAuth && !isAuthenticated) {
    return next('/')
  }

  if (allowedRoles && !allowedRoles.includes(store.papel)) {
    return next('/acesso-negado')
  }

  next()
})

export default router
