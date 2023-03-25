export interface BuildEnv {
    mode: BuildMode;
    port: number;
    api: string;
}

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
    favicon: string;
}

export type BuildMode = 'development' | 'production';

export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
    isDev: boolean;
    port: number;
    api: string;
    project: 'frontend' | 'storybook' | 'jest';
}
