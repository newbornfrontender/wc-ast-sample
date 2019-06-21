module.exports = {
  presets: ['@babel/env'],
  plugins: [
    ['@babel/proposal-class-properties', { loose: true }],
    ['@babel/proposal-private-methods', { loose: true }],
  ],
};
