export const API_URL = 'http://localhost:1337';

export const restaurantAPI = {
    parametr: '/restaurants',
    get() {
        return fetch(API_URL + this.parametr).then(response => response.json());
    },
    delete(id) {
        return fetch(API_URL + this.parametr + '/' + id, {method: 'DELETE'}).then(response => response.json());
    },
}