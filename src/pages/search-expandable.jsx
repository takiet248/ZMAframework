import React, { useState } from "react";
import {
  Page,
  Searchbar,
  Card,
  List,
  ListItem,
  Avatar,
  Navbar,
  NavRight,
  Link
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
    return found; // trả về mảng các indexes của các kêt quả khớp
  };
  const renderExternal = (vl, newData) => {
    setVlData({ ...newData });
  };
  return (
    <Page className="page-demo-searchbar-expandable">
      <Navbar title="Searchbar expandable">
        <NavRight>
          <Link searchbarEnable=".searchbar-demo" iconZMP="zi-search"></Link>
        </NavRight>
        <Searchbar
          className="searchbar-demo"
          searchContainer=".virtual-list"
          searchItem="li"
          searchIn=".item-title"
          expandable
        />
      </Navbar>
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
