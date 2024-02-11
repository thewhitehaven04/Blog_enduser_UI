import styled from 'styled-components'

export const ToastWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;

  padding: 16px;
  border-radius: 8px;
  background-color: var(--gray-toaster);
  color: black; 

  cursor: pointer;
  
  animation: slide 0.2s ease-in-out forwards;

  @keyframes slide {
    from {
      position: fixed;
      right: 100vw;
    }  

    to {
      position: static;
    }
  }
` 