import { type IModalProps } from 'Components/Common/Modal/types'
import * as SC from './styles'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export function Modal({
  title,
  subtitle,
  handleClose,
  containerWidthPx,
  children,
}: IModalProps): JSX.Element {
  return (
    <SC.Overlay>
      <SC.Wrapper width={containerWidthPx}>
        <SC.HeaderGrid>
          <SC.ModalCloseButton icon={faXmark} onClick={handleClose} size='lg'/>
          <SC.Title>{title}</SC.Title>
          {subtitle != null && <SC.Subtitle>{subtitle}</SC.Subtitle>}
        </SC.HeaderGrid>
        <SC.Content>{children}</SC.Content>
      </SC.Wrapper>
    </SC.Overlay>
  )
}
