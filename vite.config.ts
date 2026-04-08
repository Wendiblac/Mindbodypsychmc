import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const htmlEntries = Object.fromEntries(
  readdirSync(__dirname)
    .filter((file) => file.endsWith(".html"))
    .map((file) => [file.replace(/\.html$/, ""), resolve(__dirname, file)]),
);

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: htmlEntries,
    },
  },
});
