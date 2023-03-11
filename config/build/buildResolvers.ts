import { BuildOptions } from './types/buildOptions';
import { ResolveOptions } from 'webpack';

export const buildResolvers = ({ paths }: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
};
