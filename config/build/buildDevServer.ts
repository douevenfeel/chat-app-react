import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import type { BuildOptions } from './types/buildOptions';

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => ({
    port,
    open: true,
    hot: true,
    historyApiFallback: true,
});
