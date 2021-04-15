class Worker {
    constructor(workerConfig) {
        const {name, lastname, rate, days} = workerConfig;

        this.name = name;
        this.lastname = lastname;
        this.rate = rate;
        this.days = days;
    }

    getFullName() {
        return `${this.name} ${this.lastname}`;
    }

    getSalary() {
        return this.rate * this.days;
    }
}


const worker = new Worker({name: 'Petya', lastname: 'Kukuruzov', rate: 10, days: 30});
console.log(worker);
console.log(worker.getFullName());
console.log(worker.getSalary());


class Boss extends Worker {
    constructor(bossConfig = {}) {
        const {name, lastname, rate, days, counOfWorkers} = bossConfig;
        super({name, lastname, rate, days});
        this.counOfWorkers = counOfWorkers;
    }


}

const boss = new Boss({name: 'Serjo', lastname: 'Bertoluchi', rate: 20, days: 15, counOfWorkers: 3});
console.log(boss);