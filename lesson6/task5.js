// Пример 5 - напишите функцию
// которая принимает информацию о пользователе
// и выводит ее в консоль

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    obj: { a: 1, b: 2 },
  };

//   const printUser = (userObj) => {
//       const { name, age, hobby, premium } = userObj;
//       console.log(`name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`);
//   }

const printUser = ({ name, age, hobby, premium }) => {
    console.log(`name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`);
}

  printUser(user);