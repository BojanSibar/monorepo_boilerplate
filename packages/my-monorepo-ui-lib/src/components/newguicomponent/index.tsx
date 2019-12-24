import React, { FC, ReactNode } from "react";

import "./newguicomponent.scss";

interface Props {
  node: ReactNode;
}

const Layout: FC<Props> = ({ node }) => {
  return <div className="new-gui-component">{node}</div>;
};

export default Layout;
