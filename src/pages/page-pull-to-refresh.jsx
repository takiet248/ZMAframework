import React, { useState } from "react";
import {
  Page,
  Navbar,
  Card,
  List,
  ListItem,
  Avatar,
  Box,
  Text
} from "zmp-framework/react";

const names = [
  "Zalo Developer",
  "Zalo Mini App",
  "Bao moi",
  "Zing News",
  "Zing mp3"
];
const avatars = ["ZD", "ZP", "BM", "ZN", "Z", "VNG", "AB", "XM"];

export default () => {
  const [officialAccounts, setOfficialAccounts] = useState([
    {
      name: "Zalo Developer",
      avatar: "ZD",
      online: true
    },
    {
      name: "Zalo Mini App",
      avatar: "ZMP",
      online: true
    },
    {
      name: "Bao moi",
      avatar: "BM",
      online: false
    }
  ]);

  const loadMore = (done) => {
    setTimeout(() => {
      const officialAccount = names[Math.floor(Math.random() * names.length)];
      const avatar = avatars[Math.floor(Math.random() * avatars.length)];
      officialAccounts.push({
        name: officialAccount,
        avatar,
        online: Math.random() < 0.5
      });
      setOfficialAccounts([...officialAccounts]);

      done();
    }, 1000);
  };
  return (
    <Page
      ptr
      ptrMousewheel={true}
      onPtrRefresh={loadMore}
      className="page-demo-ptr"
    >
      <Navbar title="Pull To Refresh"></Navbar>
      <Card title=" Official Accounts">
        <List mediaList>
          {officialAccounts.map((oa, index) => (
            <ListItem
              key={index}
              description="lorem ipsum dolor sit amet "
              title={oa.name}
            >
              <Avatar slot="media" online={oa.online}>
                {oa.avatar}
              </Avatar>
            </ListItem>
          ))}
          <Box>
            <Text size="xsmall">
              Just pull page down to let the magic happen.
            </Text>
          </Box>
        </List>
      </Card>
    </Page>
  );
};
