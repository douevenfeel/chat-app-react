import type { StateSchema } from 'app/providers/StoreProvider';

export const getChatsData = (state: StateSchema) => state.chats?.data;
