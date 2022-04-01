import React, { useState } from "react";
import {
  Page,
  Card,
  Actions,
  ActionsGroup,
  ActionsButton,
  ActionsLabel,
  Button,
  Box,
  Navbar
} from "zmp-framework/react";

export default () => {
  const [actionSheetOpened, setActionSheetOpened] = useState(false);
  const [actionSheet2, setActionSheet2] = useState(false);

  return (
    <Page className="action-sheet-page page-with-navbar">
      <Navbar backLink />
      <Box>
        <Card inset title="Action Sheet" style={{ marginTop: "24px" }}>
          <Box>
            <Button
              typeName="secondary"
              onClick={() => setActionSheet2(true)}
              fill
            >
              Action Sheet 1 group
            </Button>
          </Box>
          <Box>
            <Button
              typeName="secondary"
              onClick={() => setActionSheetOpened(true)}
              fill
            >
              Action Sheet 2 group
            </Button>
          </Box>
        </Card>
      </Box>

      <Actions
        opened={actionSheet2}
        onActionsClosed={() => setActionSheet2(false)}
        id="actions-two-groups"
        onActionsClose={() => {
          console.log("closing");
        }}
        onActionsOpen={() => {
          console.log("opening");
        }}
        onActionsOpened={() => {
          console.log("opened");
        }}
      >
        <ActionsGroup>
          <ActionsLabel>
            This is title, it can be one line or two line
          </ActionsLabel>
          <ActionsButton>Sample Menu</ActionsButton>
          <ActionsButton>Sample Menu</ActionsButton>
          <ActionsButton color="red">Negative Menu</ActionsButton>
        </ActionsGroup>
      </Actions>
      <Actions
        opened={actionSheetOpened}
        onActionsClosed={() => setActionSheetOpened(false)}
        id="actions-two-groups"
      >
        <ActionsGroup>
          <ActionsLabel>
            This is title, it can be one line or two line
          </ActionsLabel>
          <ActionsButton>Sample Menu</ActionsButton>
          <ActionsButton>Sample Menu</ActionsButton>
          <ActionsButton color="red">Negative Menu</ActionsButton>
        </ActionsGroup>
        <ActionsGroup>
          <ActionsButton>Cancel</ActionsButton>
        </ActionsGroup>
      </Actions>
    </Page>
  );
};
