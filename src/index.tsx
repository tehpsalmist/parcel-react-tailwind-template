import React from 'react'
import { createRoot } from 'react-dom/client'

export const App = () => {
  return <main className="h-screen flex-center">Hello World!</main>
}

const root = createRoot(document.getElementById('app')!)

root.render(<App />)
