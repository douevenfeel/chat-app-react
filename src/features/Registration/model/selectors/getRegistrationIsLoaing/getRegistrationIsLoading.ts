import type { StateSchema } from 'app/providers/StoreProvider';

export const getRegistrationIsLoading = (state: StateSchema) => state.registration?.isLoading;
