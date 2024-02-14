import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Column } from 'Components/Common/Styles/Column'
import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  width: 100dvw;
  height: 100dvh;

  z-index: 1;
  backdrop-filter: brightness(0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div<{ width?: number }>`
  padding: 24px;

  z-index: 2;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 1px 8px 0.2px var(--gray-shadow);

  width: ${(props) => (props.width != null ? props.width + 'px' : 'auto')};
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

export const ModalCloseButton = styled(FontAwesomeIcon)`
  grid-area: close;
  place-self: center;

  color: var(--gray);

  &:hover {
    color: black;
    cursor: pointer;
  }
`

export const Content = styled(Column)`
  gap: 12px;
  padding-top: 12px;
`
