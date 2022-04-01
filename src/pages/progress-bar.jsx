import React from "react";
import { Page, Navbar, Card, Progressbar } from "zmp-framework/react";

export default () => {
  return (
    <Page className="page-demo-progress-bar">
      <Navbar title="Progress Bar"></Navbar>
      <Card inset title="Progress Bar">
        <Progressbar progress="30" />
      </Card>
      <Card inset title="Progress Bar infinite">
        <Progressbar infinite />
      </Card>
    </Page>
  );
};
