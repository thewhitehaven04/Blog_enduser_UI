import { Row } from 'Components/Common/Styles/Flex/Row'
import styled from 'styled-components'

export const RequirementWrapper = styled(Row)<{ isValid: boolean }>`
  color: ${props => props.isValid ? 'green' : 'red'};
`