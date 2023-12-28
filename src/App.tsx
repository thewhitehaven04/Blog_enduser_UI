import { createRoot } from 'react-dom/client';
import React from 'react'
import { AppRouter } from 'Router/index';

export function App(): JSX.Element {
  return <AppRouter/>
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App
