import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: "/",
    plugins: [react()],
    define: {
      "process.env": process.env,
    },
    preview: {
      strictPort: true,
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
    server: {
      strictPort: true,
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  });
};
