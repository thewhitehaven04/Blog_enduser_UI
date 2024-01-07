import { type ILabelProps } from 'Components/Common/ValidatedField/types'
import styled from 'styled-components'

export const ValidationMessage = styled.span`
  color: red;
`

export const Label = styled('label')<ILabelProps>`
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
