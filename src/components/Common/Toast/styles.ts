import styled from 'styled-components'

export const ToastWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;

  padding: 16px;
  border-radius: 8px;
  background-color: var(--light-gray);
  color: black;
  border: 1px solid var(--gray-border);

  cursor: pointer;

  @keyframes slidein {
    from {
      transform: translateY(100vh);
    }

    to {
      transform: translateX(0);
    }
  }

  animation-name: slidein;
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`
