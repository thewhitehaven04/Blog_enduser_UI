import { createRoot } from 'react-dom/client'
import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { AppRouter } from 'Router/index'
import { GlobalStyles } from 'Components/Common/Styles/global'
import { UserContextProvider } from 'Components/ContextProviders/UserContext'
import { queryClient } from 'Client/query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'Components/Common/Toaster'
import { ToasterContextProvider } from 'Hooks/context/toaster'

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <ToasterContextProvider>
            <AppRouter />
            <Toaster />
          </ToasterContextProvider>
        </UserContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
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
