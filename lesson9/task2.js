// Пример 2 - Напишите новый "класс" Boss, 
// который наследуется от Worker из прошлого задания. 
// Появляется новые свойство: workers - количество работников. 
// И зарплата считается по другому: 
// произведение (умножение) ставки rate на количество отработанных дней 
// и на количество работников.


function Worker(config = {}) {
    // const this = {};
    const {name, surname, rate, days} = config;

    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;

    Worker.count = Worker.count + 1;

    // return this;
}

Worker.count = 0;

Worker.prototype.getSalary = function() {
    return this.rate * this.days;
}

Worker.prototype.getFullName = function() {
    return `${this.name} ${this.surname}`;
}



function Boss(config) {
    const {name, surname, rate, days, workers} = config;
    Worker.call(this, {name, surname, rate, days});
    this.workers = workers;
}

Boss.prototype = Object.create(Worker.prototype);
Boss.prototype.getSalary = function() {
    return this.rate * this.days * this.workers;
}

const boss = new Boss({name: 'Андрей', surname: 'Петров', rate: 50, days: 10, workers: 4});

console.dir(boss);
console.log(boss.getSalary());
console.dir(boss.getFullName());


const worker = new Worker({
    name: 'Иван',
    surname: 'Иванов',
    rate: 10,
    days: 31,
});
console.log(worker);
console.log(worker.getSalary());
console.dir(Worker);