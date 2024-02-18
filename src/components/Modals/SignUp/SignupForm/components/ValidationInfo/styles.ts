import { Column } from 'Components/Common/Styles/Flex/Column'
import styled from 'styled-components'

export const ValidationInfoWrapper = styled(Column)<{ isValid: boolean }>`
  border: 1px solid ${(props) => (props.isValid ? 'green' : 'red')};
  border-radius: 8px;
  font-size: 11pt;
`
