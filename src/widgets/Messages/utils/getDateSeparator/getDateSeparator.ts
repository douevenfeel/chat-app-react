import dayjs from 'dayjs';

import type { Message } from 'shared/types/Message';

export const getDateSeparator = (curMessage: Message, nextMessage?: Message) => {
    if (!nextMessage) {
        return false;
    }
    const curMessageCreatedAt = curMessage?.createdAt;
    const nextMessageCreatedAt = nextMessage?.createdAt;
    const curDate = dayjs(curMessageCreatedAt).format('DD MM YYYY');
    const nextDate = dayjs(nextMessageCreatedAt).format('DD MM YYYY');

    return nextDate !== curDate;
};
