import React from "react";
import { Page, Card, Box, DatePicker, List, Title } from "zmp-framework/react";

export default () => {
  return (
    <Page>
      <Card inset title="Date Picker">
        <List>
          <Box>
            <Title size="xsmall">Types</Title>
          </Box>
          <Box my={0}>
            <DatePicker
              label="Date Picker"
              clearButton
              startYear={2000}
              endYear={2030}
              listInput
            />
          </Box>

          {/* DateTime picker 24 giờ */}
          <Box my={0}>
            <DatePicker
              dateTimePicker
              clearButton
              label="Date time picker 24 hours"
              dateFormat="HH::mm, dd-mm-yyyy"
              minStep={5}
              is24Hours
              listInput
              onChange={(date) => {
                console.log({ date });
              }}
            />
          </Box>

          {/* DateTime picker 12 giờ */}
          <Box my={0}>
            <DatePicker
              dateTimePicker
              label="Date time picker 12 hours"
              listInput
            />
          </Box>
          <Box>
            <Title size="xsmall">Languages</Title>
          </Box>

          {/* Date picker ngôn ngữ tiếng Việt */}
          <Box my={0}>
            <DatePicker
              listInput
              label="Date picker Vietnamese"
              locale="vi"
              onChange={(val, displayVal) => {
                console.log({
                  date: val,
                  columnsValue: displayVal
                });
              }}
            />
          </Box>
          {/* Date picker ngôn ngữ tiếng Anh */}
          <Box my={0}>
            <DatePicker listInput label="Date picker English" locale="en-US" />
          </Box>
        </List>
      </Card>
    </Page>
  );
};
