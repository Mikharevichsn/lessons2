// Пример 2 - инфинити скрол с троттлингом

const countryListEl = document.querySelector('.country-list');
let start = 0;
const step = 10;
let counter = 0;

function createCountryEl(country) {
  const countryEl = document.createElement('div');
  countryEl.classList.add('country');
  countryEl.textContent = country;
  return countryEl;
}

function renderPartOfCountries() {
  const partOfCountries = countries.slice(start, start + step);
  const countryElements = partOfCountries.map(createCountryEl);
  countryListEl.append(...countryElements);
  start += step;
}

renderPartOfCountries();

const throttledScrollHandler = _.throttle(scrollHandler, 250);

window.addEventListener('scroll', throttledScrollHandler);

function scrollHandler(event) {
  counter += 1;
  console.log(counter);
  if (window.innerHeight + window.scrollY < document.body.offsetHeight) return;

  renderPartOfCountries();

  if (start >= countries.length) {
    window.removeEventListener('scroll', throttledScrollHandler);
  }
}
