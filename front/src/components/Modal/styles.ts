import styled, { css } from "styled-components";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  z-index: var(--z-index-modal);
  width: 60vw;
  height: 70vh;
  top: 15vh;
  left: 20vw;

  background: var(--color-white);
  border-radius: 6px;

  box-shadow: 4px 6px 8px var(--color-shadow-dark);
  transition: transform .5s linear;

  ${props => props.isOpen ? 
      css`
          transform: rotateX(0deg);
      `
    :
      css`
          transform: rotateX(90deg);
      `   
  };

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;


`;