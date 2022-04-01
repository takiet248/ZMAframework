import React from "react";
import {
  Page,
  Card,
  SkeletonImage,
  SkeletonText,
  Box,
  Navbar
} from "zmp-framework/react";

export default () => {
  return (
    <Page>
      <Navbar backLink="Back"></Navbar>
      <Card inset title="Skeleton">
        <Box flex flexDirection="row">
          <Box>
            <SkeletonImage
              tag="div"
              showIcon
              iconColor="gray"
              width={100}
              height={100}
              effect="wave"
            />
          </Box>
          <Box style={{ flex: 1, marginLeft: "8px" }}>
            <SkeletonText effect="wave">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </SkeletonText>
          </Box>
        </Box>
      </Card>
    </Page>
  );
};
