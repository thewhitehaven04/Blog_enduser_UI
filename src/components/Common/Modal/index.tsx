import { type IModalProps } from 'Components/Common/Modal/types'
import * as SC from './styles'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export function Modal({
  title,
  subtitle,
  children,
  handleClose
}: IModalProps): JSX.Element {
  return (
    <SC.Overlay>
      <SC.Wrapper>
        <SC.HeaderGrid>
          <SC.CloseButton icon={faCircleXmark} onClick={handleClose} />
          <SC.Title>{title}</SC.Title>
          {subtitle != null && <SC.Subtitle>{subtitle}</SC.Subtitle>}
        </SC.HeaderGrid>
        <SC.Content>{children}</SC.Content>
      </SC.Wrapper>
    </SC.Overlay>
  )
}
