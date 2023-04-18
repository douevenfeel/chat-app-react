import type { User } from 'shared/types/User';

export interface UserSchema {
    data?: User;
    isChecked: boolean;
}

export interface CheckoutData {
    user: User;
    accessToken: string;
}
