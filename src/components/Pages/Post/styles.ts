import styled from 'styled-components'

export const PostPageColumnWrapper = styled.div`
  max-width: 100%;
  
  @media screen and (min-width: 768px) {
    width: 900px;
  }
  flex-grow: 1;
`

export const PostPageWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-flow: column;
  align-items: center;
  justify-content: stretch;
  
  margin-top: 16px;
  width: 100%;
  height: 100%;
`