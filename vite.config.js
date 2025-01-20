import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path"
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportAsDefault: true
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Project root directory (where index.html is located).
  root: "./",
  // Where to output the built files
  build: {
    outDir: "dist",
  },
  // Base public path when served in development or production.
  base: "/",
  reactStrictMode: false,
  // Server-specific options
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
});
