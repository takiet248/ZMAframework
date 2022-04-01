import React from "react";
import { Page, Card, Navbar, Box, Button, Title } from "zmp-framework/react";

export default () => {
  return (
    <Page className="page-box page-with-navbar">
      <Navbar backLink />
      <Box>
        <Card inset title="Box default">
          <Box ml="0">
            <Button typeName="secondary">Button 1</Button>
          </Box>
          <Box ml="0" mt="4">
            <Button typeName="secondary">Button 2</Button>
          </Box>
          <Box ml="0" mt="5">
            <Button typeName="secondary">Button 3</Button>
          </Box>
          <Box ml="0" mt="6">
            <Button typeName="secondary">Button 4</Button>
          </Box>
        </Card>
      </Box>
      <Box>
        <Card inset title="Box inline">
          <Box inline m="2">
            <Button typeName="secondary">Button 1</Button>
          </Box>
          <Box inline m="2">
            <Button typeName="secondary">Button 2</Button>
          </Box>
          <Box inline m="2">
            <Button typeName="secondary">Button 3</Button>
          </Box>
          <Box inline m="2">
            <Button typeName="secondary">Button 4</Button>
          </Box>
        </Card>
      </Box>
      <Box>
        <Card inset title="Flex Box">
          <Title size="xsmall">Flex row, wrap</Title>

          <Box flex flexDirection="row" flexWrap>
            <Box inline m="2">
              <Button typeName="secondary">Button 1</Button>
            </Box>
            <Box inline m="2">
              <Button typeName="secondary">Button 2</Button>
            </Box>
            <Box inline m="2">
              <Button typeName="secondary">Button 3</Button>
            </Box>
            <Box inline m="2">
              <Button typeName="secondary">Button 4</Button>
            </Box>
          </Box>
          <Title size="xsmall">Flex Columns, align items: center</Title>
          <Box flex flexDirection="column" alignItems="center">
            <Box inline m="2">
              <Button typeName="secondary">Button 1</Button>
            </Box>
            <Box inline m="2">
              <Button typeName="secondary">Button 2</Button>
            </Box>
            <Box inline m="2">
              <Button typeName="secondary">Button 3</Button>
            </Box>
            <Box inline m="2">
              <Button typeName="secondary">Button 4</Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Page>
  );
};
