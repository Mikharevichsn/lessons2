// дан массив чего-то
// надо написать функцию, которая поочередно применяет callback
// к каждому элементу массива


// примеры использования:
// 1) если число и число больше 3 -> напечатать в консоль
// 2) если объект -> добавить ключ isAdult: true / false
// 3) 



// const arr = [5, 3, 1, 4, 5];
// const arr = [
//     {name: 'Jack', age: 15},
//     {name: 'Nick', age: 35},
//     {name: 'Andrew', age: 45},
// ];

// const makeCallbackToAllDestructive = (array, callback) => {
//     console.log(JSON.stringify(array, null, 2));
//     for (let i = 0; i < array.length; i += 1) {
//          array[i] = callback(array[i]);
//     }
// }

// const myFunc = (elem) => {
//     // return elem * 1000;
//     // console.log('elem = ', elem);
//     // return elem * Math.round(Math.random() * 1000);
//     // return `${elem}Кукуруза`

//     if (elem > 3) {
//         console.log(elem);
//     }
//     return elem;
// }

// const myFunc2 = (elem) => {
//     if (elem.age >= 18) {
//         elem.isAdult = true;
//     } else {
//         elem.isAdult = false;
//     }
    
//     return elem;
// }


// makeCallbackToAllDestructive(arr, myFunc);
// makeCallbackToAllDestructive(arr, myFunc2);
// console.log(JSON.stringify(arr, null, 2));





const makeCallbackToAllNotDestructive = (array, callback) => {
    const newArray = [...array];

    for (let i = 0; i < newArray.length; i += 1 ) {
        newArray[i] = callback(newArray[i]);
    }
    return newArray;
}

const myFunc = (element) => {
    return element * 1000;
}


// console.log(makeCallbackToAllNotDestructive([5555, 4444, 3333, 2222, 1111]));
const result = makeCallbackToAllNotDestructive([5555, 4444, 3333, 2222, 1111], myFunc);
console.log(result);
