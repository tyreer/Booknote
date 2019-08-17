import { node } from 'prop-types';
import Meta from './Meta';

const Page = ({ children }) => (
  <>
    <Meta />
    {children}
  </>
);

Page.propTypes = {
  children: node.isRequired,
};

export default Page;
