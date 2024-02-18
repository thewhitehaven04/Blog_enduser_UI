import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Column } from 'Components/Common/Styles/Flex/Column'
import styled from 'styled-components'

export const FormContent = styled(Column)`
  grid-area: content;
`

export const FormErrors = styled.div`
  grid-area: errors;
`

export const CloseIcon = styled(FontAwesomeIcon)`
  height: 16px;
`
