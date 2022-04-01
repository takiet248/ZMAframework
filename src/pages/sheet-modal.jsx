import React, { useState, useRef } from "react";
import {
  Page,
  Navbar,
  Card,
  Sheet,
  Button,
  Box,
  Text,
  Title
} from "zmp-framework/react";

export default () => {
  const [customSheetOpened, setCustomSheetOpened] = useState(false);
  const sheet = useRef(null);
  const swipeRef = useRef(null);

  const openSheet = () => {
    if (sheet.current) {
      sheet.current.zmpSheet().open();
    }
  };

  const openSwipeToStepSheet = () => {
    if (swipeRef.current) {
      swipeRef.current.zmpSheet().open();
    }
  };

  const onCollapseStep = () => {
    if (swipeRef.current) {
      swipeRef.current.zmpSheet().stepClose();
    }
  };

  return (
    <Page className="page-sheet-modal">
      <Navbar title="Searchbar"></Navbar>
      <Card inset title="Sheet modal">
        <Box>
          <Button
            typeName="secondary"
            onClick={() => setCustomSheetOpened(true)}
            fill
          >
            Sheet Modal
          </Button>
        </Box>
        <Box>
          <Button typeName="secondary" onClick={openSheet}>
            Open sheet by api
          </Button>
        </Box>
        <Box>
          <Button onClick={openSwipeToStepSheet} typeName="secondary">
            Swipe to step
          </Button>
        </Box>
      </Card>
      <Sheet
        ref={sheet}
        swipeToClose
        opened={customSheetOpened}
        backdrop
        onSheetClosed={() => setCustomSheetOpened(false)}
        closeButton
        title="ActionSheet Custom"
        subtitle="Multi column selector"
        className="demo-custom-sheet"
      >
        <Box p={4}>
          <Title>
            Auxiliary description content can be arranged according to actual
            needs
          </Title>
          <Text>
            Auxiliary description content can be arranged according to actual
            needs
          </Text>
          <Box mx={0}>
            <Button typeName="secondary" responsive>
              Secondary
            </Button>
          </Box>
          <Box mx={0}>
            <Button typeName="primary" responsive>
              Button
            </Button>
          </Box>
        </Box>
      </Sheet>
      <Sheet
        ref={swipeRef}
        swipeToStep
        swipeToClose
        backdrop
        closeButton
        title="ActionSheet Custom"
        subtitle="Multi column selector"
        className="demo-swipe-to-step-sheet"
      >
        <Box p={4} className="sheet-modal-swipe-step">
          <div>
            Auxiliary description content can be arranged according to actual
            needs
          </div>
          <div>
            Auxiliary description content can be arranged according to actual
            needs
          </div>
          <Text size="xxxsmall">Swipe to open next step</Text>
        </Box>
        <Box px={4}>
          <Button typeName="secondary" responsive>
            Secondary
          </Button>
        </Box>
        <Box px={4}>
          <Button typeName="primary" onClick={onCollapseStep} responsive>
            Collapse
          </Button>
        </Box>
      </Sheet>
    </Page>
  );
};
