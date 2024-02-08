import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  server: {
    host: true,
    proxy: {
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      "/api": {
        target: "http://localhost:2999",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  base: "./",
});
