import { memo } from 'react';

import { LoginForm, LoginInfo } from 'features/Login';

export const LoginCard = memo(function LoginCard() {
    return (
        <div>
            <LoginForm />
            <LoginInfo />
        </div>
    );
});
