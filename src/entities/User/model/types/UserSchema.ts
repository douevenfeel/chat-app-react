export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface UserSchema {
    data?: User;
}
