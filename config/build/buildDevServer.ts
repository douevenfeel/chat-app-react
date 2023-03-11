import { BuildOptions } from './types/buildOptions';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => ({
    port,
    open: true,
    hot: true,
    historyApiFallback: true,
});
