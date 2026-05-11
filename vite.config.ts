import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/dolarito-proxy": {
        target: "https://www.dolarito.ar",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dolarito-proxy/, ""),
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
  },
});
