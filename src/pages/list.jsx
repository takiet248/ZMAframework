import React from "react";
import { Page, List, ListItem, Icon, Navbar, Card } from "zmp-framework/react";

export default () => {
  return (
    <Page className="page-list page-with-navbar-large">
      <Navbar backLink />
      <Card title=" List item jump">
        <List sortableEnabled sortable>
          <ListItem link="#" title="Sample List Item"></ListItem>
          <ListItem link="#" title="Sample List Item">
            <Icon className="list-icon" slot="media" zmp="zi-share" />
          </ListItem>
          <ListItem
            link="#"
            title="Sample text title"
            after="Instruction"
          ></ListItem>
          <ListItem link="#" title="Sample text title" after="Instruction">
            <Icon className="list-icon" slot="media" zmp="zi-share" />
          </ListItem>
          <ListItem
            link="#"
            title="Sample text title"
            description="Instruction Description"
          >
            <Icon className="list-icon" slot="media" zmp="zi-share" />
          </ListItem>
          <ListItem
            title="Sample text title"
            description="Instruction Description"
          ></ListItem>
        </List>
        <div className="list-title">List item with icon, description</div>
        <List style={{ marginTop: 0 }}>
          <ListItem title="Sample text title" after="Instruction">
            <Icon className="list-icon" slot="media" zmp="zi-share" />
          </ListItem>
          <ListItem
            title="Sample text title"
            description="Instruction Description"
          >
            <Icon className="list-icon" slot="media" zmp="zi-share" />
          </ListItem>
          <ListItem
            title="Sample text title"
            description="Instruction Description"
          ></ListItem>
        </List>
      </Card>
    </Page>
  );
};
