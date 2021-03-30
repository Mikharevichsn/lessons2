/* 
Напишите ф-цию calcTotalPrice(stones, stoneName), 
которая принимает массив обьектов 
и строку с названием камня. 
Ф-ция считает и возвращает общую стоимость камней 
с таким именем, ценой и количеством из обьекта
*/

const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

const calcTotalPrice = (stonesArr, stoneName) => {
    for (let element of stonesArr) {
        if (element.name !== stoneName) {
            continue;
        } else {
            return element.price * element.quantity;
        }
    }
    return null;
}

console.log(calcTotalPrice(stones, 'Бриллиант'));