// Пример 3 - живой поиск простой

const countryListEl = document.querySelector('.country-list');
const searchInput = document.querySelector('#search');

function createCountryEl(country) {
  const countryEl = document.createElement('div');
  countryEl.classList.add('country');
  countryEl.textContent = country;
  return countryEl;
}

function renderPartOfCountries(searchText) {
  const filteredCountries = countries.filter(
    (el) => !searchText || el.toLowerCase().includes(searchText)
  );
  const countryElements = filteredCountries.map(createCountryEl);
  countryListEl.innerHTML = '';
  countryListEl.append(...countryElements);
}

renderPartOfCountries();

searchInput.addEventListener('input', (event) => {
  renderPartOfCountries(event.target.value);
});
