import moment from 'moment';

export const generateDate = (): string => moment().format('YYYY-MM-DD HH:mm:ss');
