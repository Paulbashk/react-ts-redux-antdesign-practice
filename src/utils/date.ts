import dayjs, {Dayjs} from 'dayjs';

export const formatDate = (date: Dayjs): string => String(dayjs(date).format('YYYY.MM.DD'));
