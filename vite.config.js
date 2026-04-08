import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
var htmlEntries = Object.fromEntries(readdirSync(__dirname)
    .filter(function (file) { return file.endsWith(".html"); })
    .map(function (file) { return [file.replace(/\.html$/, ""), resolve(__dirname, file)]; }));
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: htmlEntries,
        },
    },
});
