import type { Story } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (StoryComponent: Story) => (
    <ThemeProvider>
        <StoryComponent />
    </ThemeProvider>
);
