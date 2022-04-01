import React, { useState } from "react";
import {
  Page,
  Icon,
  Button,
  Fab,
  Navbar,
  Card,
  Box,
} from "zmp-framework/react";

export const BUTTON_TYPE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DESTRUCTIVE: "destructive",
  TERTIARY: "tertiary",
  GHOST: "ghost",
};

export default () => {
  const [selectedType, setSelectedType] = useState(BUTTON_TYPE.PRIMARY);

  const onClickChooseButtonType = (type) => {
    setSelectedType(type);
  };

  return (
    <Page className="page-buttons">
      <Box flex flexDirection="row" flexWrap>
        <Box>
          <Button
            className="filter-button"
            typeName="primary"
            onClick={() => onClickChooseButtonType(BUTTON_TYPE.PRIMARY)}
          >
            Primary
          </Button>
        </Box>
        <Box>
          <Button
            className="filter-button"
            typeName="secondary"
            onClick={() => onClickChooseButtonType(BUTTON_TYPE.SECONDARY)}
          >
            Secondary
          </Button>
        </Box>
        <Box>
          <Button
            className="filter-button"
            typeName="destructive"
            onClick={() => onClickChooseButtonType(BUTTON_TYPE.DESTRUCTIVE)}
          >
            Destructive
          </Button>
        </Box>
        <Box>
          <Button
            className="filter-button"
            typeName="tertiary"
            onClick={() => onClickChooseButtonType(BUTTON_TYPE.TERTIARY)}
          >
            Tertiary
          </Button>
        </Box>
        <Box>
          <Button
            className="filter-button"
            typeName="ghost"
            onClick={() => onClickChooseButtonType(BUTTON_TYPE.GHOST)}
          >
            Button link
          </Button>
        </Box>
      </Box>
      <div className="main-content">
        <div className="variant-title">Variant of Button: {selectedType}</div>
      </div>
      <Box>
        <Card title="Small" inset>
          <div>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} small conZMP="zi-close">
                Normal
              </Button>
            </Box>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} small>
                Normal
              </Button>
            </Box>
          </div>
          <div>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} disabled small iconZMP="zi-close">
                Normal
              </Button>
            </Box>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} disabled small>
                Normal
              </Button>
            </Box>
          </div>
        </Card>
      </Box>
      <Box>
        <Card title="Medium" inset>
          <div>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} iconZMP="zi-close">
                Normal
              </Button>
            </Box>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType}>Normal</Button>
            </Box>
          </div>
          <div>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} disabled iconZMP="zi-close">
                Normal
              </Button>
            </Box>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} disabled>
                Normal
              </Button>
            </Box>
          </div>
        </Card>
      </Box>
      <Box>
        <Card inset title="Large">
          <div>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} large iconZMP="zi-close">
                Normal
              </Button>
            </Box>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} large>
                Normal
              </Button>
            </Box>
          </div>
          <div>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} large disabled iconZMP="zi-close">
                Normal
              </Button>
            </Box>
            <Box inline mt="0" mb="2">
              <Button typeName={selectedType} large disabled>
                Normal
              </Button>
            </Box>
          </div>
        </Card>
      </Box>
      <Box>
        <Card title="Responsive" inset>
          <Box mt="0" mb="2">
            <Button responsive typeName={selectedType} large iconZMP="zi-close">
              Normal
            </Button>
          </Box>
          <Box mt="0" mb="2">
            <Button responsive typeName={selectedType} large>
              Normal
            </Button>
          </Box>
          <Box mt="0" mb="2">
            <Button
              responsive
              typeName={selectedType}
              large
              disabled
              iconZMP="zi-close"
            >
              Normal
            </Button>
          </Box>
          <Box mt="0" mb="2">
            <Button responsive typeName={selectedType} large disabled>
              Normal
            </Button>
          </Box>
        </Card>
      </Box>
      <Fab large position="right-bottom" slot="fixed" bgColor="lg-300 ">
        <Icon zmp="zi-add-user-solid" />
      </Fab>
    </Page>
  );
};
