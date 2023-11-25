import React from 'react';
import { Fragment } from 'react';

import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
