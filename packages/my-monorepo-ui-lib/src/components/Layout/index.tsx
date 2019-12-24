import React, { FC, ReactNode } from "react";

import "./layout.css";

export interface Props {
  header?: ReactNode;
  left: ReactNode;
  right: ReactNode;
  center: ReactNode;
}

export const Layout: FC<Props> = ({ left, right, center, header }) => {
  return (
    <div className="wrapper">
      <div className="wrapper-item header">{header}</div>
      <div className="wrapper-item left">{left}</div>
      <div className="wrapper-item center">{center}</div>
      <div className="wrapper-item right">{right}</div>
    </div>
  );
};

export default Layout;
