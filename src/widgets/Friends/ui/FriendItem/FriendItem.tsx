import { memo } from 'react';

import type { Profile } from 'entities/Profile';
import { ProfileCardMedium } from 'entities/Profile';
import { SendMessage } from 'features/SendMessage';
import { UpdateFriendStatus } from 'features/UpdateFriendStatus';
import type { FriendStatus } from 'shared/types/FriendStatus';

interface FriendItemProps {
    profile: Profile;
}

export const FriendItem = memo(function FriendItem({ profile }: FriendItemProps) {
    const options = [
        <SendMessage
            id={profile.id}
            key='sendMessage'
        />,
    ];
    profile.friendStatus &&
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
