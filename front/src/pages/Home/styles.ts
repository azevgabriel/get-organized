import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  .leftContainer {
    width: 60%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    img { 
      width: 50%;
    }
    
  }

  .rightContainer {
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background-color: var(--color-beige);

    .loginWrapper {
      width: 80%;
      height: 55%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem 0;
      border-radius: 5px;

      background-color: var(--color-white-translucent);

      h1 {
        margin-right: auto;
        margin-left: 1.5rem;
      }

      label {
        margin-top: 2rem; 
        margin-right: auto;
        margin-left: 1.5rem;
      }

      input {
        width: 90%;
        height: 3rem;
        font-size: 1rem;  
        padding: 0 2%;
      }

      button {
        width: 90%;
        height: 3rem;
        font-size: 1rem;
        background-color: var(--color-brown);
        color: var(--color-white);
        border-radius: 5px;
        margin-top: auto;

        transition: background-color 0.2s linear;

        &:hover {
          background-color: var(--color-brown-dark);
        }
      }

    }
  }
`;