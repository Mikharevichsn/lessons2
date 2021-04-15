// 1 - Пользователь
// Напиши класс User для создания пользователя 
// со следующим свойствами:

// username - имя, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// Класс ожидает 1 параметр - объект настроек с 
// одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку: 
// User ${имя} is ${возраст} years old and has ${кол-во постов} posts.


class User {
    constructor(config = {}) {
        const {userName, age, numberOfPosts} = config;
        this.userName = userName;
        this.age = age;
        this.numberOfPosts = numberOfPosts;
    }

    // getInfo() {
    //     return `User ${this.userName} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
    // }

    get info() {
        return `User ${this.userName} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
    }
}

const myUser = new User({userName: 'Jack', age: 25, numberOfPosts: 12});

console.log(myUser);
// console.log(myUser.getInfo());
console.log(myUser.info);