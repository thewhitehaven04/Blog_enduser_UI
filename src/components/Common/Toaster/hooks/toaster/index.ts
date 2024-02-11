import { ToasterContext } from 'Hooks/context/toaster'
import type { IToastInstance } from 'Hooks/context/toaster/types'
import { useContext } from 'react'

export function useToaster(): {
  queue: IToastInstance[]
  dismissToast: (toast: IToastInstance) => void
} {
  const toasterContext = useContext(ToasterContext)
  if (toasterContext !== null) {
    return toasterContext
  }

  throw Error('useToaster must be called within ToasterContextProvider')
}