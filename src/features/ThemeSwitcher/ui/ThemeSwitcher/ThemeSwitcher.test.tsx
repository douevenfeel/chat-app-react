import { screen } from '@testing-library/react';

import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';

import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
    test('test render', () => {
        ComponentRender(<ThemeSwitcher />);
        expect(screen.getByTestId('themeSwitcher')).toBeInTheDocument();
    });
});
