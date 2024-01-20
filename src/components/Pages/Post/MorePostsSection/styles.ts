import styled from 'styled-components'

export const SectionWrapper = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;

  background-color: var(--gray-background); 
  padding: 16px;

  width: 100%;
`

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr, 200px));
  gap: 16px;

  max-width: 900px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const SectionHeader = styled.div`
  font-size: 12pt;
  font-weight: bold;
  margin-bottom: 16px;
`