import React from 'react';
import Navbar from './navbar';

const Layout = ({content = () => null }) => (
  <div>
    <Navbar />
    {content()}
  </div>
);

export default Layout;
