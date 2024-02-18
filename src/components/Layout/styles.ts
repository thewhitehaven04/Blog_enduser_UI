import { Row } from 'Components/Common/Styles/Flex/Row'
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
  backdrop-filter: blur(8px);
  z-index: 999;

  border-bottom: 1px solid var(--gray-border);
  box-shadow: 0px 1px 2px 0.1px var(--gray-shadow);
`

export const HeaderLink = styled(Link)`
  color: black;
  font-weight: normal;
  font-size: 13pt;
  padding-left: 40px;
`