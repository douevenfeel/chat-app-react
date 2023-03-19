import type { StateSchema } from 'app/providers/StoreProvider';

export const getProfileUpdateInfoLastName = (state: StateSchema) => state.profile?.updateInfoForm.lastName;
