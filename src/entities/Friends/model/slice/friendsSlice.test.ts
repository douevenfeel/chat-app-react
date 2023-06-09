import type { AvatarVariant } from 'shared/types/AvatarVariant';

import { fetchFriends } from '../services/fetchFriends/fetchFriends';
import type { FriendsData, FriendsSchema } from '../types/FriendsSchema';

import { friendsActions, friendsReducer } from './friendsSlice';

const data: FriendsData = {
    counts: { friends: 12, onlineFriends: 6, outcomingRequests: 3, incomingRequests: 1 },
    friends: [
        {
            id: 1,
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
            avatar: 'purple' as AvatarVariant,
            friendStatus: 'possibleFriend',
            lastSeen: String(Date.now()),
        },
        {
            id: 2,
            email: 'test@mail.ru',
            firstName: 'firstName',
            lastName: 'lastName',
            avatar: 'indigo' as AvatarVariant,
            friendStatus: 'possibleFriend',
            lastSeen: String(Date.now() - 3000000),
        },
    ],
    profile: {
        id: 1,
        email: 'test@mail.ru',
        firstName: 'firstName',
        lastName: 'lastName',
        avatar: 'purple' as AvatarVariant,
        friendStatus: 'possibleFriend',
        lastSeen: String(Date.now()),
    },
};

describe('friendsSlice', () => {
    test('test setFriendStatus', () => {
        const state: DeepPartial<FriendsSchema> = { friendStatus: 'alreadyFriend' };
        expect(friendsReducer(state as FriendsSchema, friendsActions.setFriendStatus('incomingRequest'))).toEqual({
            data: [],
            friendStatus: 'incomingRequest',
            q: '',
            section: 'all',
        });
    });

    test('test setQ', () => {
        const state: DeepPartial<FriendsSchema> = { q: '' };
        expect(friendsReducer(state as FriendsSchema, friendsActions.setQ('firstName'))).toEqual({
            q: 'firstName',
        });
    });

    test('test setSection', () => {
        const state: DeepPartial<FriendsSchema> = { section: 'all' };
        expect(friendsReducer(state as FriendsSchema, friendsActions.setSection('online'))).toEqual({
            section: 'online',
        });
    });

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
            data: data.friends,
            counts: data.counts,
            profile: data.profile,
        });
    });
});
