// Пример 5 - // Есть объекты:

const head = {
    glasses: 1,
  };
  
  const table = {
    pen: 3,
  };
  
  const bed = {
    sheet: 1,
    pillow: 2,
  };
  
  const pockets = {
    money: 2000,
  };
  
  Object.setPrototypeOf(pockets, bed);
  Object.setPrototypeOf(bed, table);
  Object.setPrototypeOf(table, head);

  console.log(pockets);
  // Присвойте объектам прототипы так, 
// чтобы любой поиск чего - либо шёл по алгоритму 
// pockets -> bed -> table -> head.

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);