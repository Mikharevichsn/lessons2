// const date = new Date();
// console.log(date);
// console.dir(date);
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getMonth());


// ---

const dateToday = new Date();
const dayEarAgo = new Date();
dayEarAgo.setFullYear(dateToday.getFullYear() - 1);

console.log(dateToday);
console.log(dayEarAgo);

console.log(dateToday.toDateString());
console.log(dayEarAgo.toDateString());