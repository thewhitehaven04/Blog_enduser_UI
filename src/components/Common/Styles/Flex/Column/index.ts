import { type IContainerProps } from 'Components/Common/types'
import styled from 'styled-components'
import { MapAlignment, MapJustify, MapSpacing, MapPadding } from '../maps'

export const Column = styled('div')<IContainerProps>`
  display: flex;
  flex-flow: column wrap;
  flex-wrap: ${(props) => (props.$wrap === true ? 'wrap' : 'nowrap')};
  align-items: ${(props) =>
    props.$alignment != null ? MapAlignment[props.$alignment] : 'stretch'};
  justify-content: ${(props) =>
    props.$justify != null ? MapJustify[props.$justify] : 'start'};
  gap: ${(props) =>
    props.$spacing != null ? MapSpacing[props.$spacing] : '0'};

  padding: ${(props) => (props.$pad != null ? MapPadding[props.$pad] : '0')};
`
