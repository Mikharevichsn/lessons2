// Напишите функцию savePassword(password) 
// которая принимает пароль и возвращает внутреннюю функцию, 
// которая принимает строку и возвращает буль true, 
// если строка совпадает с сохраненным паролем 
// и false - если не совпадает.




// const makeCounter = () => {
//     let counter = 0;
//     return () => {
//         counter += 1;
//         console.log(counter);
//     }
// }


const savePassword = (password) => (string) => string === password;

const checkPassword = savePassword('ПОРОЛЬ');



console.log(checkPassword('мой пароль'));
console.log(checkPassword('супер пароль'));
console.log(checkPassword('admin'));
console.log(checkPassword('админ'));
console.log(checkPassword('root'));
console.log(checkPassword('ПОРОЛЬ'));


