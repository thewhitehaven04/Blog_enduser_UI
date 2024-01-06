import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
 
  display: flex;
  flex-direction: column;

  max-width: 100%;
  
  @media screen and (min-width: 768px) {
    max-width: 1080px;
  }
`