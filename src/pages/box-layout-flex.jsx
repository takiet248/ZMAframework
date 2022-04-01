import React from "react";
import { Page, Card, Navbar, Box } from "zmp-framework/react";

export default () => {
  return (
    <Page className="page-box page-with-navbar">
      <Navbar backLink />

      <Card inset title="Flex">
        <Box
          flex
          flexDirection="column"
          m={0}
          style={{ flex: 1, height: "200px" }}
        >
          <Box m={0} style={{ backgroundColor: "powderblue", flex: 1 }}></Box>
          <Box m={0} style={{ backgroundColor: "skyblue", flex: 2 }}></Box>
          <Box m={0} style={{ backgroundColor: "steelblue", flex: 3 }}></Box>
          <Box m={0} style={{ backgroundColor: "royalblue", flex: 4 }}></Box>
        </Box>
      </Card>
    </Page>
  );
};
