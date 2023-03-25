import type { ReactNode } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import { ProfileCardLarge } from 'entities/Profile';
import { AcceptFriendRequest } from 'features/AcceptFriendRequest';
import { AddFriend } from 'features/AddFriend';
import { CancelFriendRequest } from 'features/CancelFriendRequest';
import { DeleteFriend } from 'features/DeleteFriend';
import { ProfileUpdate } from 'features/ProfileUpdate/ui/ProfileUpdate';
import { ProfileUpdateInfoForm } from 'features/ProfileUpdateInfoForm';
import { SendMessage } from 'features/SendMessage';

import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileIsUpdatingInfo } from '../model/selectors/getProfileIsUpdatingInfo/getProfileIsUpdatingInfo';

export const Profile = memo(function Profile() {
    const data = useSelector(getProfileData);
    const isUpdatingInfo = useSelector(getProfileIsUpdatingInfo);
    let options: ReactNode[] = [];
    switch (data?.friendStatus) {
        case 'accept':
            options = [
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
            options = [
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
            options = [
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
            options = [
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
            options = [
                isUpdatingInfo ? (
                    <ProfileUpdateInfoForm key='profileUpdateInfoForm' />
                ) : (
                    <ProfileUpdate key='profileUpdate' />
                ),
            ];
            break;
    }

    return data ? (
        <ProfileCardLarge
            data={data}
            options={options}
        />
    ) : null;
});
