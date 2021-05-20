// 4 - живой поиск с дебаунсом

const countryListEl = document.querySelector('.country-list');
const searchInput = document.querySelector('#search');

function createCountryEl(country) {
  const countryEl = document.createElement('div');
  countryEl.classList.add('country');
  countryEl.textContent = country;
  return countryEl;
}

function renderFilteredCountries(searchText) {
  console.log('!!!');
  const filteredCountries = countries.filter(
    (el) => !searchText || el.toLowerCase().includes(searchText)
  );
  const countryElements = filteredCountries.map(createCountryEl);
  countryListEl.innerHTML = '';
  countryListEl.append(...countryElements);
}

renderFilteredCountries();

const debouncedRender = _.debounce(renderFilteredCountries, 1000);

searchInput.addEventListener('input', (event) => {
  console.log(event.target.value);
  //   renderFilteredCountries(event.target.value);
  debouncedRender(event.target.value);
});
