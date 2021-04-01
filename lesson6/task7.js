// Пример 7 напишите скрипт, 
// который поочереди спрашивает имя, возраст и зарплату
// и выводит в консоль объект только с теми полями, 
// которые были указаны

const name = prompt('Введите имя');
const age = prompt('Введите возраст');
const salary = prompt('Введите зарплату');


// const obj = {
//     name,
//     age,
//     salary
// };

// const obj = {};

// if (name) {
//     obj.name = name;
// }
// if (age) {
//     obj.age = age;
// }
// if (salary) {
//     obj.salary = salary;
// }


const obj = {
    ...(name && {name: name}),
    ...(age && {age}),
    ...(salary && {salary}),
}



console.log(obj);
