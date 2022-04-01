import React, { useState, useRef } from "react";
import {
  Page,
  Navbar,
  Card,
  List,
  ListItem,
  Avatar
} from "zmp-framework/react";

export default () => {
  const allowInfinite = useRef(true);
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [showPreloader, setShowPreloader] = useState(true);

  const loadMore = () => {
    if (!allowInfinite.current) return;
    allowInfinite.current = false;

    setTimeout(() => {
      if (items.length >= 30) {
        setShowPreloader(false);
        return;
      }

      const itemsLength = items.length;

      for (let i = 1; i <= 20; i += 1) {
        items.push(itemsLength + i);
      }
      allowInfinite.current = true;
      setItems([...items]);
    }, 1000);
  };
  return (
    <Page
      infinite
      infiniteDistance={50}
      infinitePreloader={showPreloader}
      onInfinite={loadMore}
      className="page-demo-infinite-scroll"
    >
      <Navbar title="Infinite Scroll" />
      <Card title="Official Accounts">
        <List>
          {items.map((item, index) => (
            <ListItem title={`Official Account ${item}`} key={index}>
              <Avatar
                online={item % 2 === 0}
                story={item % 6 === 0}
                slot="media"
              >{`OA ${item}`}</Avatar>
            </ListItem>
          ))}
        </List>
      </Card>
    </Page>
  );
};
