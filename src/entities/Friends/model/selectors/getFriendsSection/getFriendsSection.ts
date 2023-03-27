import type { StateSchema } from 'app/providers/StoreProvider';

export const getFriendsSection = (state: StateSchema) => state.friends?.section;
