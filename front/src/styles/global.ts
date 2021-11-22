import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-brown: #805E3A;
    --color-white: #FFFFFF;
    --color-beige: #EEEEEE;
    --color-white-translucent: rgba(255, 255, 255, 0.8);
    --color-brown-dark: #6D4C2F;
    --color-shadow: rgba(0,0,0,0.2);
    --color-shadow-dark: rgba(0,0,0,0.4);
    --color-light-gray: #DDDDDD;
    --color-gray: #999999;

    --z-index-toast: 20;
    --z-index-modal: 15;
    --z-index-blur: 10;
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    text-decoration: none;   
    font-family: 'PT Serif', serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong, button {
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    cursor: pointer;
    border: none;
  }

  @media(max-width: 1440px) {
    html {
      font-size: 100%;
    }
  }

  @media(max-width: 1080px) {
    html {
      font-size: 98.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 93.5%;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
      background-color: transparent;  
  }

  ::-webkit-scrollbar-thumb {
      background-color: var(--color-gray);
      border-radius: 16px;
      @media (max-width: 1000px) {
          background-color: #aaa;
      }
  }
  
`;