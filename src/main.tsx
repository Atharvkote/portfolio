import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { applyColorTheme, getSavedColorTheme } from './lib/theme'

// Initialize user's chosen accent color theme
applyColorTheme(getSavedColorTheme());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
