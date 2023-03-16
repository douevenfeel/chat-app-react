import type { StateSchema } from 'app/providers/StoreProvider';

export const getRegistrationConfirmCode = (state: StateSchema) => state.registration?.confirmCode;
