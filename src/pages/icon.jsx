import React from "react";
import { Page, Card, Navbar, Icon, Box, Text } from "zmp-framework/react";

const iconsSize = [16, 24, 32, 40, 48];

export default () => {
  return (
    <Page className="page-icons page-with-navbar">
      <Card inset title="Icon size">
        <Box flex flexWrap flexDirection="row" alignItems="center">
          {iconsSize.map((size) => (
            <Box key={size} flex flexDirection="column" alignItems="center">
              <Icon
                className="demo-icon"
                zmp="zi-close-circle-solid"
                size={size}
              />
              <Text>{`${size}`}</Text>
            </Box>
          ))}
        </Box>
      </Card>
      <Card inset title="Icons">
        <Box flex flexWrap flexDirection="row">
          <Box my="4">
            <Icon
              tooltip={`zi-play-solid`}
              tooltipTrigger="click"
              className="demo-icon "
              zmp="zi-play-solid"
            />
          </Box>
          <Box my="4">
            <Icon
              tooltip="zi-photo-solid"
              tooltipTrigger="click"
              className="demo-icon "
              zmp="zi-photo-solid"
            />
          </Box>
          <Box my="4">
            <Icon
              tooltip="zi-quote"
              tooltipTrigger="click"
              className="demo-icon "
              zmp="zi-quote"
            />
          </Box>
        </Box>
      </Card>
    </Page>
  );
};
