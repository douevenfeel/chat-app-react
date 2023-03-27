import { memo } from 'react';

import type { Profile } from 'entities/Profile';
import { ProfileCardMedium } from 'entities/Profile';
import { AcceptFriendRequest } from 'features/AcceptFriendRequest';
import { AddFriend } from 'features/AddFriend';
import { CancelFriendRequest } from 'features/CancelFriendRequest';
import { DeleteFriend } from 'features/DeleteFriend';
import { SendMessage } from 'features/SendMessage';

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
    switch (profile.friendStatus) {
        case 'possibleFriend':
            options.push(
                <AddFriend
                    id={profile.id}
                    key='addFriend'
                />
            );
            break;
        case 'outcomingRequest':
            options.push(
                <CancelFriendRequest
                    id={profile.id}
                    key='cancelFriendRequest'
                />
            );
            break;

        case 'incomingRequest':
            options.push(
                <AcceptFriendRequest
                    id={profile.id}
                    key='acceptFriendRequest'
                />
            );
            break;

        case 'alreadyFriend':
            options.push(
                <DeleteFriend
                    id={profile.id}
                    key='deleteFriend'
                />
            );
            break;
    }

    return (
        <ProfileCardMedium
            data={profile}
            options={options}
        />
    );
});
