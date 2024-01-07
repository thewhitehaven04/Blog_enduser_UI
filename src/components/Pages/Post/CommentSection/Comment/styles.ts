import styled from 'styled-components'

export const AuthorName = styled.span`
  font-weight: bold;
  margin-right: 4px;
`

export const CommentDate = styled.span`
  color: var(--deemphasized-text);
  font-size: 13px;
  
  &::before {
    content: '·';
    position: relative;
    left: -2px;
  }
`

export const CommentText = styled.p`
  padding-left: 0;
  margin: 0;
`

export const CommentWrapper = styled.div`
  border-left: 2px solid var(--gray);
  padding-left: 8px;

  display: flex;
  flex-flow: column nowrap;
  gap: 8px;

  margin-bottom: 8px;
`