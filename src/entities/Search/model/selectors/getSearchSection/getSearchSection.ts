import type { StateSchema } from 'app/providers/StoreProvider';

export const getSearchSection = (state: StateSchema) => state.search?.section;
