import type { StateSchema } from 'app/providers/StoreProvider';

export const getFriendsFriendStatus = (state: StateSchema) => state.friends?.friendStatus;
