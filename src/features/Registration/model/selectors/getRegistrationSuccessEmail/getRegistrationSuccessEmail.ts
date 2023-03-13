import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationSuccessEmail = (state: StateSchema) => state.registration?.successEmail;
