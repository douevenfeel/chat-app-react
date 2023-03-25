import type { StateSchema } from 'app/providers/StoreProvider';

export const getFriendsIsLoading = (state: StateSchema) => state.friends?.isLoading;
