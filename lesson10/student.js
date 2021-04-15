class User {
    constructor(userName, userLastName) {
        this.name = userName;
        this.lastname = userLastName;
    }

    getFullName() {
        return `${this.name} ${this.lastname}`
    }
}


const user = new User('Max', 'Korol');

console.log(user);
console.log(user.getFullName());


class Student extends User {
    constructor(studentName, studentLastName, yearOfStart) {
        super(studentName, studentLastName);
        this.year = yearOfStart;
    }

    getYear() {
        return this.year;
    }
}

const myStudent = new Student('Anna', 'Petrova', 2019);
console.log(myStudent);
console.log(myStudent.getFullName());
console.log(myStudent.getYear());