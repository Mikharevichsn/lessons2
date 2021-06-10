// 3 - Сделайте цепочку из трех промисов. 
// Пусть первый промис возвращает число. 
// Сделайте так, чтобы каждый последующий промис через 3 секунды 
// возводил в квадрат результат предыдущего промиса. 
// После окончания манипуляций выведите число алертом на экран.

const timeout = 1000;

const getNewPromise = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num ** 2);
        }, timeout)
    })
}

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, timeout)
})

firstPromise
    .then((number) => getNewPromise(number)) // 25
    .then((number) => getNewPromise(number)) // 625
    .then((number) => getNewPromise(number)) // 
    .then((finalResult) => console.log(finalResult))
    // .then((number) => getNewPromise(number))