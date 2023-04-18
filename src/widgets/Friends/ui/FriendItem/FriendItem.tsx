import { memo } from 'react';

import { ProfileCardMedium } from 'entities/Profile';
import { SendMessage } from 'features/SendMessage';
import type { User } from 'shared/types/User';

interface FriendItemProps {
    profile: User;
}

export const FriendItem = memo(function FriendItem({ profile }: FriendItemProps) {
    const option = (
        <SendMessage
            id={profile.id}
            key='sendMessage'
        />
    );

    return (
        <ProfileCardMedium
            data={profile}
            option={option}
        />
    );
});
