import type { StateSchema } from 'app/providers/StoreProvider';

export const getChatId = (state: StateSchema) => state.chat?.data?.id;
