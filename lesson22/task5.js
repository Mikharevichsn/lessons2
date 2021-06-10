// 5 - Сделайте 3 промиса, 
// в каждом из которых расположена функция setTimeout 
// со случайно задержкой от 1 до 5 секунд. 
// Пусть каждый промис своим результатом возвращает эту задержку. 
// С помощью Promise.all получите массив результатов, 
// найдите его сумму, выведите на экран.






const getNewPromise = () => {
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(timeout);
        }, timeout)
    })
}


const promise1 = getNewPromise();
const promise2 = getNewPromise();
const promise3 = getNewPromise();



Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(result);
    console.log(result.reduce((acc, cur) => acc + cur, 0));
})


