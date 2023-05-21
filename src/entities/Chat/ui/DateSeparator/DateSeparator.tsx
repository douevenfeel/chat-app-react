import { memo } from 'react';

import { Typography } from 'shared/ui/Typography/Typography';

import { useDateSeparatorDate } from '../../utils/hooks/useDateSeparatorDate/useDateSeparatorDate';

import cls from './DateSeparator.module.scss';

interface DateSeparatorProps {
    createdAt: string;
}

export const DateSeparator = memo(function DateSeparator({ createdAt }: DateSeparatorProps) {
    const date = useDateSeparatorDate(createdAt);

    return (
        <div className={cls.dateSeparator}>
            <Typography
                align='center'
                className={cls.date}
                size='small'
                tag='p'
                variant='secondary'
            >
                {date}
            </Typography>
            <hr className={cls.line} />
        </div>
    );
});
