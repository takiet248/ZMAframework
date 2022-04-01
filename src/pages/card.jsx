import React from "react";
import {
  Page,
  Card,
  Navbar,
  Box,
  Grid,
  GridItem,
  Icon,
  Text,
} from "zmp-framework/react";

export default () => {
  return (
    <Page x>
      <Card title="Card default">
        <Grid>
          <GridItem
            label="Grid"
            icon={<Icon zmp="zi-close-circle-solid" />}
          ></GridItem>
          <GridItem
            label="Grid"
            icon={<Icon zmp="zi-close-circle-solid" />}
          ></GridItem>
          <GridItem
            label="Grid"
            icon={<Icon zmp="zi-close-circle-solid" />}
          ></GridItem>
          <GridItem
            label="Grid"
            icon={<Icon zmp="zi-close-circle-solid" />}
          ></GridItem>
          <GridItem
            label="Grid"
            icon={<Icon zmp="zi-close-circle-solid" />}
          ></GridItem>
          <GridItem
            label="Grid"
            icon={<Icon zmp="zi-close-circle-solid" />}
          ></GridItem>
        </Grid>
      </Card>
      <Card title="Card inset" inset>
        <Text>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia
          purus sed lectus pulvinar, ut fringilla sapien porttitor. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nam faucibus orci ac
          blandit tristique. Integer quis maximus sapien, eget blandit odio.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Praesent et dolor dui. Quisque dignissim mi
          eget arcu pretium, a porttitor lorem imperdiet. Maecenas a congue
          lectus, sit amet viverra arcu. Nulla et eros ex. Vivamus lacinia
          venenatis erat nec hendrerit. Integer vel eleifend erat, condimentum
          aliquam turpis. Maecenas et diam vel ipsum lacinia bibendum eget id
          tortor. Donec accumsan et lacus eget dictum. Phasellus vestibulum
          rhoncus ultricies. Integer vitae odio urna.
        </Text>
      </Card>
      <Box m="6">
        <Card inset title="Card inset with Box container">
          <Text>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lacinia purus sed lectus pulvinar, ut fringilla sapien porttitor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            faucibus orci ac blandit tristique. Integer quis maximus sapien,
            eget blandit odio. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Praesent et dolor dui.
            Quisque dignissim mi eget arcu pretium, a porttitor lorem imperdiet.
            Maecenas a congue lectus, sit amet viverra arcu. Nulla et eros ex.
            Vivamus lacinia venenatis erat nec hendrerit. Integer vel eleifend
            erat, condimentum aliquam turpis. Maecenas et diam vel ipsum lacinia
            bibendum eget id tortor. Donec accumsan et lacus eget dictum.
            Phasellus vestibulum rhoncus ultricies. Integer vitae odio urna.
          </Text>
        </Card>
      </Box>
    </Page>
  );
};
