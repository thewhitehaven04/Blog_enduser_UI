import { type IToastInstance } from './types'
import { createContext, useState, type PropsWithChildren } from 'react'

export const ToasterContext = createContext<IToastInstance[]>([])
export const ToasterContextEnqueue = createContext<{
  enqueueToast: (toast: IToastInstance) => void
} | null>(null)
const TOAST_TIMEOUT = 5000

export function ToasterContextProvider({
  children
}: PropsWithChildren): JSX.Element {
  const [queue, setQueue] = useState<IToastInstance[]>([])

  const enqueueToast = (toast: IToastInstance): void => {
    setQueue([...queue, toast])

    setTimeout(() => {
      setQueue((queue) => queue.filter((_toast) => _toast !== toast))
    }, TOAST_TIMEOUT)
  }

  return (
    <ToasterContext.Provider value={queue}>
      <ToasterContextEnqueue.Provider value={{ enqueueToast }}>
        {children}
      </ToasterContextEnqueue.Provider>
    </ToasterContext.Provider>
  )
}
