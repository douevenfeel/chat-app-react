import type { StateSchema } from 'app/providers/StoreProvider';

export const getRegistrationSuccessEmail = (state: StateSchema) => state.registration?.successEmail;
