import { node } from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';

const theme = {
  black: 'black',
  maxWidth: '1000px',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <GlobalStyle />
      {children}
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
  children: node.isRequired,
};

export default Page;
