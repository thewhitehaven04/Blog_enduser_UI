import styled from 'styled-components'

export const ValidityFieldWrapper = styled.div<{ isValid: boolean }>`
  color: ${props => props.isValid ? 'green' : 'red'} 
`