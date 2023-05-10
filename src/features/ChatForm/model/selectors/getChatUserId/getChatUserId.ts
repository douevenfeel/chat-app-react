import type { StateSchema } from 'app/providers/StoreProvider';

export const getChatUserId = (state: StateSchema) => state.chat?.data?.user.id;
