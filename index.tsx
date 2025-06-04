import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Apply global styles
const globalStyle = document.createElement('style')
globalStyle.textContent = `
  html, body, #root {
    height: 100%;
    margin: 0;
    background: #000000;
  }
`
document.head.appendChild(globalStyle)

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} 