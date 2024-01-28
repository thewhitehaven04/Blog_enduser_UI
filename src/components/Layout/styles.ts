import { Row } from 'Components/Common/Styles/Row/styles'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  width: 100%;
`

export const TopbarWrapper = styled(Row)`
  position: sticky;
  top: 0px;
  border-bottom: 1px solid #EEE5;
  width: 100%;

  background-color: var(--gray-background);
  backdrop-filter: blur(3px);
  z-index: 999;

  padding-block: 8px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row;
  gap: 8px;
`

export const HeaderLink = styled(Link)`
  color: black;
  font-weight: normal;
  font-size: 13pt;
`