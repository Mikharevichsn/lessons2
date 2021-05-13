// 5 - Туду лист.
// Инпут, куда вводится текст.
// При нажатии на ентер, в список ниже,
// добавляется тудушка. При клике на нее,
// она становится выполненной, т.е. текст зачеркивается

const myForm = document.querySelector('.my-form');
const input = document.querySelector('input');
const todosList = document.querySelector('ol');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('случился сабмит!');
  addTodo(input.value);
  input.value = '';
});

function addTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('done');
  });
  todosList.appendChild(li);
  //   addListenersOnTodos();
}

// function addListenersOnTodos() {
//   const liElements = document.querySelectorAll('li');
//   liElements.forEach((el) => {
//     el.addEventListener('click', (e) => {
//       e.currentTarget.classList.add('done');
//     });
//   });
// }
