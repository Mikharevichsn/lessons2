function countSheeps(arrayOfSheep) {
  let countSheeps = 0;
  for (let sheep of arrayOfSheep) {
    if (sheep === true) {
      countSheeps += 1;
    }
  }
  return countSheeps;
}

const array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(array1));
