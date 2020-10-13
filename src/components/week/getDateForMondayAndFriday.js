import startOfWeek from 'date-fns/startOfWeek/';

export const monday = startOfWeek(new Date(), { weekStartsOn: 1 });
// export const friday = new Date(monday).setHours()