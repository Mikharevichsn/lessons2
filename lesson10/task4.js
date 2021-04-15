// 4 - Заметки
// Напиши класс Notes который управляет коллекцией 
// заметок в свойстве notes. 
// Заметка это объект со свойствами text и priority. 
// Добавь классу статическое свойство Priority, 
// в котором будет храниться объект с приоритетами.


class Notes {
    static PRIORITY = {
        high: 'HIGH',
        medium: 'MEDIUM',
        low: 'LOW',
    };

    constructor() {
        this.notes = [];
    }

    addNote(item) {
        this.notes.push(item);
    }
}

const myCollection = new Notes();
console.log(myCollection);

const obj = {text: 'Запись # 1', priority: Notes.PRIORITY.high};
myCollection.addNote(obj);

console.log(myCollection);