import type { SearchSection } from 'entities/Search';

export interface SearchSidebarSchema {
    title: string;
    count: number;
    value: SearchSection;
}
