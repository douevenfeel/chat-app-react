import type { StateSchema } from 'app/providers/StoreProvider';

export const getSearchCounts = (state: StateSchema) => state.search?.counts;
