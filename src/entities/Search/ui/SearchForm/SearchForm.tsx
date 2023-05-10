import type { FormEvent } from 'react';
import { memo } from 'react';

import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './SearchForm.module.scss';

interface SearchFormProps {
    q?: string;
    onSubmit?: (e: FormEvent) => void;
    onSearchChange?: (value: string) => void;
}

export const SearchForm = memo(function Search({ q, onSearchChange, onSubmit }: SearchFormProps) {
    return (
        <form
            className={cls.searchForm}
            onSubmit={onSubmit}
        >
            <Input
                autoFocus
                placeholder='Введите запрос'
                size='small'
                value={q}
                variant='outline'
                onChange={onSearchChange}
            />
            <Button
                size='small'
                type='submit'
                variant='primary'
            >
                Поиск
            </Button>
        </form>
    );
});
