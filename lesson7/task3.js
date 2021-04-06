// Выполните рефакторинг функции makeDishWithShef(shefName, dish) так, 
// чтобы не нужно было каждый раз передавать имя шефа. 
// Напишите функцию makeShef(shefName), 
// которая возвращает другую функцию makeDish(dish), 
// помнящую имя шефа при её вызове.


function makeShef(shefName) {
  return function(dish) {
    console.log(`Шеф ${shefName} готовит ${dish}`);
  }
}

const makeDish1 = makeShef('Поли');


makeDish1('Борщ');
makeDish1('Салат');

const makeDish2 = makeShef('Игорь');
makeDish2('ddd');
makeDish2('fff');
makeDish2('ggg');
makeDish2('hhh');