import 'app/styles/index.scss';
import type { Story } from '@storybook/react';
import clsx from 'clsx';

import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';

export const StyleDecorator = (StoryComponent: Story) => {
    const { theme } = useTheme();

    return (
        <div className={clsx('app', `${theme}Theme`)}>
            <StoryComponent />
        </div>
    );
};
