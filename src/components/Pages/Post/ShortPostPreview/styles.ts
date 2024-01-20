import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: calc(50% - 16px);
  max-height: 120px;
  overflow-y: hidden;

  display: flex;
  flex-flow: column nowrap; 
  gap: 8px;
`

export const PostText = styled.p`
  margin: 0%;
  font-size: 12pt;
  font-family: var(--font-serif);
  text-align: justify;
`

export const TitleWithLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  font-family: var(--font-serif);
`