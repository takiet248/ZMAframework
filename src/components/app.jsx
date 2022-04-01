import React from "react";
import { App, View } from "zmp-framework/react";
import store from "../store.js";

const MyApp = () => {
  // ZMP Parameters
  const zmpparams = {
    name: "ZMP Framework", // App name
    theme: "ios", // Automatic theme detection
    // App store
    store: store
  };

  return (
    <App {...zmpparams}>
      {/* Your main view, should have "view-main" class */}
      <View className="safe-areas" preloadPreviousPage={false} url="/" />
    </App>
  );
};
export default MyApp;
