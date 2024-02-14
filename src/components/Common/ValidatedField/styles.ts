import { type ILabelProps } from 'Components/Common/ValidatedField/types'
import styled from 'styled-components'

export const ValidationMessage = styled.span`
  color: red;
`

export const Label = styled('label')<ILabelProps>`
  margin-bottom: 4px;

  ${(props) => {
    if (props.$required) {
      return `
      &::after {
        position: relative;
        left: 4px;
        content: "*";
        color: red
      }`
    }
  }}
`