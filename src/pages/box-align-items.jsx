import React, { useState } from "react";
import { Page, Card, Navbar, Box, Button } from "zmp-framework/react";

const values = ["stretch", "flex-start", "flex-end", "center", "baseline"];

const boxStyle = { width: "50px", minHeight: "50px", height: "auto" };

export default () => {
  const [selected, setSelected] = useState("stretch");

  return (
    <Page className="page-box page-with-navbar">
      <Navbar backLink />

      <Card inset title="Align Items">
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
          alignItems={selected}
          m={0}
          mt={2}
          style={{ backgroundColor: "aliceblue" }}
        >
          <Box
            m={0}
            style={{ ...boxStyle, backgroundColor: "powderblue" }}
          ></Box>
          <Box m={0} style={{ ...boxStyle, backgroundColor: "skyblue" }}></Box>
          <Box
            m={0}
            style={{
              ...boxStyle,
              backgroundColor: "steelblue",
              height: "150px"
            }}
          ></Box>
        </Box>
      </Card>
    </Page>
  );
};
