// 1. Задача. Выведите на экран текущие
// день, месяц и год в формате 'год-месяц-день'.

const nowDate = new Date();
console.log(nowDate);

const year = nowDate.getFullYear();
const month = nowDate.getMonth() + 1;
const day = nowDate.getDate();

console.log(`${year}-${month}-${day}`);