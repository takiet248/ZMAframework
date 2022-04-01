import React from "react";
import {
  Page,
  Card,
  Navbar,
  List,
  ListInput,
  Button,
  Box,
  zmp,
} from "zmp-framework/react";

export default () => {
  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    console.log(zmp.form.convertToData("#my-form"));
  };

  const handleFillForm = (e) => {
    e.preventDefault();
    zmp.form.fillFromData("#my-form", {
      fullName: "John",
      age: 20,
      password: "Aa123456",
      city: 2,
    });
  };

  return (
    <Page className="page-inputs page-with-navbar">
      <Box>
        <Card inset title="Form">
          <List
            style={{ listStyle: "none" }}
            form
            id="my-form"
            onSubmit={handleOnSubmitForm}
            noHairlines
          >
            <ListInput
              label="Full name"
              type="text"
              placeholder="Enter your full name"
              clearButton
              info="Your full name"
              name="fullName"
              pattern="^[a-zA-Z]{2,30}$"
              required
              errorMessage="Invalid"
              validate
            ></ListInput>
            <ListInput
              label="Age"
              type="number"
              min={1}
              placeholder="Enter your age"
              clearButton
              required
              name="age"
              validate
            ></ListInput>
            <ListInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              clearButton
              required
              info="Password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
              name="password"
              errorMessage="Password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$"
              validate
            ></ListInput>
            <ListInput
              label="City"
              type="select"
              placeholder="Select your city"
              name="city"
              validate
            >
              <option value="1">Hồ Chí Minh</option>
              <option value="2">Hà Nội</option>
            </ListInput>
            <Box>
              <Button type="submit" typeName="secondary" responsive>
                Get Form Data
              </Button>
            </Box>
            <Box>
              <Button typeName="secondary" responsive onClick={handleFillForm}>
                Fill Form
              </Button>
            </Box>
          </List>
        </Card>
      </Box>
    </Page>
  );
};
