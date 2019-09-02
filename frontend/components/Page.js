import { node } from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Meta from './Meta';
import Header from './Header';

const theme = {
  black: 'black',
  maxWidth: '1000px',
  mqMedium: '768px',
  background: 'white',
};

const StyledPage = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  grid-auto-rows: 250px;
`;

const GlobalStyle = createGlobalStyle`
 ${normalize}

@font-face {
  font-family: 'inter', sans-serif;
  src:  url('/static/inter-font/Inter-Regular.woff2') format('woff2'),
        url('/static/inter-font/Inter-Regular.woff') format('woff');
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'inter';
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
  
  p, h1, h2, h3, h4, h5, h6, ul, li {
    margin: 0;
    padding: 0;
  }
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <GlobalStyle />
      <Header />
      <Inner>{children}</Inner>
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
  children: node.isRequired,
};

export default Page;
