import type { StateSchema } from 'app/providers/StoreProvider';

export const getProfileIsUpdatingInfo = (state: StateSchema) => state.profile?.isUpdatingInfo;
