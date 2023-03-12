import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    test('test clean variant', () => {
        render(<Button variant='clean'>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('button clean');
    });
    test('test primary variant', () => {
        render(<Button variant='primary'>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('button primary');
    });
    test('test clean variant small size', () => {
        render(
            <Button
                size='small'
                variant='clean'
            >
                Button
            </Button>
        );
        expect(screen.getByText('Button')).toHaveClass('button clean small');
    });
    test('test primary variant small size', () => {
        render(
            <Button
                size='small'
                variant='primary'
            >
                Button
            </Button>
        );
        expect(screen.getByText('Button')).toHaveClass('button primary small');
    });
    test('test clean variant medium size', () => {
        render(
            <Button
                size='medium'
                variant='clean'
            >
                Button
            </Button>
        );
        expect(screen.getByText('Button')).toHaveClass('button clean medium');
    });
    test('test primary variant medium size', () => {
        render(
            <Button
                size='medium'
                variant='primary'
            >
                Button
            </Button>
        );
        expect(screen.getByText('Button')).toHaveClass('button primary medium');
    });
});
