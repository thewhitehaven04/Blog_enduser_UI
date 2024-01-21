import styled from 'styled-components'

export const Button = styled.button`
  appearance: none;
  background-color: var(--gray);
  color: white;

  border: none;
  border-radius: 8px;

  padding: 6px 15px;

  position: relative;
  overflow: hidden;

  box-shadow: 0px 1px 3px 0.4px var(--gray-shadow);

  border: 1px solid var(--gray-border);
`

export const RippleElement = styled.span<{ x: number; y: number }>`
  position: absolute;
  left: ${(props) => `${props.x}px`};
  top: ${(props) => `${props.y}px`};

  height: 1px;
  width: 1px;

  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.25);

  animation-name: ripple;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  @keyframes ripple {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(200);
    }
  }
`
