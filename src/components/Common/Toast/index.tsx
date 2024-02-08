import type { IToastProps } from 'Components/Common/Toast/types'
import * as SC from './styles'

export function Toast({ type, text }: IToastProps): JSX.Element {
  return (
    <SC.ToastWrapper>
      <span>{text}</span>
    </SC.ToastWrapper>
  )
}
