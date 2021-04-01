
// Пример 4 - используя Object entries
// и деструктуризацию напишите скрипт, который
// выводит содержимое объекта user в формате ключ:значение 

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

//   const printUserData = (userObj) => {
//       const entries = Object.entries(userObj);

//       for (let [key, value] of entries) {
//           console.log(`${key} - ${value}`);
//       }
//   }

const printUserData = (userObj) => {
    for (let [key, value] of Object.entries(userObj)) {
        console.log(`${key} - ${value}`);
    }
}

  printUserData(user);