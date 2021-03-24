import telescope from "./_directive";

const plugin = {
  install: (app, options) => {
    app.directive("telescope", telescope(options));
  },
};

export default plugin;
