import type { IToastProps } from 'Components/Common/Toast/types'
import * as SC from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TOAST_ICONS_MAP } from 'Components/Common/Toast/constants'

export function Toast({ instance, dismiss }: IToastProps): JSX.Element {
  return (
    <SC.ToastWrapper
      onClick={() => {
        dismiss(instance)
      }}
    >
      <FontAwesomeIcon {...TOAST_ICONS_MAP[instance.type]} />
      <span>{instance.text}</span>
    </SC.ToastWrapper>
  )
}
