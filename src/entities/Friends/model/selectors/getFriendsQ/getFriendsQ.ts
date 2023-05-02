import type { StateSchema } from 'app/providers/StoreProvider';

export const getFriendsQ = (state: StateSchema) => state.friends?.q;
