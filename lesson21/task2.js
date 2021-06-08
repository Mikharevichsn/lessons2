// 2. Выведите на экран количество часов,
// прошедшее между 1 марта 1988 года и текущим моментом

const MILLISECONDS_PER_HOUR = 1000 * 60 * 60;

const dateNow = new Date();
const datePast = new Date('March 1, 1988');

dateNowMilliseconds = dateNow.getTime();
datePastMilliseconds = datePast.getTime();

const result = Math.floor((dateNowMilliseconds - datePastMilliseconds) / MILLISECONDS_PER_HOUR);

console.log(result);
