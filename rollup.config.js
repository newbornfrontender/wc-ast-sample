import resolve from 'rollup-plugin-node-resolve';

import babel from './plugins/babel';
import postcss from './plugins/postcss';

const isProd = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      modulesOnly: true,
      browser: true,
    }),
    babel(),
    postcss({
      isProd,
    }),
  ],
  treeshake: isProd,
  output: {
    format: 'esm',
    dir: 'public',
    preferConst: true,
  },
};
