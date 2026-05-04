import { useEffect, useState } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('cb-theme') || 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('cb-theme', theme)
  }, [theme])

  return { theme, toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) }
}
