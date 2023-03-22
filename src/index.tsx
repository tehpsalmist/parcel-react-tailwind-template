import { Button } from '@8thday/button'
import React from 'react'
import { createRoot } from 'react-dom/client'

export const App = () => {
  return (
    <main className="h-screen flex-center">
      Hello World!
      <Button onClick={(e) => console.log(e)}>Click me!</Button>
    </main>
  )
}

const root = createRoot(document.getElementById('app')!)

root.render(<App />)
