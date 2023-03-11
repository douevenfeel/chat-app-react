export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export type BuildMode = 'development' | 'production';

export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
    isDev: boolean;
    port: number;
}
