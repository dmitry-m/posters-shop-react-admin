import * as React from "react";
import { Layout, LayoutProps } from "react-admin";

import AppBar from "./AppBar";
import Menu from "./Menu";

export default function MyLayout(props: LayoutProps) {
  return <Layout {...props} appBar={AppBar} menu={Menu} />;
}
