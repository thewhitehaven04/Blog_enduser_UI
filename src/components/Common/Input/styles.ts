import styled from 'styled-components'

export const Input = styled.input`
  border: 2px solid #ddda;
  border-radius: 4px;
  padding: 2px;

  width: ${(props) => props.width ?? 'auto'};
`
