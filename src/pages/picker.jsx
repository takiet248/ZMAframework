import React from "react";
import { Page, Card, Navbar, Picker, Box } from "zmp-framework/react";

const datePickerData = [
  {
    // Năm
    values: (function createValues() {
      const arr = [];
      for (let i = 1950; i <= 2030; i += 1) {
        arr.push(i);
      }
      return arr;
    })()
  },
  // Tháng
  {
    values: "0 1 2 3 4 5 6 7 8 9 10 11".split(" "),
    displayValues: "January February March April May June July August September October November December".split(
      " "
    )
  },
  // Ngày
  {
    values: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
  }
];
export default () => {
  const handleChangeDate = (picker, values) => {
    const daysInMonth = new Date(
      picker.value[0],
      picker.value[1] * 1 + 1,
      0
    ).getDate();
    if (values[2] > daysInMonth) {
      picker.cols[2].setValue(daysInMonth);
    }
  };

  return (
    <Page className="page-picker">
      <Navbar title="Picker" />
      <Card title="Picker" inset>
        <Box>
          <Picker
            placeholder="Single column selector"
            title="Single column selector"
            defaultSelect={["3"]}
            label="Single column selector "
            data={[
              {
                textAlign: "center",
                values: ["1", "2", "3", "4", "5", "6", "7", "8"],
                displayValues: [
                  "Taxi ticket",
                  "Taxi ticket",
                  "Taxi ticket",
                  "Taxi ticket",
                  "Taxi ticket",
                  "Taxi ticket",
                  "Taxi ticket",
                  "Taxi ticket"
                ]
              }
            ]}
            formatValue={(values, displayValues) => {
              return `${displayValues[0]}`;
            }}
            inputId="custom-picker-1"
          />
        </Box>
        <Box>
          <Picker
            placeholder="Multi column selector"
            label="Multi column selector"
            info="Picker info"
            title="Multi column selector"
            data={datePickerData}
            inputId="custom-picker-2"
            onChange={handleChangeDate}
            formatValue={(values, displayValues) => {
              return `${displayValues[1]} ${displayValues[2]},${displayValues[0]}`;
            }}
          />
        </Box>
      </Card>
    </Page>
  );
};
