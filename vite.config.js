// vite.config.js
const path = require("path");
import vue from "@vitejs/plugin-vue";

module.exports = {
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.js"),
      name: "MyLib",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
};
