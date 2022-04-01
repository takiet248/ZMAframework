import React from "react";
import {
  Page,
  Navbar,
  Card,
  Radio,
  Box,
  List,
  ListItem,
  Text,
  zmp,
  Button
} from "zmp-framework/react";

export default () => {
  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    const data = zmp.form.convertToData("#my-form");
    console.log(data);
  };
  return (
    <Page className="page-demo-radio">
      <Navbar title="Radio"></Navbar>
      <Card inset title="List Radio">
        <List form id="my-form" onSubmit={handleOnSubmitForm}>
          <Box>
            <Text size="small" className="text-color-nl500">
              Gender
            </Text>
            <Box>
              <Radio name="gender" value="male" defaultChecked label="Male" />
            </Box>
            <Box>
              <Radio name="gender" value="female" label="Female" />
            </Box>
          </Box>
          <Text size="small" className="text-color-nl500">
            ListItem radio
          </Text>
          <ListItem
            radioIcon="start"
            radio
            defaultChecked
            title="Yes"
            name="listItem"
            value="yes"
          ></ListItem>
          <ListItem
            radioIcon="start"
            radio
            title="No"
            name="listItem"
            value="no"
          ></ListItem>

          <Box>
            <Button type="submit" typeName="secondary" responsive>
              Submit
            </Button>
          </Box>
        </List>
      </Card>
    </Page>
  );
};
