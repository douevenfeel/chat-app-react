import type { StateSchema } from 'app/providers/StoreProvider';

export const getUserIsChecked = (state: StateSchema) => state.user.isChecked;
