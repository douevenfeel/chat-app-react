import { memo } from 'react';

import type { User } from 'shared/types/User';

import { UserItem } from '../UserItem/UserItem';

import cls from './Users.module.scss';

interface UsersProps {
    data: User[];
}

export const Users = memo(function Users({ data }: UsersProps) {
    const itemsList =
        data.length > 0 &&
        data?.map((profile) => (
            <UserItem
                key={profile.id}
                profile={profile}
            />
        ));

    return <div className={cls.users}>{itemsList}</div>;
});
