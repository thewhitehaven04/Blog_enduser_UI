import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.article`
  max-height: 200px;
  max-width: 100%;
  overflow-y: hidden;

  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
`

export const PostSummary = styled.span`
  margin: 0%;
  font-size: 11pt;
  font-family: var(--font-serif);
  text-align: justify;
`

export const TitleWithLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  font-family: var(--font-serif);
`
