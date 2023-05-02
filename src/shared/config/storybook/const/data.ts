import type { AvatarVariant } from 'shared/types/AvatarVariant';
import type { User } from 'shared/types/User';

export const id = 1;
export const avatar: AvatarVariant = 'blue';
export const confirmCode = 'a1b2c3';
export const email = 'test@mail.ru';
export const successEmail = email;
export const firstName = 'firstName';
export const lastName = 'lastName';
export const password = 'qwerty';
export const error = 'error';
export const lastSeen = (online: boolean) => {
    const date = Date.now();
    if (!online) {
        return String(date - 300000);
    }

    return String(date);
};
export const user: User = {
    id,
    avatar,
    email,
    firstName,
    lastName,
    lastSeen: lastSeen(true),
};
export const counts = { friends: 16, onlineFriends: 8, incomingRequests: 4, outcomingRequests: 2 };
