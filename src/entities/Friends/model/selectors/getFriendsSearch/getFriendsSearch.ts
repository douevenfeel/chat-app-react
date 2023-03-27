import type { StateSchema } from 'app/providers/StoreProvider';

export const getFriendsSearch = (state: StateSchema) => state.friends?.search;
