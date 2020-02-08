import React from 'react';
import Header from "../../components/Header/Header";

const Layout = (props: any) => {
  return (
      <div>
          <Header/>
          <div className="content">
              {props.children}
          </div>
      </div>
  );
};

export default Layout;
