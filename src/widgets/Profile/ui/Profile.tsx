import type { ReactNode } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import { ProfileCardLarge } from 'entities/Proflie';
import { AcceptFriendRequest } from 'features/AcceptFriendRequest';
import { AddFriend } from 'features/AddFriend';
import { CancelFriendRequest } from 'features/CancelFriendRequest';
import { DeleteFriend } from 'features/DeleteFriend';
import { EditProfile } from 'features/EditProfile';
import { SendMessage } from 'features/SendMessage';

import { getProfileData } from '../model/selectors/getProfileData/getProfileData';

export const Profile = memo(function Profile() {
    const data = useSelector(getProfileData);
    let buttons: ReactNode[] = [];
    switch (data?.friendStatus) {
        case 'accept':
            buttons = [
                <SendMessage
                    id={Number(data.id)}
                    key='sendMessage'
                />,
                <AcceptFriendRequest
                    id={Number(data.id)}
                    key='acceptFriendRequest'
                />,
            ];
            break;
        case 'add':
            buttons = [
                <SendMessage
                    id={Number(data.id)}
                    key='sendMessage'
                />,
                <AddFriend
                    id={Number(data.id)}
                    key='addFriend'
                />,
            ];
            break;
        case 'cancel':
            buttons = [
                <SendMessage
                    id={Number(data.id)}
                    key='sendMessage'
                />,
                <CancelFriendRequest
                    id={Number(data.id)}
                    key='cancelFriendRequest'
                />,
            ];
            break;
        case 'delete':
            buttons = [
                <SendMessage
                    id={Number(data.id)}
                    key='sendMessage'
                />,
                <DeleteFriend
                    id={Number(data.id)}
                    key='deleteFriend'
                />,
            ];
            break;
        default:
            buttons = [<EditProfile key='editProfile' />];
            break;
    }

    return (
        <ProfileCardLarge
            buttons={buttons}
            data={data}
        />
    );
});
