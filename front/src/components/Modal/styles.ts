import styled, { css } from "styled-components";

interface ContainerProps {
  isOpen: boolean;
  type: 'delete' | 'edit' | 'add';
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
  transition: transform .5s ease-in, opacity .5s ease-in;

  ${props => props.isOpen ? 
      css`
        transform: rotateY(0deg);
        opacity: 1;
      `
    :
      css`
        transform: rotateY(90deg);
        opacity: 0;
      `   
  };

  ${props => props.type === 'delete' &&
    css`
      top: 30vh;
      height: 40vh;
    ` 
  };

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2% 4%;

  .body {
    width: 100%;
    height: 100%; 

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  
    p {
      margin-top: 1.2rem; 
      font-size: 1.2rem;
      margin-left: auto;
      margin-right: auto;
    }

    label {
      margin-top: 1.2rem; 
      margin-bottom: 0.2rem;
    }

    input, textarea {
      width: 100%;
      height: 3rem;
      font-size: 1rem;  
      padding: 0 2%;

      border: 1px solid var(--color-white);
      background-color: var(--color-white);
      border-radius: 5px;
      box-shadow: 2px 2px 3px var(--color-shadow);

      &:focus {
        border: 1px solid var(--color-brown);
      }
    }

    textarea {
      padding: 2%;
      height: 50%;
      resize: none;
      margin-bottom: 1.2rem; 
    }
  }

  .footer {
    margin-top: auto;

    width: 100%;

    display: flex;	
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
      width: 30%;
      height: 3rem;
      font-size: 1rem;
      background-color: var(--color-brown);
      color: var(--color-white);
      border-radius: 5px;
      margin-top: auto;
      margin-bottom: .2rem;

      font-size: 1.5rem;
        
      transition: all 0.2s linear;
      box-shadow: 2px 2px 6px var(--color-shadow-dark);

      &:hover {
        background-color: var(--color-brown-dark);
        box-shadow: 1px 1px 6px var(--color-shadow-dark); 
      }
    }
  }

`;