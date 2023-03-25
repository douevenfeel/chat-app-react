import type { StateSchema } from 'app/providers/StoreProvider';

export const getFriendsError = (state: StateSchema) => state.friends?.error;
