import type { StateSchema } from 'app/providers/StoreProvider';

export const getProfileDataId = (state: StateSchema) => state.profile?.data?.id;
