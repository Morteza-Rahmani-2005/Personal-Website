import { defineConfig } from "vite";

/** GitHub Pages project site: https://<user>.github.io/<repo>/ */
const base = process.env.VITE_BASE || "/";

export default defineConfig({
  base,
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
