import type { StateSchema } from 'app/providers/StoreProvider';

export const getFriendsProfileId = (state: StateSchema) => state.friends?.profile?.id;
