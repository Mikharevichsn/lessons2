// 6 - Сделайте 3 промиса,
// в каждом из которых расположена функция setTimeout
// со случайно задержкой от 1 до 5 секунд.
// Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса
// и выведите результат его работы на экран.

const getNewPromise = (num) => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, timeout);
  });
};

const promise1 = getNewPromise(1);
const promise2 = getNewPromise(2);
const promise3 = getNewPromise(3);

Promise.race([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);
