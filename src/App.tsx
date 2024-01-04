import { createRoot } from 'react-dom/client'
import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { qc } from 'Client/query/index'
import { AppRouter } from 'Router/index'

export function App(): JSX.Element {
  return (
    <QueryClientProvider client={qc}>
      <AppRouter />
    </QueryClientProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)