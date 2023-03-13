import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationPassword = (state: StateSchema) => state.registration?.password;
