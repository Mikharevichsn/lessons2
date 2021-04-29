const users = [
  { id: 1, name: 'Albert', age: 21, emailConfirmed: true, isActive: false },
  { id: 2, name: 'John', age: 27, emailConfirmed: false, isActive: false },
  { id: 3, name: 'Anna', age: 37, emailConfirmed: true, isActive: true },
  { id: 4, name: 'Mike', age: 16, emailConfirmed: true, isActive: true },
  { id: 5, name: 'Serjo', age: 15, emailConfirmed: false, isActive: false },
  { id: 6, name: 'Roman', age: 17, emailConfirmed: true, isActive: true },
  { id: 7, name: 'Igor', age: 31, emailConfirmed: true, isActive: false },
  { id: 8, name: 'Diana', age: 25, emailConfirmed: true, isActive: false },
];

// console.log(users.filter((elem) => !elem.isActive));
// const adultUsers = users.filter((user) => user.age >= 18);
// console.log(adultUsers);

// console.log(users);

const namesOnlyArr = users.map((user) => user.name);

// console.log(namesOnlyArr);

const changedUsers = users.map((user) => {
  const newUser = { ...user };
  newUser.isAdult = newUser.age >= 18;
  return newUser;
});

// console.log(changedUsers);
