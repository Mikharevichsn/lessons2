// Пример 6 - напишите функцию getObjectWithoutPropperty
// которая принимает объект, название свойства
// и возвращает копию объекта без этого свойства

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

const getObjectWithoutPropperty = (obj, proppertyKey) => {
    const {[proppertyKey]: tmp, ...result} = obj;
    // delete result[proppertyKey];
    return result;
}

console.log(getObjectWithoutPropperty(user, 'age'));
// console.log('user = ', user);