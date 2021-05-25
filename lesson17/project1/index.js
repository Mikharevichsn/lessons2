const { v4: uuid } = require('uuid');
const { incrementAge } = require('./common');
// const incrementAge = require('./common');
const { z, x, j } = require('./exaple');
const cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: 'JS крутой!',
    e: 'XX',
    T: 'U ',
  })
);

console.log(z);
console.log(x);
console.log(j);

// const users = [
//   { name: 'Serjo', age: 15, id: uuid() },
//   { name: 'Anna', age: 15, id: uuid() },
//   { name: 'Andrew', age: 15, id: uuid() },
// ];
// console.log(users);

// incrementAge(users[0]);
// console.log(users);
