const table = document.querySelector('.hotels-table');
const form = document.querySelector('.add-hotel-form');

const activateDeleteBtns = () => {
  const delBtns = document.querySelectorAll('.delete-btn');
  for (let btn of delBtns) {
    btn.addEventListener('click', (event) => {
      const hotelName = event.target.dataset.hotel;
      console.log(hotelName);

      fetch('http://localhost:4000/hotel', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: hotelName }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            renderHotels();
          }
        });
    });
  }
};

const renderHotels = () => {
  fetch('http://localhost:4000/hotel')
    .then((response) => response.json())
    .then((hotels) => {
      console.log(hotels);
      const tableHeader = `<tr>
            <th>№</th>
            <th>Название</th>
            <th>Звёзды</th>
            <th>Возраст</th>
            <th>Количество номеров</th>
            <th>Тут кнопки</th>
        </tr>`;
      const elements = hotels
        .map(
          (el, ind) => `<tr>
                <td>${ind + 1}</td>
                <td>${el.name}</td>
                <td>${el.stars}</td>
                <td>${el.age}</td>
                <td>${el.roomsCnt}</td>
                <td><button class="delete-btn" data-hotel="${
                  el.name
                }">Удалить</button></td>
            </tr>`
        )
        .join('');
      table.innerHTML = tableHeader + elements;

      activateDeleteBtns();
    });
};

renderHotels();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const postData = {};

  for (let child of event.target.children) {
    if (child.name) {
      postData[child.name] = child.value;
    }
  }

  console.log(postData);

  fetch('http://localhost:4000/hotel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        renderHotels();
      }
    })
    .finally(() => {
      event.target.reset();
    });
});
