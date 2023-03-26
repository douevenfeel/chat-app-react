import type { RuleSetRule } from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildTsLoader } from './loaders/buildTsLoader';
import type { BuildOptions } from './types/buildOptions';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const tsLoader = buildTsLoader();

    const cssLoader = buildCssLoader(isDev);

    const svgLoader = buildSvgLoader();

    const babelLoader = buildBabelLoader(isDev);

    return [svgLoader, cssLoader, babelLoader, tsLoader];
};
