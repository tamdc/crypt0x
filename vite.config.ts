import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
  root: "src",
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    babel({
      babelConfig: {
        presets: ["@babel/preset-react"],
      },
      exclude: /node_modules/,
    }),
  ],
});
