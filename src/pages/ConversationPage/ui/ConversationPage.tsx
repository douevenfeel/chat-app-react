import { memo, useEffect } from 'react';

import { AuthLayout } from 'layouts/AuthLayout';

const ConversationPage = memo(function ConversationPage() {
    useEffect(() => {
        document.title = 'Сообщения';
    }, []);

    return <AuthLayout>ConversationPage</AuthLayout>;
});

export default ConversationPage;
