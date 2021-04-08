// Напишите функцию makeCounter(), 
// которая возвращает другую функцию, 
// которая считает и логирует количество своих вызовов.


const makeCounter = () => {
    let counter = 0;
    return () => {
        counter += 1;
        console.log(counter);
    }
}

const count = makeCounter();

count();
count();
count();
count();
count();
count();
