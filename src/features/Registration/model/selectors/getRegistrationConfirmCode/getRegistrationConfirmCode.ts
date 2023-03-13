import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationConfirmCode = (state: StateSchema) => state.registration?.confirmCode;
