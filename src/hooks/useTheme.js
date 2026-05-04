import { useState, useEffect } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('cb-theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
      root.classList.remove('light')
    }

    try {
      localStorage.setItem('cb-theme', theme)
    } catch {
      // no-op
    }
  }, [theme])

  return { theme, toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) }
}
