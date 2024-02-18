import { Column } from 'Components/Common/Styles/Flex/Column'
import styled from 'styled-components';

export const PostTitle = styled.h2`
  font-family: var(--font-serif);
  margin: 0;
`

export const PostPublished = styled.span`
  color: var(--deemphasized-text);
`

export const PostText = styled.p`
  font-size: 12pt;
  font-family: var(--font-serif);
  text-align: justify;
`

export const PostViewWrapper = styled(Column)`
  margin-top: 8px;
  gap: 12px;
`

export const PostSummary = styled.span`
  font-weight: 500;
  width: 100%;
`