import styled from 'styled-components'

export const ValidationInfoWrapper = styled.div<{ isValid: boolean }>`
  border: 1px solid ${(props) => (props.isValid ? 'green' : 'red')};
  border-radius: 8px;
  padding: 16px;
`
