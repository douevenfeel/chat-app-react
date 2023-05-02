import type { StateSchema } from 'app/providers/StoreProvider';

export const getSearchQ = (state: StateSchema) => state.search?.q;
