import type { StateSchema } from 'app/providers/StoreProvider';

export const getRegistrationFirstName = (state: StateSchema) => state.registration?.firstName;
