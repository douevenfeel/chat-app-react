import type { StateSchema } from 'app/providers/StoreProvider';

export const getChatDataUser = (state: StateSchema) => state.chat?.data?.user;
