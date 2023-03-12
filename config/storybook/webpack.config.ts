import path from 'path';

import type { Configuration, RuleSetRule } from 'webpack';
import { DefinePlugin } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import type { BuildPaths } from '../build/types/buildOptions';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        output: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    const rules = config!.module!.rules as RuleSetRule[];

    config!.module!.rules = rules.map((rule) =>
        /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule
    );
    config!.module!.rules.push(buildSvgLoader());
    config!.resolve!.modules = [paths.src, 'node_modules'];
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.module!.rules!.push(buildCssLoader(true));
    config!.plugins!.push(new DefinePlugin({ __IS_DEV__: true }));

    return config;
};
