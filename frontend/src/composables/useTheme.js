import { ref, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {
  function applyTheme(dark) {
    isDark.value = dark
    const html = document.querySelector('html')
    html.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  function toggleTheme() {
    applyTheme(!isDark.value)
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = saved === 'dark'
    applyTheme(prefersDark)
  })

  return { isDark, toggleTheme }
}
