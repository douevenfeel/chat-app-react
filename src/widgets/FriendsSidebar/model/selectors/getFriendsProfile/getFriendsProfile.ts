import type { StateSchema } from 'app/providers/StoreProvider';

export const getFriendsProfile = (state: StateSchema) => state.friends?.profile;
