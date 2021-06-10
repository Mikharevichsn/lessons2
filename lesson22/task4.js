// Пример 4 - Переделайте предыдущую задачу так, 
// чтобы один из промисов в цепочке выполнился с ошибкой. 
// В конце цепочки расположите метод catch, который поймает эту ошибку.

const status = document.querySelector('.status');

const timeout = 1000;

const getNewPromise = (num) => {
    console.log('я функция getNewPromise. ', num);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num ** 2);
        }, timeout)
    })
}



const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        status.textContent = 'Загружаю...';
        resolve(5);
    }, timeout)
})

firstPromise
    .then((number) => getNewPromise(number)) // 5 -> 25
    .then((number) => getNewPromise(number)) // 25 -> 625
    .then((number) => getNewPromise(number)) // 625 -> ???
    .then(() => Promise.reject('Ошибко!'))
    .then((finalResult) => alert(finalResult))
    .catch((err) => console.log('Ошибка такая: ', err))
    .finally(() => {
        console.log('я выполняюсь в любом случае');
        status.textContent = 'Загрузка завершена';
    })