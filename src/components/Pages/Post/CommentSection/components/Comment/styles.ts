import Markdown from 'react-markdown'
import styled from 'styled-components'

export const AuthorName = styled.span`
  font-weight: bold;
  margin-right: 4px;
`

export const CommentDate = styled.span`
  color: var(--deemphasized-text);
  font-size: 12pt;
  position: relative;
  left: 6px;
  
  &::before {
    content: '·';
    position: relative;
    left: -3px;
  }
`

export const CommentControlsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  justify-content: start;
`

export const CommentWrapper = styled.div`
  border-left: 2px solid var(--gray);
  padding-left: 8px;

  display: flex;
  flex-flow: column nowrap;
  gap: 8px;

  margin-bottom: 8px;
  
  & blockquote {
    border-left: 3px solid var(--gray); 
    margin: 0;
    padding: 0px 0px 0px 8px;
  }

  & p {
    margin: 0;
  }
`
