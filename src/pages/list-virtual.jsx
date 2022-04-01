import React, { useState } from "react";
import {
  Page,
  Navbar,
  Card,
  Searchbar,
  List,
  ListItem,
  Box,
  Avatar
} from "zmp-framework/react";

export default () => {
  const items = [];
  for (let i = 1; i <= 10000; i += 1) {
    items.push({
      title: `OA ${i}`,
      subtitle: `Subtitle ${i}`
    });
  }
  const [vlData, setVlData] = useState({
    items: []
  });

  const searchAll = (query, searchItems) => {
    const found = [];
    for (let i = 0; i < searchItems.length; i += 1) {
      if (
        searchItems[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
        query.trim() === ""
      )
        found.push(i);
    }
    return found; // trả về mảng index của kết quả phù hợp
  };
  const renderExternal = (vl, newData) => {
    setVlData({ ...newData });
  };
  return (
    <Page className="page-virtual-list page-with-navbar">
      <Navbar title="Virtual List"></Navbar>
      <div style={{ backgroundColor: "white" }}>
        <Box m="0" p="4">
          <Searchbar
            searchContainer=".virtual-list"
            searchItem="li"
            searchIn=".item-title"
          />
        </Box>
      </div>

      <Card title="Official Accounts" className="list-card">
        <List
          className="searchbar-found"
          medialList
          virtualList
          virtualListParams={{
            items,
            searchAll,
            renderExternal,
            height: 80
          }}
        >
          <ul>
            {vlData.items.map((item, index) => (
              <ListItem
                key={index}
                mediaItem
                link="#"
                title={item.title}
                subtitle={item.subtitle}
                style={{ top: `${vlData.topPosition}px` }}
                virtualListIndex={items.indexOf(item)}
              >
                <Avatar slot="media">OA</Avatar>
              </ListItem>
            ))}
          </ul>
        </List>
      </Card>
    </Page>
  );
};
