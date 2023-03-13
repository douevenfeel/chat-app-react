import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationFirstName = (state: StateSchema) => state.registration?.firstName;
