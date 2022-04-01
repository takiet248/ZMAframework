import React from "react";
import { Page, Navbar, Box, Range, Card } from "zmp-framework/react";

export default () => {
  return (
    <Page className="page-range-slider">
      <Navbar title="Range Slider"> </Navbar>
      <Card inset title="Range Slider">
        <Box my="4">
          <Range
            min={0}
            max={100}
            label={true}
            step={5}
            value={25}
            scale={true}
            scaleSteps={5}
            scaleSubSteps={4}
            onRangeChange={(value) => {
              console.log(value);
            }}
          />
        </Box>
        <Box my="4">
          <Range min={0} max={100} step={1} value={70} />
        </Box>
      </Card>
      <Card inset title="Range Slider Vertical">
        <Box
          my="4"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box inline>
            <Range
              style={{ height: "160px" }}
              vertical={true}
              min={0}
              max={100}
              label={true}
              step={1}
              value={25}
            />
          </Box>
          <Box inline>
            <Range
              style={{ height: "160px" }}
              vertical={true}
              min={0}
              max={100}
              label={true}
              step={1}
              value={50}
            />
          </Box>
          <Box inline>
            <Range
              style={{ height: "160px" }}
              vertical={true}
              min={0}
              max={100}
              label={true}
              step={1}
              value={75}
            />
          </Box>
          <Box inline>
            <Range
              style={{ height: "160px" }}
              dual={true}
              vertical={true}
              min={0}
              max={100}
              label={true}
              step={1}
              value={[25, 75]}
              onRangeChange={(val) => {
                console.log(val);
              }}
            />
          </Box>
        </Box>
      </Card>
    </Page>
  );
};
