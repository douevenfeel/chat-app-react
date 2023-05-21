import dayjs, { locale } from 'dayjs';
import ru from 'dayjs/locale/ru';

export const useDateSeparatorDate = (createdAt: string) => {
    locale(ru);
    const date = new Date(+createdAt);

    return dayjs(date).format('D MMMM YYYY');
};
