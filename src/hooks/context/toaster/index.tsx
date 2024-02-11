import { TOAST_TIMEOUT } from 'Hooks/context/toaster/constants'
import { type IToastInstance } from './types'
import {
  createContext,
  useState,
  type PropsWithChildren,
} from 'react'

export const ToasterContext = createContext<{
  queue: IToastInstance[]
  dismissToast: (toast: IToastInstance) => void
} | null>(null)
export const ToasterContextEnqueue = createContext<{
  toast: (toast: IToastInstance) => void
} | null>(null)

export function ToasterContextProvider({
  children
}: PropsWithChildren): JSX.Element {
  const [queue, setQueue] = useState<IToastInstance[]>([])

  const dismissToast = (toast: IToastInstance): void => {
    setQueue((queue) => queue.filter((_toast) => _toast !== toast))
  }

  const toast = (_toast: IToastInstance): void => {
    setQueue((queue) => [...queue, _toast])

    setTimeout(() => {
      dismissToast(_toast)
    }, TOAST_TIMEOUT)
  }

  return (
    <ToasterContext.Provider value={{ queue, dismissToast }}>
      <ToasterContextEnqueue.Provider value={{ toast }}>
        {children}
      </ToasterContextEnqueue.Provider>
    </ToasterContext.Provider>
  )
}
