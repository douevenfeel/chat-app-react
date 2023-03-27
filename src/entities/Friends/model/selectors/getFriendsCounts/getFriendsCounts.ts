import type { StateSchema } from 'app/providers/StoreProvider';

export const getFriendsCounts = (state: StateSchema) => state.friends?.counts;
