import React from 'react'
import { createRoot } from 'react-dom/client'

export const App = () => {
  return <main>Hello World!</main>
}

const root = createRoot(document.getElementById('app')!)

root.render(<App />)
