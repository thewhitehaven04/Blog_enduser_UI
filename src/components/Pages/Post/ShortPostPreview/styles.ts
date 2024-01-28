import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const ShortPostWrapper = styled.article`
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

export const PostTitle = styled.div`
  font-weight: bold;
  font-family: var(--font-serif);
`
