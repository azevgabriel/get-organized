import styled, { css } from 'styled-components';

interface ContainerProps {
  modalOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: filter 0.2s linear;

  ${props => props.modalOpen && 
      css`
        filter: blur(5px);
      `   
  };

  nav { 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 10%;
    background-color: var(--color-brown);

    h1 {
      font-size: 1.8rem;
      margin-right: 2%;
      margin-left: auto;  
      color: var(--color-white);
    }

    button { 
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.4rem;
      margin-left: 2%;
      color: var(--color-beige);  
      background-color: transparent;
      transition: all 0.2s;

      svg {
        margin-right: 0.5rem;
        color: var(--color-beige);
      }

      &:hover {
        filter: brightness(.8); 
      }
    }
  }

  main {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90%;
    background-color: var(--color-beige);

    .tasksWrapper {
      display: flex;
      flex-direction: column;
      width: 33%;
      height: calc(100% - 1.5rem - 1%);
      align-items: center;
      margin: 1% 0%;
      border-left: 3px solid var(--color-brown);
      
      .scrollLock {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        border-left: none;
        padding: 0;
        margin: 0;
      }

      &:first-child {
        border-left: none;
      }
    }
  }
`;