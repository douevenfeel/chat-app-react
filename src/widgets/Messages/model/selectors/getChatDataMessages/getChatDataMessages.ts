import type { StateSchema } from 'app/providers/StoreProvider';

export const getChatDataMessages = (state: StateSchema) => state.chat?.data?.messages;
