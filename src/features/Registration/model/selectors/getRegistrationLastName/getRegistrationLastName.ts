import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationLastName = (state: StateSchema) => state.registration?.lastName;
