const URL = 'http://loca111lhost:1337';
const URL_RESTAURANTS = 'http://loc222alhost:1337/restaurants';

const restaurantsDiv = document.querySelector('.restaurants');
const form = document.querySelector('.add-restaurant-form');

const renderRestaurants = async () => {
  try {
    const response = await fetch(URL_RESTAURANTS);
    const restaurants = await response.json();

    restaurantsDiv.innerHTML = '';
    const cards = restaurants.map((restik, ind) => {
      const pic = restik.picture?.formats?.thumbnail
        ? `<img src="${URL}${restik.picture.formats.thumbnail.url}" alt="${restik.name}">`
        : '<img src="./img/hat.png">';
      return `
            <div class="restaurant-card">
                ${pic}
                <h4>${ind + 1} ${restik.name}</h4>
                <p>${restik.description || 'Описание отсутствует'}</p>
            </div>
        `;
    });

    restaurantsDiv.innerHTML = cards.join('');
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // console.dir(event.target.elements[1])

  try {
    // const nameValue = event.target.elements[0].value;
    // const descriptionValue = event.target.elements[1].value;
    // const [{value: nameValue}, {value: descriptionValue}] = event.target.elements;

    // const data = {};
    // for (let el of event.target.elements) {
    //     if (el.name) data[el.name] = el.value;
    // }
    // console.log(data);

    const data = [...event.target.elements].reduce((acc, cur) => {
      if (cur.name) acc[cur.name] = cur.value;
      return acc;
    }, {});
    console.log(data);

    const response = await fetch(URL_RESTAURANTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({name: nameValue, description: descriptionValue})
      body: data,
    });
    const result = await response.json();
    console.log(result);

    renderRestaurants();
  } catch (err) {
    console.log(err);
  }
});

renderRestaurants();
