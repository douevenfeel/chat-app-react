import type { FriendsCounts } from 'entities/Friends';
import type { AvatarVariant } from 'shared/types/AvatarVariant';
import type { Message } from 'shared/types/Message';
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
export const otherUser: User = {
    id: 2,
    avatar: 'red',
    email: 'test@test.ru',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    lastSeen: lastSeen(true),
};
export const friendsCounts: FriendsCounts = {
    friends: 16,
    onlineFriends: 8,
    incomingRequests: 4,
    outcomingRequests: 2,
};

export const message = {
    id: 3,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, voluptates unde! Explicabo quasi veritatis commodi doloribus. Soluta repellendus accusamus magnam.',
    user,
    createdAt: String(new Date()),
};

export const messages: Message[] = [
    { id: 1, text: 'Hello world!', user, createdAt: String(new Date()) },
    { id: 2, text: 'Hello world!', user: otherUser, createdAt: String(new Date()) },
    {
        id: 3,
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, voluptates unde! Explicabo quasi veritatis commodi doloribus. Soluta repellendus accusamus magnam.',
        user: otherUser,
        createdAt: String(new Date()),
    },
    {
        id: 4,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vitae?',
        user: otherUser,
        createdAt: String(new Date()),
    },
    {
        id: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolor repellendus dolorum delectus, quod quam labore officiis praesentium consectetur nihil natus? Pariatur tempora itaque, dolore alias ipsa sed similique ducimus!',
        user,
        createdAt: String(new Date()),
    },
];
