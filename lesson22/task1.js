// 1 - Функции resolve и reject

// Сделайте промис, 
// внутри которого будет задержка 
// setTimeout в 3 секунды, 
// после которой промис должен зарезолвится 
// (то есть выполнится успешно).

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('я успешно зарезолвился!');
    }, 3000);
});

myPromise.then(result => {
    console.log(result);
})