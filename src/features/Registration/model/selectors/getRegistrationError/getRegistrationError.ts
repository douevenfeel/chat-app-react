import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationError = (state: StateSchema) => state.registration?.error;
