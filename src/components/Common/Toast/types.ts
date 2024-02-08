import type { EToastType } from 'Hooks/context/toaster/types'

export interface IToastProps {
  type: EToastType
  text: string
}