import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["axios", "chunk-HKLPI2XQ.js", "chunk-YI7ZP7WZ.js"],
  },
});
