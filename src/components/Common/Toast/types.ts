import type { IconDefinition } from '@fortawesome/fontawesome-common-types'
import type { IToastInstance } from 'Hooks/context/toaster/types'

export interface IToastProps {
  instance: IToastInstance
  dismiss: (toast: IToastInstance) => void
}

export interface IToastIconProps {
  icon: IconDefinition
  color: string
}