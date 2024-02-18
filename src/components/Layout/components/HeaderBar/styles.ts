import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderLink = styled(Link)`
  color: black;
  font-weight: normal;
  font-size: 13pt;
  padding-left: 40px;
`

export const TopbarWrapper = styled.header`
  position: sticky;
  top: 0px;
  border-bottom: 1px solid #EEE5;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  padding-block: 8px;
  padding-inline: 16px;

  background-color: var(--gray-background);
  backdrop-filter: blur(8px);
  z-index: 999;

  border-bottom: 1px solid var(--gray-border);
  box-shadow: 0px 1px 2px 0.1px var(--gray-shadow);
`

