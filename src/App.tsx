import { createRoot } from 'react-dom/client'
import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { qc } from 'Client/query/index'
import { AppRouter } from 'Router/index'
import { GlobalStyles } from 'Components/Styles/global'
import '@fontsource/lato'
import '@fontsource/merriweather'

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={qc}>
        <AppRouter />
      </QueryClientProvider>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
