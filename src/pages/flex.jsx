import React from "react";
import { Page, Card, Navbar, Row, Col, Box } from "zmp-framework/react";

export default () => {
  return (
    <Page className="page-flex page-with-navbar">
      <Card title="Flex layout using Row and Col components">
        <Row>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 1
            </Box>
          </Col>
        </Row>
        <Row>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 2_1
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 2_2
            </Box>
          </Col>
        </Row>
        <Row>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 3_1
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 3_2
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 3_3
            </Box>
          </Col>
        </Row>
        <Row>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_1
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_2
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_3
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_4
            </Box>
          </Col>
        </Row>
        <Row>
          <Col width="25">
            <Box m={0} p={2} className="bg-color-w300">
              Flex 5_1
            </Box>
          </Col>
          <Col width="50">
            <Box m={0} p={2} className="bg-color-w300">
              Flex 5_2
            </Box>
          </Col>
          <Col width="25">
            <Box m={0} p={2} className="bg-color-w300">
              Flex 5_3
            </Box>
          </Col>
        </Row>
      </Card>

      <Card title="Flex layout no gap">
        <Row noGap>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_1
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_2
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_3
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_4
            </Box>
          </Col>
        </Row>
        <Row noGap>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_1
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_2
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_3
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_4
            </Box>
          </Col>
        </Row>
        <Row noGap>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_1
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_2
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_3
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_4
            </Box>
          </Col>
        </Row>
      </Card>
      <Card title="Flex layout with gap_2">
        <Row gap="gap_2">
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_1
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_2
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_3
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_4
            </Box>
          </Col>
        </Row>
        <Row gap="gap_2">
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_1
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_2
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_3
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_4
            </Box>
          </Col>
        </Row>
        <Row gap="gap_2">
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_1
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_2
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} className="bg-color-w300">
              Flex 4_3
            </Box>
          </Col>
          <Col>
            <Box m={0} p={2} p="2" className="bg-color-w300">
              Flex 4_4
            </Box>
          </Col>
        </Row>
      </Card>
    </Page>
  );
};
