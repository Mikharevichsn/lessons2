import { api } from './api.js';

const pokemonsDiv = document.querySelector('.pokemons');
const paginationDiv = document.querySelector('.pagination');
const filterPerPageDiv = document.querySelector('.filter-per-page');

const paginationBtnClassName = 'pagination-btn';

let pageNumber = 1;
let perPage = 10;

const getOffset = () => {
  return (pageNumber - 1) * perPage;
};

const renderCards = (cards) => {
  const elements = cards.map((card, i) => {
    return `
            <div class="card">
                <p>№ ${getOffset() + i + 1}</p>
                <h4>${card.name}</h4>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  i + getOffset() + 1
                }.png" alt="Покемон ${card.name}" />
            </div>
        `;
  });

  pokemonsDiv.innerHTML = elements.join('');
};

const renderPagination = (totalElements) => {
  const pagesTotal = Math.ceil(totalElements / perPage);
  console.log(pagesTotal);
  const numbers = Array(pagesTotal)
    .fill(0)
    .map((el, i) => i + 1); // [1, 2, 3, 4, и так далее]
  const elements = numbers.map(
    (el) =>
      `<button class="${paginationBtnClassName} ${
        el === pageNumber ? 'active' : ''
      }">${el}</button>`
  );

  const step = 3;
  const startCondition = pageNumber - step > 0;
  const endCondition = pageNumber + step < elements.length - 1;
  const start = startCondition ? pageNumber - step : 0;
  const end = pageNumber + step;
  const slicedElements = elements.slice(start, end + 1);

    paginationDiv.innerHTML = (startCondition ? elements[0] + '...' : '') + slicedElements.join('') + (endCondition ? '...' + elements[elements.length - 1] : '');
};

const getAndRenderCards = (isRenderPaginationNeeded = false) => {
  pokemonsDiv.innerHTML = 'Загружаю...';

  api
    .get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${perPage}&offset=${getOffset()}`
    )
    .then((data) => {
      console.log(data);
      const { results, count } = data;
      renderCards(results);
      if (isRenderPaginationNeeded) renderPagination(count);
    });
};

getAndRenderCards(true);

paginationDiv.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) return;

  const btns = [...event.currentTarget.children];
  btns.forEach((btn) => btn.classList.remove('active'));
  event.target.classList.add('active');

  pageNumber = Number(event.target.textContent);
  getAndRenderCards(true);
});

filterPerPageDiv.addEventListener('change', (event) => {
    pageNumber = 1;
    perPage = Number(event.target.value);
    getAndRenderCards(true);
})
