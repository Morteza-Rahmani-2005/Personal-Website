import { defineConfig } from "vite";

/** GitHub Pages project site: https://<user>.github.io/<repo>/ */
const base = process.env.VITE_BASE || "/";

/** Avoid crossorigin on GH Pages (can block CSS/JS in some browsers). */
function stripCrossorigin() {
  return {
    name: "strip-crossorigin",
    transformIndexHtml(html) {
      return html.replace(/\s+crossorigin(="[^"]*")?/g, "");
    },
  };
}

export default defineConfig({
  base,
  root: ".",
  publicDir: "public",
  plugins: [stripCrossorigin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
