/* 
task 1
С помощью оператора определения типа убедитесь, что переменные принадлежат типам: string, number, boolean.xs
*/
// const productName = 'Mango';
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error);
// console.log(typeof quantity);
// task 1

/* 
task 2
Вывести на экран сумму: количество яблок + количество винограда.
*/
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// console.log('Итого: ' + total);
// task 2

/* 
task 3
Создать переменную result, присвоить ей выражение 108+223-2*5, 
разобрать приоритет и вывести её значение в консоль.
*/

// const result = 108 + 223 - 2 * 5;
// console.log(result);
// task 3

/* 
task 4
Определить площадь круга с радиусом 10см (ПR(2)). 
Math.pow(a, b) - возведение в степень
*/
// const radius = 10;
// // const area = Math.PI * Math.pow(radius, 2);
// const area = Math.PI * radius ** 2;
// console.log(area);
// task 4

/* 
task 5
Написать фразу с помощью шаблонных строк 
Здравствуйте, меня зовут А, мне Б лет и мне нравится Ц
, где А, Б, Ц - переменные вставленные в строку.
*/
// const name = 'Манго';
// const age = 5;
// const hobby = 'плавать';
// const message = `Здравствуйте, меня зовут ${name}, мне ${age} лет и мне нравится ${hobby}`;
// console.log(message);
// task 5

/* 
task 6
Каким будет результат этих выражений?
*/

// console.log(5 > 4);
// console.log(10 >= '7');
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Ёнанас' < 'ёжик');
// console.log('Ёнанас' === 'ёжик');
// console.log(undefined == null);
// console.log(undefined === null);

// task 6

/* 
task 7
Используя конструкцию if..else, напишите код, который будет спрашивать: 
«Какое «официальное» название JavaScript?». 
Если пользователь вводит «ECMAScript», 
то показать: «Верно!», 
в противном случае – отобразить: «Не знаете? ECMAScript!»
*/

// const answer = prompt('Какое «официальное» название JavaScript?');

// if (answer === 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }

// task 7

/* 
task 8
Перепишите if...else с использованием тернарного оператора.
*/

// const a = 1;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// result = a + b < 4 ? 'Мало' : 'Много';
// console.log(result);
// task 8

/* 
task 9
Что выведет код?
*/
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'hello');
// console.log(true && 0 && 'hello');
// console.log(true || 3);
// console.log(5 || true || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || 2 && 3 || 4);

// task 9

/* 
task 10
Напишите условие if для проверки, 
что переменная age находится в диапазоне между 14 и 90 включительно. 
«Включительно» означает, что значение переменной age может быть равно 14 или 90.
*/

// const min = 14;
// const max = 90;
// const age = 89;
// let result;

// if (age >= min && age <= max) {
//   result = 'В диапазоне';
// } else {
//   result = 'Вне диапазона';
// }

// result = age >= min && age <= max ? 'В диапазоне' : 'Вне диапазона';

// console.log(result);
// console.log(age >= min && age <= max);

// task 10

/* 
task 11
Написать программу которая получит от пользователя число (количество минут) 
и выведёт на экран строку в формате часов и минут.

70 покажет 01:10
450 покажет 07:30
1441 покажет 24:1
*/

// const minutesTotal = 2441;
// // const hours = String(Math.floor(minutesTotal / 60)).padStart(2, '0');
// let hours;
// let minutes;

// hours = Math.floor(minutesTotal / 60);
// hours = String(hours);
// hours = hours.padStart(2, '0');

// minutes = minutesTotal % 60;
// minutes = String(minutes);
// minutes = minutes.padStart(2, '0');

// const result = `${hours}:${minutes}`;
// console.log(result);
