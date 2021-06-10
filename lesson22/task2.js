// 2 - Сделайте промис, который через 5 секунд случайным 
// образом выполнится или с успехом, 
// или с ошибкой. 
// Примените метод catch для отлавливания ошибок.

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    console.log('click');
})


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rnd = Math.round(Math.random() * 10);
        if (rnd < 5) {
            resolve('Success');
        } else {
            reject('failed ((');
        }
    }, 500);
})

// myPromise.then((result) => {
//     console.log('Всё прошло хорошо! Результат: ', result);
// }, (error) => {
//     console.log('Упс! Что-то пошло не так!');
//     console.log(error);
// });


myPromise
    .then((result) => {
        console.log('Всё прошло хорошо! Результат: ', result);
    })
    .catch((error) => {
        console.log('Упс! Что-то пошло не так!');
        console.log(error);
    })