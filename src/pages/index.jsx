import React from "react";
import { Page, List, ListItem, Box, Card } from "zmp-framework/react";

export default () => {
  return (
    <Page noNavbar>
      <Box m="0" p="0">
        <Card>
          <List>
            <ListItem link="/actionsheet">ActionSheet</ListItem>
            <ListItem link="/avatar">Avatar</ListItem>
            <ListItem link="/box">Box</ListItem>
            <ListItem link="/buttons">Button</ListItem>
            <ListItem link="/card">Card</ListItem>
            <ListItem link="/checkbox">Checkbox</ListItem>
            <ListItem link="/datepicker">DatePicker</ListItem>
            <ListItem link="/dialog">Dialog</ListItem>
            <ListItem link="/flex">Flex Layout (Row, Col)</ListItem>
            <ListItem link="/fab">Fab</ListItem>
            <ListItem link="/grid">Grid</ListItem>
            <ListItem link="/icon">Icon</ListItem>
            <ListItem link="/input">Input</ListItem>
            <ListItem link="/list-item">List Item</ListItem>
            <ListItem link="/list">List</ListItem>
            <ListItem link="/list-virtual">Virtual List</ListItem>
            <ListItem link="/list-skeleton">List with Skeleton</ListItem>
            <ListItem link="/page-infinite-scroll">
              Page Infinite Scroll
            </ListItem>
            <ListItem link="/page-pull-to-refresh">
              Page Pull to Refresh
            </ListItem>
            <ListItem link="/picker">Picker</ListItem>
            <ListItem link="/preload">Preload</ListItem>
            <ListItem link="/progress-bar">ProgressBar</ListItem>
            <ListItem link="/radio">Radio</ListItem>
            <ListItem link="/range">Range Slider</ListItem>
            <ListItem link="/search-expandable">Search Expandable</ListItem>
            <ListItem link="/searchbar">SearchBar</ListItem>
            <ListItem link="/sheet-modal">Sheet Modal</ListItem>
            <ListItem link="/skeleton">Skeleton</ListItem>
            <ListItem link="/tabbar-botton">Bottom Tabbar</ListItem>
            <ListItem link="/tabbar-top">Top Tabbar</ListItem>
            <ListItem link="/tabs">Tabs</ListItem>
            <ListItem link="/tabs-animated">Tabs Animated</ListItem>
            <ListItem link="/toast">Toast</ListItem>
            <ListItem link="/toggle">Toggle</ListItem>
            <ListItem link="/swiper">Swiper</ListItem>
          </List>
        </Card>
      </Box>
    </Page>
  );
};
