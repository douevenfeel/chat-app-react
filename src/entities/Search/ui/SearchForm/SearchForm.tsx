import { memo } from 'react';

import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './SearchForm.module.scss';

interface SearchFormProps {
    q?: string;
    onSearchChange?: (value: string) => void;
    onSearchClick?: () => void;
}

export const SearchForm = memo(function Search({ q, onSearchChange, onSearchClick }: SearchFormProps) {
    return (
        <div className={cls.searchForm}>
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
                variant='primary'
                onClick={onSearchClick}
            >
                Поиск
            </Button>
        </div>
    );
});
