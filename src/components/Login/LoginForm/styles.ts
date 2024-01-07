import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Column } from 'Components/Common/Styles/Column/styles'
import styled from 'styled-components'

export const FormWrapper = styled.div`
  padding: 8px;

  display: grid;
  grid-template-areas:
    'header header'
    'content errors'
    'controls controls';

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 2;
  background-color: white;
  border-radius: 8px;
`

export const FormOverlay = styled.div`
  position: fixed;
  width: 100dvw;
  height: 100dvh;

  z-index: 1;
  backdrop-filter: brightness(0.6);
`

export const FormHeaderGrid = styled.div`
  grid-area: header;

  display: grid;
  grid-template-columns: auto 24px;
  grid-template-rows: min-content;
  grid-template-areas:
    '. close'
    'title title'
    'subtitle subtitle';
`

export const FormTitle = styled.span`
  grid-area: title;
  font-size: 18px;
`

export const FormSubtitle = styled.span`
  grid-area: subtitle;
  font-size: 14px;
`

export const FormContent = styled.div`
  grid-area: content;
  padding: 8px;
`

export const FormErrors = styled.div`
  grid-area: errors;
`

export const FormFields = styled(Column)`
  gap: 8px;
`

export const CloseIcon = styled(FontAwesomeIcon)`
  height: 16px;
`
