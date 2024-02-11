import {
  faCheck,
  faCircleInfo,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'
import type { IToastIconProps } from 'Components/Common/Toast/types'
import { EToastType } from 'Hooks/context/toaster/types'

export const TOAST_ICONS_MAP: Record<EToastType, IToastIconProps> = {
  [EToastType.ERROR]: {
    icon: faTriangleExclamation,
    color: 'red'
  },
  [EToastType.INFO]: {
    icon: faCircleInfo,
    color: 'orange'
  },
  [EToastType.SUCCESS]: {
    icon: faCheck,
    color: 'green'
  }
}

export const ANIMATION_TIMEOUT = 400