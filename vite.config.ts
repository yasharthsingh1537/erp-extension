import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.config.ts";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  crx({
    manifest
  })
  ],
  resolve: {
    alias: {
      "@":path.resolve(__dirname,"./src"),
    }
  }
});
