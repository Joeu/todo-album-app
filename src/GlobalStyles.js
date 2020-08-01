import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    max-width: 120rem;
    font-family: 'Poppins', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
  }

  section {
    margin-top: 7.5rem;
    margin-bottom: .5rem;
    min-height: calc(100vh - 11rem);
  }

`;

export default GlobalStyles;
