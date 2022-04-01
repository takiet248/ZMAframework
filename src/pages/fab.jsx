import React, { useState, useRef, useEffect } from "react";
import {
  Page,
  Card,
  Navbar,
  Box,
  Fab,
  Icon,
  FabBackdrop,
  Actions,
  ActionsGroup,
  ActionsLabel,
  ActionsButton,
  FabButton,
  FabButtons,
  zmp,
} from "zmp-framework/react";

export default () => {
  const [actionSheetOpened, setActionSheetOpened] = useState(false);
  const dialog = useRef({});

  useEffect(() => {
    dialog.current = zmp.dialog.create({
      title: "Popup Title",
      content:
        "The content of the pop-up window informs you of the current status, information and solutions",
      buttons: [
        {
          text: "Main Action",
        },
      ],
    });
  }, []);

  const handleOpenDialog = () => {
    dialog.current.open();
  };

  return (
    <Page className="page-box page-with-navbar">
      <Box>
        <Card inset title="Lorem ipsum dolor sit amet">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim
          eget enim quis congue. Aenean mollis mauris vitae vehicula posuere.
          Aenean nunc ipsum, vestibulum vitae dignissim a, porta quis quam.
          Donec efficitur tincidunt diam ac ullamcorper. Aliquam condimentum
          odio non tempor vestibulum. Donec dictum nibh vitae nunc hendrerit
          commodo. Nullam ac neque nec nunc finibus pellentesque in condimentum
          dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Proin finibus congue sapien, ut dictum arcu facilisis vitae. In
          sollicitudin faucibus diam a porttitor. Etiam enim dui, tincidunt a
          nulla at, ornare aliquam lacus. Mauris finibus, lorem a ultrices
          tempus, sapien ipsum viverra justo, id aliquet lectus ante a justo.
          Integer lacinia, neque nec tincidunt vestibulum, risus leo posuere
          diam, a congue elit orci sed dui. Nam id varius ante, et fringilla
          enim. Sed gravida ligula blandit, tempus elit non, pulvinar arcu.
          Aliquam ultricies, diam ac volutpat elementum, leo mauris pharetra
          nibh, quis tristique leo sem nec odio. Aliquam a rutrum nunc. Quisque
          magna neque, iaculis at lectus ac, porta bibendum orci. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Maecenas molestie mi et leo congue efficitur. In a sapien
          sit amet arcu tincidunt commodo. Integer aliquam mi ac tortor
          consequat, sed egestas felis feugiat. Proin dapibus tortor a diam
          varius, malesuada ullamcorper erat aliquam. Fusce condimentum lacinia
          lacus, a consectetur nunc gravida nec. Sed ac urna vitae dui pulvinar
          egestas id in justo. Vivamus ac justo semper, auctor orci non,
          tincidunt est. Donec in nibh eget sem lobortis vulputate hendrerit
          quis erat. Pellentesque quis lacus porta justo egestas bibendum.
        </Card>
      </Box>
      {/* remove this line if dont want to have an overlay layer under FAB */}
      <FabBackdrop slot="fixed" style={{ zIndex: 1400 }} />
      <Fab position="left-bottom" slot="fixed" text="Create">
        <Icon zmp="zi-plus"></Icon>
        <FabButtons position="top">
          <FabButton fabClose label="Close">
            <Icon zmp="zi-close-circle-solid" />
          </FabButton>
          <FabButton fabClose onClick={handleOpenDialog} label="Open Dialog">
            <Icon zmp="zi-info-circle-solid" />
          </FabButton>
        </FabButtons>
      </Fab>

      <Fab
        tooltip="This is FAB"
        onClick={() => setActionSheetOpened(true)}
        large
        position="right-bottom"
        slot="fixed"
      >
        <Icon zmp="zi-add-user-solid" />
      </Fab>
      <Actions
        opened={actionSheetOpened}
        onActionsClosed={() => setActionSheetOpened(false)}
        closeByBackdropClick
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
          <ActionsButton close>Cancel</ActionsButton>
        </ActionsGroup>
      </Actions>
    </Page>
  );
};
