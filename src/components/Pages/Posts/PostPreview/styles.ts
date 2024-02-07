import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostPreviewWrapper = styled.article`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const PostHeaderLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const PostPreviewPublished = styled.span`
  color: var(--deemphasized-text);
`

export const PostPreviewHeader = styled.h1`
  font-size: large;
  font-family: var(--font-serif);
`

export const PostPreviewText = styled.div`
  font-family: var(--font-serif);
`