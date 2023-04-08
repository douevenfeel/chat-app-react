import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import type { Profile } from 'entities/Profile';
import { ProfileCardMedium } from 'entities/Profile';
import { getUserId } from 'entities/User';
import { SendMessage } from 'features/SendMessage';
import { UpdateFriendStatus } from 'features/UpdateFriendStatus';
import type { FriendStatus } from 'shared/types/FriendStatus';

interface FriendItemProps {
    profile: Profile;
}

export const FriendItem = memo(function FriendItem({ profile }: FriendItemProps) {
    const { id } = useParams();
    const userId = useSelector(getUserId);
    const options = [
        <SendMessage
            id={profile.id}
            key='sendMessage'
        />,
    ];
    Number(id) === userId &&
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
