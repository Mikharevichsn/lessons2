import { restaurantAPI } from './api.js';
import { renderRestaurants } from './utils/render.js';

const restaurantsDiv = document.querySelector('.restaurants');

restaurantAPI.get().then(restaurantsData => renderRestaurants(restaurantsData, restaurantsDiv))