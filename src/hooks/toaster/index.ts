import { ToasterContext, ToasterContextEnqueue } from 'Hooks/context/toaster'
import type { IToastInstance } from 'Hooks/context/toaster/types'
import { useContext } from 'react'

export function useToaster(): IToastInstance[] {
  const toasterContext = useContext(ToasterContext)
  if (toasterContext !== undefined) {
    return toasterContext
  }

  throw Error('useToaster must be called within ToasterContextProvider')
}

export function useToasterEnqueue(): {
  enqueueToast: (toast: IToastInstance) => void
} {
  const toasterEnqueueContext = useContext(ToasterContextEnqueue)
  if (toasterEnqueueContext != null) {
    return toasterEnqueueContext
  }

  throw Error('useToasterEnqueue must be called within ToasterContextProvider')
}
