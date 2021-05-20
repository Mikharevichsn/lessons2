// 5 - инфинити скрол IntersectionObserver

const countryListEl = document.querySelector('.country-list');
const targetEl = document.querySelector('.target-element');
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

function observerHandler([entrie]) {
  counter += 1;
  console.log(counter);
  console.log('entrie = ', entrie);

  if (!entrie.isIntersecting) return;
  renderPartOfCountries();
}

const observer = new IntersectionObserver(observerHandler, { threshold: 0 });

observer.observe(targetEl);
