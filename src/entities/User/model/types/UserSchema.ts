export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface UserSchema {
    data?: User;
    isChecked: boolean;
}

export interface CheckoutData {
    user: User;
    accessToken: string;
}
