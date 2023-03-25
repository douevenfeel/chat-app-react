import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { WebpackPluginInstance } from 'webpack';
import { DefinePlugin, ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import type { BuildOptions } from './types/buildOptions';

export const buildPlugins = ({ paths, isDev, api, project }: BuildOptions): WebpackPluginInstance[] => {
    const plugins = [
        new HtmlWebpackPlugin({ template: paths.html, favicon: paths.favicon }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(api),
            __PROJECT__: JSON.stringify(project),
        }),
    ];

    if (isDev) plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));

    return plugins;
};
