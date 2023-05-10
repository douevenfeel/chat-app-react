import dayjs, { locale } from 'dayjs';
import ru from 'dayjs/locale/ru';

export const useDateSeparatorDate = (createdAt: Date) => {
    locale(ru);

    return dayjs(createdAt).format('D MMMM YYYY');
};
