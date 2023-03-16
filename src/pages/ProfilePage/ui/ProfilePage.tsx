import { memo } from 'react';

import { AuthLayout } from 'layouts/AuthLayout';
import { Profile } from 'widgets/Profile/ui/Profile';

const ProfilePage = memo(function ProfilePage() {
    return (
        <AuthLayout>
            <Profile />
        </AuthLayout>
    );
});

export default ProfilePage;
