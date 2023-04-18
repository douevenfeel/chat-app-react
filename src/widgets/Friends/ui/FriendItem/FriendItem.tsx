import { memo } from 'react';
import { useSelector } from 'react-redux';

import { ProfileCardMedium } from 'entities/Profile';
import { getUserId } from 'entities/User';
import { SendMessage } from 'features/SendMessage';
import { UpdateFriendStatus } from 'features/UpdateFriendStatus';
import type { FriendStatus } from 'shared/types/FriendStatus';
import type { User } from 'shared/types/User';

import { getFriendsProfileId } from '../../model/selectors/getFriendsProfileId/getFriendsProfileId';

interface FriendItemProps {
    profile: User;
}

export const FriendItem = memo(function FriendItem({ profile }: FriendItemProps) {
    const friendsProfileId = useSelector(getFriendsProfileId);
    const userId = useSelector(getUserId);
    const options = [
        <SendMessage
            id={profile.id}
            key='sendMessage'
        />,
    ];
    profile.friendStatus &&
        friendsProfileId === userId &&
        options.push(
            <UpdateFriendStatus
                friendStatus={profile.friendStatus as FriendStatus}
                id={profile.id}
                key='updateFriendStatus'
            />
        );

    return (
        <ProfileCardMedium
            data={profile}
            options={options}
        />
    );
});
