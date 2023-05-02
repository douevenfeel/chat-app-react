import type { StateSchema } from 'app/providers/StoreProvider';

export const getSearchData = (state: StateSchema) => state.search?.data;
