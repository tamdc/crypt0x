import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
  root: "src",
  plugins: [
    babel({
      babelConfig: {
        presets: ["@babel/preset-react"],
      },
      exclude: /node_modules/,
    }),
  ],
});
