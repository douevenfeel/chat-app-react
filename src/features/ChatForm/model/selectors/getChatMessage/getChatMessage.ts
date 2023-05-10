import type { StateSchema } from 'app/providers/StoreProvider';

export const getChatMessage = (state: StateSchema) => state.chat?.message;
