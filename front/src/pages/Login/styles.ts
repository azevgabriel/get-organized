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
      height: 60%;
      max-height: 450px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem 0;
      border-radius: 5px;

      background-color: var(--color-white-translucent);
      box-shadow: 4px 4px 8px var(--color-shadow);

      h1 {
        margin-right: auto;
        margin-left: 1.5rem;
      }

      label {
        margin-top: 1.2rem; 
        margin-right: auto;
        margin-left: 1.5rem;
        margin-bottom: 0.2rem;
      }

      input {
        width: 90%;
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

      .inputWrapper {
        width: 90%;
        height: 3rem;

        display: flex;
        flex-direction: row;
        position: relative;

        input {
          width: 80%;

          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        button {
          width: 20%;
          height: 100%;
          z-index: 5;

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          border-top-left-radius: 0;
          border-bottom-left-radius: 0;

          svg {
            size: 3rem;
          }
        }

      }

      .rememberMe {
        width: 90%;
        height: max-content;
        
        display: flex;
        flex-direction: row;  
        align-items: center;
        justify-content: flex-end;
        margin-top: 1.2rem;
              
        .switch {
          position: relative;
          display: flex;
          width: 2.5rem;
          height: 90%;
          box-shadow: 2px 2px 3px var(--color-shadow);
          border-radius: 12px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--color-light-gray);
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 80%;
          width: 1.1rem;
          left: 0.2rem;
          bottom: 10%;
          background-color: white;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: var(--color-brown);
        }

        input:checked + .slider:before {
          transform: translateX(1rem);
        }

        .slider.round {
          border-radius: 12px;
        }

        .slider.round:before {
          border-radius: 50%;
        }

        label {
          margin: 0;
          margin-right: 0.5rem;
        }
      }

      button {
        width: 90%;
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
          letter-spacing: 0.1rem;
        }
      }
    }
  }
`;