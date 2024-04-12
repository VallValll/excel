module.exports = function(api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env', // Поддержка современного JavaScript
    '@babel/preset-react', // Поддержка JSX и React
    // Другие пресеты, если необходимо
  ];

  const plugins = [
    // Дополнительные плагины Babel, если необходимо
  ];

  return {
    presets,
    plugins,
  };
};
