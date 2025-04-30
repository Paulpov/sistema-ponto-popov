import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    user: null
  }),
  actions: {
    login(userData) {
      this.user = userData
    },
    logout() {
      this.user = null
      localStorage.removeItem('token')
    }
  }
})
