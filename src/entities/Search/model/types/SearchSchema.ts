import type { User } from 'shared/types/User';

export interface SearchData {
    users: User[];
    posts: [];
    communities: [];
    musics: [];
    videos: [];
}

export interface SearchCounts {
    users: number;
    posts: number;
    communities: number;
    musics: number;
    videos: number;
}

export type SearchSection = 'all' | 'users' | 'posts' | 'communities' | 'musics' | 'videos';

export interface SearchSchema {
    data?: SearchData;
    counts?: SearchCounts;
    q: string;
    section: SearchSection;
    isLoading: boolean;
    error?: string;
}

export interface SearchResponse {
    data: SearchData;
    counts: SearchCounts;
}
