import path from 'path';

import type { Configuration } from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import type { BuildEnv, BuildMode, BuildOptions, BuildPaths } from './config/build/types/buildOptions';

export default (env: BuildEnv): Configuration => {
    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.port || 3000;
    const api = env.api || 'http://localhost:5000';
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        favicon: path.resolve(__dirname, 'public', 'favicon.svg'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
    };
    const options: BuildOptions = { isDev, mode, paths, port, api, project: 'frontend' };

    return buildWebpackConfig(options);
};
