module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            common: "./src/common",
            config: "./src/config",
            models: "./src/models",
            pages: "./src/pages",
            store: "./src/store",
          },
        },
      ],
    ],
  };
};
