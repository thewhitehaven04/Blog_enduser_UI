import { type IContainerProps } from 'Components/Common/types'
import styled from 'styled-components'
import { MapAlignment, MapJustify, MapPadding, MapSpacing } from '../maps'

export const Row = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => props.$wrap ? 'wrap' : 'nowrap'};
  align-items: ${(props) =>
    props.$alignment != null ? MapAlignment[props.$alignment] : 'stretch'};
  justify-content: ${(props) =>
    props.$justify != null ? MapJustify[props.$justify] : 'start'};
  gap: ${(props) =>
    props.$spacing != null ? MapSpacing[props.$spacing] : '8px'};

  padding: ${(props) => (props.$pad != null ? MapPadding[props.$pad] : '0')};
`
