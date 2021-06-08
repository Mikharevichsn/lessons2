// 3. Создайте инпут, 
// в который пользователь вводит дату своего рождения в формате
// '2014-12-31' (с конкретным годом).
// По потере фокуса выведите под инпутом сколько дней осталось до его дня рождения.

const input = document.querySelector('#date-birth');
const h3 = document.querySelector('.days');

input.addEventListener('blur', (event) => {
    const dateNow = new Date();
    const dateBirth = new Date(event.currentTarget.value);
    dateBirth.setFullYear(dateNow.getFullYear());

    if (dateBirth < dateNow) {
        console.log('ДР в этом году уже был');
        dateBirth.setFullYear(dateNow.getFullYear() + 1);
    }

    const dateNowMilliseconds = dateNow.getTime();
    const dateBirthMilliseconds = dateBirth.getTime();

    let days = (dateBirthMilliseconds - dateNowMilliseconds) / 1000 / 60 / 60 / 24;
    h3.textContent = Math.ceil(days);
})