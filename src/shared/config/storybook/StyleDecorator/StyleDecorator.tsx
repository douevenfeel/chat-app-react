import 'app/styles/index.scss';
import type { Story } from '@storybook/react';
import clsx from 'clsx';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';

export const StyleDecorator = (StoryComponent: Story) => {
    const { theme } = useTheme();
    return (
        <ThemeProvider>
            <div className={clsx('app', `${theme}Theme`)}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
