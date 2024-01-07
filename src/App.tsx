import { createRoot } from 'react-dom/client'
import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { AppRouter } from 'Router/index'
import { GlobalStyles } from 'Components/Common/Styles/global'
import '@fontsource/lato'
import '@fontsource-variable/roboto-serif'
import { UserContextProvider } from 'Components/ContextProviders/UserContext'
import { queryClient } from 'Client/query'

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <AppRouter />
        </UserContextProvider>
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
