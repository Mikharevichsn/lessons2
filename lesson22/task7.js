// 7 - Даны 3 картинки. 
// С помощью Promise.all дождитесь окончания загрузки 
// всех картинок и выведите их на экран.

const status = document.querySelector('.status');
const spinner = document.querySelector('.status-spinner');
const btn = document.querySelector('.btn');
const imagesDiv = document.querySelector('.images');

const images = [
    'https://images.unsplash.com/photo-1611542088053-8da2ed40f5bd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8cm5TS0RId3dZVWt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
    'https://images.unsplash.com/photo-1579558448624-1a4b3d50d17c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cm5TS0RId3dZVWt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  ];

const makeImage = (url) => {
  const img = document.createElement('img');
  img.src = url; // загрузка
  img.width = 200;

  return new Promise((resolve, reject) => {
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject('Ошибка! Не удалось загрузить картинку');
    })
  })
}


btn.addEventListener('click', () => {
  imagesDiv.innerHTML = '';
  status.textContent = 'Загружаю...';
  spinner.classList.remove('spinner-hidden');

  const promises = images.map(link => makeImage(link));
  console.log(promises);

  Promise.all(promises)
    .then(readyImages => {
      imagesDiv.append(...readyImages);
      status.textContent = '';
    })
    .catch(err => {
      status.textContent = 'К сожалению загрузка не удалась :\'-(';
      console.error(err);
    })
    .finally(() => {
      spinner.classList.add('spinner-hidden');
    })
})