import React, { useRef } from "react";
import {
  zmp,
  App,
  View,
  Page,
  Navbar,
  Card,
  Button,
  Box
} from "zmp-framework/react";

export default () => {
  const toast = useRef(null);
  const topToast = useRef(null);

  const openToast = (pos) => {
    // Tạo toast
    switch (pos) {
      case "top":
        if (!topToast.current) {
          topToast.current = zmp.toast.create({
            text: "Toast message",
            position: "top",
            closeTimeout: 2000
          });
        }
        // Mở
        topToast.current.open();
        break;
      default: {
        if (!toast.current) {
          toast.current = zmp.toast.create({
            text: "Toast message",
            position: "bottom",
            closeTimeout: 2000
          });
        }
        // Mở
        toast.current.open();
      }
    }
  };

  const onPageBeforeOut = () => {
    if (toast.current) {
      toast.current.close();
      toast.current.destroy();
    }
    if (topToast.current) {
      topToast.current.close();
      topToast.current.destroy();
    }
  };
  return (
    <Page onPageBeforeOut={onPageBeforeOut} className="page-toast-demo">
      <Navbar title="Toast" backLink></Navbar>
      <Card inset title="Toast">
        <Box>
          <Button responsive typeName="secondary" onClick={openToast}>
            Bottom Toast
          </Button>
        </Box>
        <Box>
          <Button
            responsive
            typeName="secondary"
            onClick={() => openToast("top")}
          >
            Top Toast
          </Button>
        </Box>
      </Card>
    </Page>
  );
};
