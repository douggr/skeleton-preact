/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

import { DefinePlugin, WatchIgnorePlugin } from 'webpack';
import resolveEnvVars from 'resolve-env-vars';
import TerserPlugin from 'terser-webpack-plugin';

/**
 * Mutates original webpack config
 *
 * @param {object} config original webpack config.
 * @param {object} env options passed to CLI.
 * @param {WebpackConfigHelpers} helpers object with useful
 *    helpers when working with config.
 *
 * @returns {object} modified webpack config
 */
export default function(config, env, helpers) {
  const { mode } = config;

  helpers.getLoadersByName(config, 'css-loader').forEach(({ loader }) => {
    loader.loader = 'typings-for-css-modules-loader';
    loader.options = Object.assign(loader.options, {
      camelCase: true,
      localIdentName: 'dl2__[hash:base64:8]',
      module: true,
      namedExport: true,
      silent: false,
    });
  });

  if (mode === 'production' && !!config.optimization.minimizer) {
    config.optimization.minimizer.map((minimizer) => {
      if (minimizer instanceof TerserPlugin) {
        Object.assign(minimizer.options, {
          sourceMap: false,
          terserOptions: {
            extractComments: 'all',
            compress: {
              drop_console: true,
            },
          },
        });
      }
    });
  }

  const { stringified } = resolveEnvVars('DL2_');
  config.plugins.push(new DefinePlugin(stringified));
  config.plugins.push(new WatchIgnorePlugin([/css.d.ts$/]));

  return config;
}
