const dateNow = new Date();
const myOptions = {
  weekday: 'long',
  month: 'long',
  year: '2-digit',
};

console.log(dateNow);
console.log(dateNow.toLocaleDateString('ru-RU', myOptions));
