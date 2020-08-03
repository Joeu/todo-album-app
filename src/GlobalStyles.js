import { createGlobalStyle } from 'styled-components';
import { mq, colors } from './styles';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    
    @media screen and (max-width: ${mq.breakpoints.small}px) {
      font-size: 55%;
    }
  }

  body {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    background-color: ${colors.raginBeige};
    font-family: 'Poppins', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
  }

  section {
    min-height: calc(100vh - 11rem);
    justify-content: center;
  }

  @media screen and (min-width: ${mq.breakpoints.extraLarge}px) {
    section, .header__content, .footer__content {
      width: 80%;
      margin: 0 auto;
    }
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
    }
  }
`;

export default GlobalStyles;
