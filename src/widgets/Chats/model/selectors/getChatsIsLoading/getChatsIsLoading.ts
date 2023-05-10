import type { StateSchema } from 'app/providers/StoreProvider';

export const getChatsIsLoading = (state: StateSchema) => state.chats?.isLoading;
