// 3 - Клиент
// Напиши класс Client который создаёт объект 
// со свойствами login и email. 
// Объяви приватные свойства login и email, 
// доступ к которым сделай через геттер и сеттер login и email.


class Client {
    #login;
    #email;

    constructor(clientLogin, clientEmail) {
        this.#login = clientLogin;
        this.#email = clientEmail;
    }

    get showLogin() {
        return this.#login;
    }

    set changeLogin(newLogin) {
        this.#login = newLogin;
    }
    
}



const myClient = new Client('root', 'boss@mail.ru');
console.log(myClient);
console.log(myClient.showLogin);
myClient.changeLogin = 'coder2021'
console.log(myClient.showLogin);
console.log(myClient);


// myClient.#login = 'fff';
// console.log(myClient);





