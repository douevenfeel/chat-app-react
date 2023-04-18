import { memo } from 'react';

import { AuthLayout } from 'layouts/AuthLayout';

const SearchPage = memo(function SearchPage() {
    document.title = 'Поиск';

    return <AuthLayout>SearchPage</AuthLayout>;
});

export default SearchPage;
