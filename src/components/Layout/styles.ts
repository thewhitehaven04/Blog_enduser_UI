import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
 
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100%;
`

export const TopbarWrapper = styled.nav`
  position: sticky;
  top: 0px;
  border-bottom: 1px solid #EEE5;
  width: 100%;

  background-color: var(--gray-background);
  backdrop-filter: blur(3px);
  z-index: 999;
`