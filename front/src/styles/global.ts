import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-brown: #805E3A;
    --color-white: #FFFFFF;
    --color-beige: #EEEEEE;
    --color-white-translucent: rgba(255, 255, 255, 0.6);
    --color-brown-dark: #6D4C2F;
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

  h1, h2, h3, h4, h5, h6, strong {
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
  
`;