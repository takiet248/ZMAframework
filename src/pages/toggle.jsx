import React from "react";
import { Page, Navbar, Card, Toggle, Box } from "zmp-framework/react";

export default () => {
  return (
    <Page className="page-toggle-demo">
      <Navbar title="Toggle"></Navbar>
      <Card inset title="Toggle">
        <Box>
          <Toggle name="toggle-1" />
        </Box>
        <Box>
          <Toggle name="toggle-2" defaultChecked />
        </Box>
        <Box>
          <Toggle name="toggle-3" disabled defaultChecked />
        </Box>
        <Box>
          <Toggle name="toggle-4" disabled />
        </Box>
      </Card>
    </Page>
  );
};
