import { node } from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';

const theme = {
  black: 'black',
  maxWidth: '1000px',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      {children}
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
  children: node.isRequired,
};

export default Page;
