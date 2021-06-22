import { API_URL, restaurantAPI } from '../api.js';

export const renderRestaurants = (restaurants, ref) => {
    ref.innerHTML = '';

    for (let restaurant of restaurants) {
        const restaurantCardDiv = document.createElement('div');
        restaurantCardDiv.classList.add('restaurant-card');

        if (restaurant.picture?.formats?.thumbnail) {
            const img = document.createElement('img');
            img.src = API_URL + restaurant.picture.formats.thumbnail.url;
            restaurantCardDiv.appendChild(img);
        }

        const h4 = document.createElement('h4');
        h4.textContent = restaurant.name;
        restaurantCardDiv.appendChild(h4);

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = 'Удалить ресторан';
        restaurantCardDiv.appendChild(btn);

        btn.addEventListener('click', () => {
            restaurantAPI.delete(restaurant.id).then(() => {
                const filteredRestaurants = restaurants.filter(el => el.id !== restaurant.id);
                renderRestaurants(filteredRestaurants, ref);
                alert('ресторан удалён!');
            });
        })

        ref.appendChild(restaurantCardDiv);
    }
}