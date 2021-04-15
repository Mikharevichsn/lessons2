// Напишите функцию each(array, callback), 
// которая первым параметром принимает массив, 
// а вторым - функцию, которая применится 
// к каждому элементу массива. 

// Функция each должна вернуть новый массив, 
// элементами которого будут результаты вызова коллбека.


const each = (array, callback) => {
    const newArray = [...array];

    for (let i = 0; i < newArray.length; i += 1) {
        newArray[i] = callback(newArray[i]);
    }

    return newArray;
}

const arr = [1, 2, 3, 4];
const func = (elem) => {
    return elem + 1;
}

console.log(each(arr, func));
console.log(each([64, 49, 36, 25, 16], element => element * 2));
console.log(each([64, 49, 36, 25, 16], element => element - 10));
console.log(each([64, 49, 36, 25, 16], element => Math.sqrt(element)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], element => Math.ceil(element)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], element => Math.floor(element)));

