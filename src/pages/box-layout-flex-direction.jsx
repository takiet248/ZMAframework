import React, { useState } from "react";
import { Page, Card, Navbar, Box, Button } from "zmp-framework/react";

const directions = ["column", "row", "column-reverse", "row-reverse"];

const boxStyle = { width: "50px", height: "50px" };

export default () => {
  const [selectedDirection, setSelectedDirection] = useState("column");
  return (
    <Page className="page-box page-with-navbar">
      <Navbar backLink />

      <Card inset title="Flex direction">
        <Box
          m={0}
          flex
          flexDirection="row"
          flexWrap
          style={{ position: "relative" }}
        >
          {directions.map((direction) => (
            <Box m={0} p={1} style={{ minWidth: "45%" }} key={direction}>
              <Button
                responsive
                active={direction === selectedDirection}
                onClick={() => setSelectedDirection(direction)}
              >
                {direction}
              </Button>
            </Box>
          ))}
        </Box>
        <Box
          flex
          flexDirection={selectedDirection}
          m={0}
          mt={2}
          style={{ backgroundColor: "aliceblue", height: "300px" }}
        >
          <Box
            m={0}
            style={{ ...boxStyle, backgroundColor: "powderblue" }}
          ></Box>
          <Box m={0} style={{ ...boxStyle, backgroundColor: "skyblue" }}></Box>
          <Box
            m={0}
            style={{ ...boxStyle, backgroundColor: "steelblue" }}
          ></Box>
        </Box>
      </Card>
    </Page>
  );
};
