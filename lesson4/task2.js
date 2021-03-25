// Напишите функцию greet(name),
// которая при вызове будет получать имя (например, «Василий»)
// и логировать строку «Привет, <имя>».
// В случае отсутствующего аргумента выводить «Привет, гость»
const greet = function (name) {
  // if (name) {
  //   console.log(`Привет, ${name}`);
  // } else {
  //   console.log('Привет, гость');
  // }

  // const message = name ? `Привет, ${name}` : 'Привет, гость';
  // console.log(message);

  // console.log(name ? `Привет, ${name}` : 'Привет, гость');

  console.log(`Привет, ${name || 'гость'}`);
};

greet();
greet('John');
greet('Василий');
