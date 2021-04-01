
// const arr1 = [100, 20, 3333, 4, 5];

// console.log('arr1 = ', arr1);
// console.log(arr1[2]);

// const arr2 = [...arr1];
// console.log('arr2 = ', arr2);
// console.log(arr2[2]);
// arr2[2] = 1000;
// console.log('arr2 = ', arr2);
// console.log('arr1 = ', arr1);



// const obj = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//     friends: ['Anton', 'Anna', 'Fedor', 'Igor']
// }

// // const age = obj.age;
// const { age, name, hobby } = obj;


// console.log(age);
// console.log(name);
// console.log(hobby);
// console.log(obj.friends);


const arr = ['Anton', 'Anna', 'Fedor', 'Igor'];
console.log(arr);


// const friendFirst = arr[0];
// const friendSecond = arr[1];
const [friendFirst, friendSecond] = arr;
console.log(friendFirst);
console.log(friendSecond);