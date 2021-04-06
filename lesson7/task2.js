// Напишите две функции:

// makeProduct(name, price, callback) - принимает имя и цену товара, 
// а также колбек. Функция создаёт обьект товара, 
// добавляя ему уникальный идентификатор в свойство id 
// и вызывает колбек передавая ему созданный обьект.

// showProduct(product) - коллбек принимающий обьект продукта 
// и логирующий его в консоль


const makeProduct = (name, price, callback) => {
  const obj = {
    id: Math.round(Math.random() * 1000000),
    name: name,
    price: price,
  }
  callback(obj);
};

const showProduct = (product) => console.log(product);

makeProduct('chear', 1000, showProduct);