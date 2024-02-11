import { ToasterContextEnqueue } from 'Hooks/context/toaster'
import type { IToastInstance } from 'Hooks/context/toaster/types'
import { useContext } from 'react'


export function useToasterEnqueue(): {
  toast: (toast: IToastInstance) => void
} {
  const toasterEnqueueContext = useContext(ToasterContextEnqueue)
  if (toasterEnqueueContext != null) {
    return toasterEnqueueContext
  }

  throw Error('useToasterEnqueue must be called within ToasterContextProvider')
}
