import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostPreviewWrapper = styled.article`
  padding-inline: 8px;
  padding-block: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  border-bottom: 1.2px solid var(--gray);
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
  margin: 0;
`

export const PostPreviewText = styled.div`
  font-family: var(--font-serif);
`