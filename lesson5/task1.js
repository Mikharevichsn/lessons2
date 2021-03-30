/* 
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
*/

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  console.log(user);
  user.mood = 'happy';
  console.log(user);
  
  user.hobby = 'skydiving';
  console.log(user);
  
  user.premium = false;
  console.log(user);

const arr = Object.keys(user);
console.log(arr);

// for (let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i] + ' - ' + user[arr[i]]);
// }

for (let key of arr) {
    console.log(key + ' - ' + user[key]);
}

// console.log(arr[0] + ' - ' + user[arr[0]]);
// console.log(arr[1] + ' - ' + user[arr[1]]);
// console.log(arr[2] + ' - ' + user[arr[2]]);
// console.log(arr[3] + ' - ' + user[arr[3]]);