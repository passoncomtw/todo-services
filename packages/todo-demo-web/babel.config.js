module.exports = function (api) {
    api.cache(true);
    return {
      presets: [],
      plugins: [
        [
          'babel-plugin-root-import',
          {
            rootPathPrefix: '~/',
            rootPathSuffix: './src/',
          },
        ],
      ],
    };
  };
  