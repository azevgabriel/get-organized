import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  nav { 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 10%;
    background-color: var(--color-beige);

    h1 {
      font-size: 1.8rem;
      margin-right: 2%;
    }

    button { 
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.5rem;
      margin-left: 2%;

      svg {
        margin-right: 0.5rem;
        color: var(--color-brown);
        transition: color 0.2s;
      }

      &:hover {
        svg {
          color: var(--color-brown-dark);
        }
        color: var(--color-brown-dark);
      }
    }
  }
`;