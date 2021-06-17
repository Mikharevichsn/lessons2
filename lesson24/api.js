export const api = {
    get(url) {
        return fetch(url)
            .then(response => response.json());
    }
}