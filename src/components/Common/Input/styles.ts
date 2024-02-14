import styled from 'styled-components'

export const Input = styled.input`
  border: 2px solid #ddda;
  border-radius: 4px;
  padding: 4px;
  font-size: 12pt;

  width: ${(props) => props.width ?? 'auto'};
`
