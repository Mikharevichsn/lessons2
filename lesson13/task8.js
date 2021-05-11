// 8 - Соседи
// Дан элемент #prolog.
// Найдите его соседа сверху и добавьте ему в конец текст '!'.

// Найдите его соседа снизу и добавьте ему в конец текст '?'.

// Найдите его соседа снизу его соседа снизу
// (следующий элемент за соседним) и добавьте ему в конец текст '#'.

const prologEl = document.querySelector('#prolog');
console.dir(prologEl);

prologEl.previousElementSibling.textContent += '!';
// const h1 = prologEl.previousElementSibling;
// h1.textContent += '!';

prologEl.nextElementSibling.textContent += '?';

prologEl.nextElementSibling.nextElementSibling.textContent += '#';
