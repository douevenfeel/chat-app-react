import type { AvatarVariant } from 'shared/types/AvatarVariant';
import type { FriendStatus } from 'shared/types/FriendStatus';

import { fetchFriends } from '../services/fetchFriends/fetchFriends';
import type { FriendsSchema } from '../types/FriendsSchema';

import { friendsReducer } from './friendsSlice';

const data = [
    {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'purple' as AvatarVariant,
        friendStatus: 0 as FriendStatus,
        onlineInfo: {
            isOnline: true,
            lastSeen: String(Date.now()),
        },
    },
    {
        id: 2,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'indigo' as AvatarVariant,
        friendStatus: 0 as FriendStatus,
        onlineInfo: {
            isOnline: false,
            lastSeen: String(Date.now()),
        },
    },
];

describe('friendsSlice', () => {
    test('test fetchFriends.pending', () => {
        const state: DeepPartial<FriendsSchema> = {
            isLoading: false,
        };
        expect(friendsReducer(state as FriendsSchema, fetchFriends.pending)).toEqual({
            isLoading: true,
        });
    });

    test('test fetchFriends.fulfilled', () => {
        const state: DeepPartial<FriendsSchema> = {
            isLoading: true,
        };
        expect(friendsReducer(state as FriendsSchema, fetchFriends.fulfilled(data, '', 1))).toEqual({
            isLoading: false,
            error: undefined,
            data,
        });
    });
});
