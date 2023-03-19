import type { StateSchema } from 'app/providers/StoreProvider';

export const getProfileUpdateInfoFirstName = (state: StateSchema) => state.profile?.updateInfoForm.firstName;
