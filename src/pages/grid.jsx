import React from "react";
import { Page, Card, Navbar, Grid, GridItem, Icon } from "zmp-framework/react";

export default () => {
  return (
    <Page className="page-flex page-with-navbar">
      <Card title="Grid Layout Default">
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
      <Card title="Grid Layout No Border">
        <Grid
          noBorder
          data={[
            {
              label: "Grid",
              icon: <Icon zmp="zi-close-circle-solid" />,
              onClick(e) {
                console.log(e);
              },
              key: "1",
            },
            {
              label: "Grid",
              icon: <Icon zmp="zi-close-circle-solid" />,
              onClick(e) {
                console.log(e);
              },
              key: "2",
            },
            {
              label: "Grid",
              icon: <Icon zmp="zi-close-circle-solid" />,
              onClick(e) {
                console.log(e);
              },
              key: "3",
            },
            {
              label: "Grid",
              icon: <Icon zmp="zi-close-circle-solid" />,
              onClick(e) {
                console.log(e);
              },
              key: "4",
            },
            {
              label: "Grid",
              icon: <Icon zmp="zi-close-circle-solid" />,
              onClick(e) {
                console.log(e);
              },
              key: "5",
            },
            {
              label: "Grid",
              icon: <Icon zmp="zi-close-circle-solid" />,
              onClick(e) {
                console.log(e);
              },
              key: "6",
            },
            {
              label: "Grid",
              icon: <Icon zmp="zi-close-circle-solid" />,
              onClick(e) {
                console.log(e);
              },
              key: "7",
            },
            {
              label: "Grid",
              icon: <Icon zmp="zi-close-circle-solid" />,
              onClick(e) {
                console.log(e);
              },
              key: "8",
            },
          ]}
        ></Grid>
      </Card>
      <Card title="Grid Layout with specify columns">
        <Grid columns={4}>
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
    </Page>
  );
};
