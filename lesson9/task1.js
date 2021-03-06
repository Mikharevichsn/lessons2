// Пример 1 - Реализуйте "класс" Worker (Работник)
// который будет иметь следующие свойства: 
// name (имя), surname (фамилия), rate (ставка за день работы), 
// days (количество отработанных дней). 
// Также "класс" должен иметь метод getSalary(), 
// который будет выводить зарплату работника. 
// Зарплата - это произведение (умножение) ставки rate 
// на количество отработанных дней days. 
// И метод getFullName() - имя и фамиля работника.

// Реализуйте статическое свойство count,
// в котором храните число созданных работников


function Worker(config = {}) {
    const {name, surname, rate, days} = config;

    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;

    Worker.count = Worker.count + 1;
}

Worker.count = 0;




Worker.prototype.getSalary = function() {
    return this.rate * this.days;
}

Worker.prototype.getFullName = function() {
    return `${this.name} ${this.surname}`;
}



const worker = new Worker({
    name: 'Иван',
    surname: 'Иванов',
    rate: 10,
    days: 31,
});

const worker2 = new Worker({
    name: 'Иван',
    surname: 'Иванов',
    rate: 10,
    days: 31,
});

const worker3 = new Worker({
    name: 'Иван',
    surname: 'Иванов',
    rate: 10,
    days: 31,
});

console.dir(Worker);



console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иванов Иван'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31