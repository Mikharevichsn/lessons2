// Пример 4 - Викторина
// Какие значения будут выводиться в коде ниже?

// const animal = { jumps: null };
// const rabbit = { jumps: true };

// Object.setPrototypeOf(rabbit, animal);

// console.log(1, rabbit.jumps); // ?

// delete rabbit.jumps;
// console.log(2, rabbit.jumps);

// delete animal.jumps;
// console.log(3, rabbit.jumps);  // ? (3)


// В примерах ниже производятся различные действия с prototype.
// Каковы будут результаты выполнения ? Почему ?

function Rabbit() { }

Rabbit.prototype = { eats: true };
const rabbit2 = new Rabbit();

// console.log(rabbit2);
// rabbit2.__proto__ = Rabbit.prototype => { eats: true }



// Rabbit.prototype = {};
// const rabbit3 = new Rabbit();
// console.log(rabbit3);

// Rabbit.prototype.eats = false;
delete Rabbit.prototype.eats;

console.log(4, rabbit2.eats);