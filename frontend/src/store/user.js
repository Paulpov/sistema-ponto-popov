import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    nome: '',
    email: '',
    papel: '', // 'admin' | 'motorista' | 'escritorio'
    token: '',
    id: ''
  }),
  actions: {
    setUser(data) {
      this.nome = data.nome
      this.email = data.email
      this.papel = data.papel
      this.token = data.token || ''
      this.id = data.id || ''
    },
    logout() {
      this.nome = ''
      this.email = ''
      this.papel = ''
      this.token = ''
      this.id = ''
    }
  }
})
