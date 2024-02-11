import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Column } from 'Components/Common/Styles/Column'
import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  width: 100dvw;
  height: 100dvh;

  z-index: 1;
  backdrop-filter: brightness(0.65);
`

export const Wrapper = styled.div`
  padding: 24px;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 2;
  background-color: white;
  border-radius: 8px;
`

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 24px;
  grid-template-rows: min-content;
  grid-template-areas:
    '. . close'
    'title title .'
    'subtitle subtitle .';
  row-gap: 8px;
`

export const Title = styled.div`
  grid-area: title;
  font-size: 16pt;
`

export const Subtitle = styled.div`
  grid-area: subtitle;
  font-size: 12pt;
`

export const CloseButton = styled(FontAwesomeIcon)`
  grid-area: close;
  place-self: center;

  &:hover {
    color: white;
    background-color: black;
  }
`

export const Content = styled(Column)`
  gap: 12px;
  padding-top: 12px;
`