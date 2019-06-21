import { walk } from 'estree-walker';
import { generate } from 'astring';
import postcss from 'postcss';
import postcssrc from 'postcss-load-config';

// import { log } from './utils/console';
import deasync from './utils/deasync';

export default (ctx) => ({
  name: 'rollup-plugin-postcss',

  transform(code) {
    const ast = this.parse(code);

    walk(ast, {
      enter(node) {
        // log(node);

        if (node.type === 'TaggedTemplateExpression' && node.tag.name === 'css') {
          // log(node);

          walk(node.quasi.quasis, {
            enter(node) {
              // log(node);

              if (node.type === 'TemplateElement') {
                // log(node);

                const { raw } = node.value;
                const { plugins, options } = deasync(postcssrc(ctx));
                const { css } = deasync(
                  postcss(plugins).process(raw, { ...options, from: undefined }),
                );

                node.value.raw = css;
              }
            },
          });
        }
      },
    });

    return {
      code: generate(ast),
      map: { mappings: '' },
    };
  },
});
