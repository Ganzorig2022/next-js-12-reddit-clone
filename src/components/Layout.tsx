import React, { ReactNode } from 'react';
import Navbar from './Navbar/Navbar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      <main>{children}</main>
      Layout
    </>
  );
};

export default Layout;
