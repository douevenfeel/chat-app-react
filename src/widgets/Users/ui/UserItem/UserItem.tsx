import { memo } from 'react';

import { ProfileCardMedium } from 'entities/Profile';
import { SendMessage } from 'features/SendMessage';
import type { User } from 'shared/types/User';

interface UserItemProps {
    profile: User;
}

export const UserItem = memo(function UserItem({ profile }: UserItemProps) {
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
