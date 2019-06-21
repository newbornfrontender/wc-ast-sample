module.exports = ({ isProd }) => ({
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      autoprefixer: isProd,
    },
  },
});
