import React, { useState } from "react";
import { Page, Card, Navbar, Box, Button } from "zmp-framework/react";

const values = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly"
];

const boxStyle = { width: "50px", height: "50px" };

export default () => {
  const [selected, setSelected] = useState("flex-start");
  return (
    <Page className="page-box page-with-navbar">
      <Navbar backLink />

      <Card inset title="Justify Content">
        <Box
          m={0}
          flex
          flexDirection="row"
          flexWrap
          style={{ position: "relative" }}
        >
          {values.map((val) => (
            <Box m={0} p={1} style={{ minWidth: "45%" }} key={val}>
              <Button
                responsive
                active={val === selected}
                onClick={() => setSelected(val)}
              >
                {val}
              </Button>
            </Box>
          ))}
        </Box>
        <Box
          flex
          justifyContent={selected}
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
