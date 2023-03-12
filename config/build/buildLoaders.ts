import type { RuleSetRule } from 'webpack';

import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import type { BuildOptions } from './types/buildOptions';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(isDev);

    const svgLoader = buildSvgLoader();

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env']],
            },
        },
    };

    return [svgLoader, cssLoader, babelLoader, tsLoader];
};
