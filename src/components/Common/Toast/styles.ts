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

  @keyframes slide {
    from {
      transform: translateY(100vh);
    }

    12% {
      transform: translateY(0);
    }

    88% {
      transform: translateY(0);
    }

    to {
      transform: translateY(100vh);
    }
  }

  animation-name: slide;
  animation-duration: 10s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`
