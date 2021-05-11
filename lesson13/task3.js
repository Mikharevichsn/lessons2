// Пример 3 - Свойство tagName
// Дан элемент #elem.
// Выведите название его тега.

const elem = document.querySelector('#elem');
console.dir(elem);
console.log(elem.tagName);

// Выведите название его тега в нижнем регистре.
console.log(elem.tagName.toLowerCase());

// Даны элементы с классом www.
// Добавьте каждому элементу в
// конец название его тега в нижнем регистре.

const examples = document.querySelectorAll('.example');
console.log(examples);

examples.forEach((example) => {
  console.dir(example);
  example.textContent += ' ' + example.tagName.toLowerCase();
  //   example.innerText += ' ' + example.tagName.toLowerCase();
});
