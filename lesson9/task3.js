// Пример 3 - Реализуйте "класс" Student (Студент), 
// который будет наследовать от "класса" User, подобно тому, 
// Этот "класс" должен иметь следующие свойства: 
// name (имя, наследуется от User), 
// surname (фамилия, наследуется от User), 
// year (год поступления в вуз). 
// "Класс" должен иметь метод getFullName() (наследуется от User), 
// с помощью которого можно вывести одновременно имя и фамилию студента. 
// Также "класс" должен иметь метод getCourse(), 
// который будет выводить текущий курс студента (от 1 до 5). 
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
// Текущий год получите самостоятельно.



// function User(config) {
//     const {name, surname} = config;
// }

function User({name, surname}) {
    this.name = name;
    this.surname = surname;
}

User.prototype.getFullName = function() {
    return `${this.name} ${this.surname}`;
}

function Student({name, surname, year}) {
    User.call(this, {name, surname});
    this.year = year;
}

Student.prototype = Object.create(User.prototype);
Student.prototype.getCourse = function() {
    const date = new Date();
    console.dir(date);
    const currentYear = date.getFullYear();
    console.log('currentYear = ', currentYear);
    return currentYear - this.year;
}

console.dir(Student);

const petya = new Student({
    name: 'Petr',
    surname: 'Morozov',
    year: 2019,
})

console.log(petya);
console.log(petya.getFullName());
console.log(petya.getCourse());