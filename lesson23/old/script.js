const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/character/2')
    .then(response => {
    console.log("🚀 ~ file: script.js ~ line 3 ~ response", response)
        if (!response.ok) {
            return {error: 'Что-то пошло не так'};
        }
        return response.json();
    })
    .then(data => {
        if (data.error) return console.log('у нас ошибка: ' + data.error);
        console.log('ошибки нет, данные: ', data);
    })
    .catch(err => alert(err));
})




