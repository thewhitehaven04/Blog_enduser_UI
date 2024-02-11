import { type IContainerProps } from 'Components/Common/types'
import styled from "styled-components"

export const Row = styled.div<IContainerProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: ${(props) => {
    switch (props.$alignment) {
      case 'start':
        return 'flex-start'
      case 'end':
        return 'flex-end'
      case 'center':
        return 'center'
      case 'stretch':
        return 'stretch'
      default:
        return 'stretch'
    }
  } };
  justify-content: ${(props) => {
    switch (props.$justify) {
      case 'evenly':
        return 'space-evenly'
      case 'between':
        return 'space-between'
      case 'spread':
        return 'space-around'
      case 'start':
        return 'start'
      case 'end':
        return 'end'
      case 'center': 
        return 'center'
      default:
        return 'start'
    }
  } };
`
