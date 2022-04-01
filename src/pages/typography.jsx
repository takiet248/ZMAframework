import React from "react";
import { Page, Card, Navbar, Box, Text, Title } from "zmp-framework/react";

const textSize = ["xxxsmall", "xxsmall", "xsmall", "small", "normal", "large"];
const titleSize = ["xsmall", "small", "normal", "large", "xlarge"];

const Tag = ({ children }) => (
  <span
    className="r-round bg-color-bl300 text-color-white"
    style={{
      padding: "4px 8px",
      marginBottom: "4px",
      display: "inline-block"
    }}
  >
    {children}
  </span>
);
export default () => {
  return (
    <Page className="page-box page-with-navbar">
      <Navbar backLink />
      <Card inset title="Text">
        {textSize.map((s) => (
          <Box key={s} mb="4">
            <Tag>{s}</Tag>
            <Text size={s}>
              Người hâm mộ điện ảnh Việt Nam bước đầu đã khôi phục thói quen
              thưởng thức điện ảnh, giúp rạp chiếu phim dịp cuối tuần bớt cảnh
              đìu hiu.
            </Text>
          </Box>
        ))}
      </Card>
      <Card inset title="Title">
        {titleSize.map((s) => (
          <Box key={s}>
            <Tag>{s}</Tag>
            <Title size={s}>
              Tiệc trăng máu' thu 43 tỷ đồng, phim Việt có cần giải cứu?
            </Title>
          </Box>
        ))}
      </Card>
    </Page>
  );
};
