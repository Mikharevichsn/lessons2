// Напишите две функции:

// letMeSeeYourName(callback) - 
// спрашивает имя пользователя через prompt 
// и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя 
// и логирующий в консоль строку "Привет" + name


const letMeSeeYourName = (callback) => {
    const name = prompt('имя пользователя');
    callback(name);
}

const greet = (name) => {
    console.log(`Привет ${name}`);
}


letMeSeeYourName(greet);