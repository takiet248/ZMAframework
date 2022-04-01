import React, { useState } from "react";
import {
  Page,
  Navbar,
  Card,
  Preloader,
  ToastPreloader,
  Box,
  Button
} from "zmp-framework/react";

export default () => {
  const [toastLoading, setToastLoading] = useState(false);
  const [creating, setCreating] = useState(false);

  const openToastLoading = () => {
    setToastLoading(true);
    setTimeout(() => {
      setToastLoading(false);
    }, 2000);
  };

  const onCreate = () => {
    setCreating(true);
    setTimeout(() => {
      setCreating(false);
    }, 2000);
  };

  return (
    <Page className="page-demo-preloader">
      <Navbar title="Preloader"></Navbar>

      <Card inset title="Preloader">
        <Box my="4">
          <Button responsive typeName="secondary" onClick={onCreate}>
            {creating ? (
              <>
                <Preloader size="16" />
                <span className="ml-2">Creating</span>
              </>
            ) : (
              "Create"
            )}
          </Button>
        </Box>
        <Box my="4">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Preloader logo="zalo.png" />
          </div>
        </Box>
        <Box my="4">
          <Button responsive typeName="secondary" onClick={openToastLoading}>
            Open Toast Loading
          </Button>
        </Box>
        <ToastPreloader visible={toastLoading} text="Đang tải" />
      </Card>
    </Page>
  );
};
