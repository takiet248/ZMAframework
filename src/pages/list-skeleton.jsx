import React, { useState, useRef, useEffect } from "react";
import {
  Page,
  Card,
  Box,
  List,
  ListItem,
  Avatar,
  SkeletonAvatar
} from "zmp-framework/react";

export default () => {
  const [listLoading, setListLoading] = useState(true);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setListLoading(false);
    }, 3000);
    return () => clearTimeout(timmer);
  }, []);

  return (
    <Page className="page-loading-toast">
      <Card inset title="List Skeleton">
        <List
          noHairlines
          noHairlinesBetween
          loading={listLoading}
          style={{ marginTop: "0px" }}
        >
          {listLoading ? (
            <>
              <ListItem
                title="This is title"
                description="this is description content to demo skeleton"
              >
                <SkeletonAvatar slot="media" />
              </ListItem>
              <ListItem
                title="This is title"
                description="this is description content to demo skeleton"
              >
                <SkeletonAvatar slot="media" />
              </ListItem>
              <ListItem
                title="This is title"
                description="this is description content to demo skeleton"
              >
                <SkeletonAvatar slot="media" />
              </ListItem>
              <ListItem
                title="This is title"
                description="this is description content to demo skeleton"
              >
                <SkeletonAvatar slot="media" />
              </ListItem>
              <ListItem
                title="This is title"
                description="this is description content to demo skeleton"
              >
                <SkeletonAvatar slot="media" />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem title="Title" description="Description">
                <Avatar slot="media">AB</Avatar>
              </ListItem>
              <ListItem title="Title" description="Description">
                <Avatar slot="media">CD</Avatar>
              </ListItem>
              <ListItem title="Title" description="Description">
                <Avatar slot="media">EF</Avatar>
              </ListItem>
              <ListItem title="Title" description="Description">
                <Avatar slot="media">GH</Avatar>
              </ListItem>
            </>
          )}
        </List>
      </Card>
    </Page>
  );
};
