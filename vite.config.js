import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dynamicImport from "@rollup/plugin-dynamic-import-vars";
// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [reactRefresh()],
    build: {
      rollupOptions: {
        plugins: [dynamicImport()]
      }
    }
  });
};
