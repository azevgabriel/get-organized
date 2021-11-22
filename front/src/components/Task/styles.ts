import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  height: 3rem;
  min-height: 3rem;
  margin-top: 1rem;
  overflow: hidden;
 
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: transparent;
  border-radius: 5px;
  box-shadow: 2px 2px 4px var(--color-shadow);

  .titleContent {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;  
    height: 100%; 
    padding-left: 2%;
    border-radius: 5px 0px 0px 5px;
    background-color: var(--color-white);
  }

  .buttonsContent {
    display: flex;
    flex-direction: row;
    width: 30%;   
    height: 100%;

    button { 
      width: 33%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      color: var(--color-white);
      background-color: var(--color-brown);
      border-right: 1px solid var(--color-brown-dark);

      &:last-child{
        width: 34%;
        border-radius: 0px 5px 5px 0px;
        border-right: 0px ;
      }

      &:disabled {
        filter: grayscale(0.7);
        cursor: default;
      }     

    }

  
  }

`;