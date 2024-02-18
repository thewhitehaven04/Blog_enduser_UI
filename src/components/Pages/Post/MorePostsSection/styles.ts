import styled from 'styled-components'

export const SectionWrapper = styled.section`
  display: grid;
  grid-template-areas:
    'readMore .'
    'posts posts';
  justify-content: center;

  background-color: var(--gray-background);
  width: 100%;
  padding-block: 16px;
`

export const SectionLayout = styled.div``

export const SectionHeader = styled.div`
  font-size: larger; 
  font-weight: bold;
  margin-bottom: 16px;

  grid-area: readMore;
  align-self: start;
`

export const PostList = styled.div`
  grid-area: posts;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  max-width: 900px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
