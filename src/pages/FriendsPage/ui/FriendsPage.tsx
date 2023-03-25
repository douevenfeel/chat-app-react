import { memo } from 'react';

import { friendsReducer } from 'entities/Friends';
import { AuthLayout } from 'layouts/AuthLayout';
import type { ReducersList } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { useLazyModuleLoading } from 'shared/lib/hooks/useLazyModuleLoading/useLazyModuleLoading';
import { Friends } from 'widgets/Friends';

const initialReducers: ReducersList = {
    friends: friendsReducer,
};

const FriendsPage = memo(function FriendsPage() {
    useLazyModuleLoading({ reducers: initialReducers });

    return (
        <AuthLayout>
            <Friends />
        </AuthLayout>
    );
});

export default FriendsPage;
