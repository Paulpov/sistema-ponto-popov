import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Cadastro from '../pages/Cadastro.vue'
import Dashboard from '../pages/Dashboard.vue'
import Admin from '../pages/Admin.vue'
import Motorista from '../pages/Motorista.vue'
import Funcionario from '../pages/Funcionario.vue'
import FechamentoPJ from '../pages/FechamentoPJ.vue'
import { useMainStore } from '../store'

const routes = [
  { path: '/', component: Login },
  { path: '/cadastro', component: Cadastro },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/admin', component: Admin },
  { path: '/motorista', component: Motorista },
  { path: '/funcionario', component: Funcionario },
  { path: '/fechamento', component: FechamentoPJ }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useMainStore()
  if (to.meta.requiresAuth && !store.user) {
    next('/')
  } else {
    next()
  }
})

export default router
