import { transformSync } from '@babel/core';

export default () => ({
  name: 'rollup-plugin-babel',

  transform(source, id) {
    const { code } = transformSync(source, {
      filename: id,
      caller: {
        name: 'rollup-plugin-babel',
        supportsStaticESM: true,
        // supportsDynamicImport: true,
      },
    });

    return {
      code,
      map: { mappings: '' },
    };
  },
});
