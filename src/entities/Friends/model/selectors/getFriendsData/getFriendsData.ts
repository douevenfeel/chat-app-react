import type { StateSchema } from 'app/providers/StoreProvider';

export const getFriendsData = (state: StateSchema) => state.friends?.data;
