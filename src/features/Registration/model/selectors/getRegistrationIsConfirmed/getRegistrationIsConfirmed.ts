import type { StateSchema } from 'app/providers/StoreProvider';

export const getRegistrationIsConfirmed = (state: StateSchema) => state.registration?.isConfirmed;
