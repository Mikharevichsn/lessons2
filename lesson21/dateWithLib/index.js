import dayjs from 'dayjs';

const dateNow = dayjs().format('DD MMMM YYYY год');
console.log(dateNow);

console.log(dayjs().subtract(7, 'year').format('DD MMMM YYYY год'));

console.log(dayjs('2012-04-25').format('DD MMMM YYYY год'));
