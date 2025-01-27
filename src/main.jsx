// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './styles/animations.css'  // Animation styles
import './styles/globals.css'     // Global styles

// Optional error monitoring initialization
// import * as Sentry from '@sentry/react'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
