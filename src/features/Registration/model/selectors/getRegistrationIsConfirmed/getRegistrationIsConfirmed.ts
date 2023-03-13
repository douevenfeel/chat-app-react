import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationIsConfirmed = (state: StateSchema) => state.registration?.isConfirmed;
