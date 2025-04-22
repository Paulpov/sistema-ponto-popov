import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Cadastro from '../pages/Cadastro.vue'
import Dashboard from '../pages/Dashboard.vue'
import Admin from '../pages/Admin.vue'
import Motorista from '../pages/Motorista.vue'
import Funcionario from '../pages/Funcionario.vue'
import FechamentoPJ from '../pages/FechamentoPJ.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/cadastro', component: Cadastro },
  { path: '/dashboard', component: Dashboard },
  { path: '/admin', component: Admin },
  { path: '/motorista', component: Motorista },
  { path: '/funcionario', component: Funcionario },
  { path: '/fechamento', component: FechamentoPJ }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
