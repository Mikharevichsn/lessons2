const a = {
    name: 'Igor'
};

a.age = 15;

a['mood'] = 'happy';

const str = 'hobby';
a[str] = 'snowboarding';

const obj = {
    value: 5,
    counter: 3
}

console.log(obj.toString());

a[obj] = 5;
a[obj] = 6;

const newObj = {
    name: 'Petr'
}

a[newObj] = 15;


console.log(a);