import type { ReactNode } from 'react';
import { Component, Suspense } from 'react';

import { Error } from 'widgets/Error';
import { PageLoader } from 'widgets/PageLoader';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback={<PageLoader />}>
                    <Error />
                </Suspense>
            );
        }

        return children;
    }
}
