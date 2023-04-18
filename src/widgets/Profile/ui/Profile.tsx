import type { ReactNode } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import { ProfileCardLarge } from 'entities/Profile';
import { ProfileUpdate } from 'features/ProfileUpdate/ui/ProfileUpdate';
import { ProfileUpdateInfoForm } from 'features/ProfileUpdateInfoForm';
import { SendMessage } from 'features/SendMessage';
import { UpdateFriendStatus } from 'features/UpdateFriendStatus';
import type { FriendStatus } from 'shared/types/FriendStatus';

import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileIsUpdatingInfo } from '../model/selectors/getProfileIsUpdatingInfo/getProfileIsUpdatingInfo';

export const Profile = memo(function Profile() {
    const data = useSelector(getProfileData);
    const isUpdatingInfo = useSelector(getProfileIsUpdatingInfo);
    let options: ReactNode[] = [];

    if (data && data.friendStatus) {
        options = [
            <SendMessage
                id={data.id}
                key='sendMessage'
            />,
            <UpdateFriendStatus
                friendStatus={data.friendStatus as FriendStatus}
                id={data.id}
                key='updateFriendStatus'
            />,
        ];
    } else {
        options = [
            isUpdatingInfo ? (
                <ProfileUpdateInfoForm key='profileUpdateInfoForm' />
            ) : (
                <ProfileUpdate key='profileUpdate' />
            ),
        ];
    }

    return data ? (
        <ProfileCardLarge
            data={data}
            options={options}
        />
    ) : null;
});
