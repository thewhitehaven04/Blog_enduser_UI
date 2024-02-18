import { Row } from 'Components/Common/Styles/Flex/Row'
import styled from 'styled-components'
import { getColor } from './helpers/getColor'

export const RequirementWrapper = styled(Row)<{ isValid: boolean | null }>`
  color: ${(props) => getColor(props.isValid)};
`
