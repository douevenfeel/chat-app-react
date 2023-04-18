import type { User } from 'shared/types/User';

export interface UpdateProfileInfo {
    firstName: string;
    lastName: string;
}

export interface ProfileSchema {
    data?: User;
    updateInfoForm: UpdateProfileInfo;
    isLoading: boolean;
    isUpdatingInfo: boolean;
    error?: string;
}
