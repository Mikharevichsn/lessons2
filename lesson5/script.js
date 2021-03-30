const obj = {
    name: 'Ivan',
    age: 25,
    // makeOlder: function() {
    //     console.log(123);
    // },
    makeOlder(years=1) {
        
        // console.log('this before = ', this);
        this.age += years;
        // console.log('this after = ', this);
    }

}

console.log(obj);

obj.gender = 'Male';
console.log(obj);

obj.age = 26;
console.log(obj);

// obj.age = obj.age + 1;
obj.age += 1;
obj.age += 1;
obj.age += 1;
obj.age += 1;
obj.age += 1;
console.log(obj);


obj.makeOlder();
obj.makeOlder();
obj.makeOlder();
obj.makeOlder();
obj.makeOlder();
obj.makeOlder();
console.log(obj);

obj.makeOlder(5);
console.log(obj);

const str = 'second-name';

obj[str] = 'Petrov';
console.log(obj);