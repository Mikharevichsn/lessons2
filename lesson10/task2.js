// 2 - Хранилище
// Напиши класс Storage 
// который создаёт объекты для управления складом товаров. 
// При вызове будет получать один аргумент - 
// начальный массив товаров, 
// и записывать его в свойство items.


class Storage {

    constructor(goods) {
        this.items = goods || [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    deleteItem(id) {
        // this.items = this.items.filter(el => el.id !== id);

        let tmpArr = [];

        for (let item of this.items) {
            if (item.id !== id) {
                tmpArr.push(item);
            }
        }

        this.items = tmpArr;

        return 'success!';
    }

    get item() {
        return this.items;
    }

    set item(element) {
        console.log('ya zapustilso!');
        this.items.push(element);
    }

    set delete(id) {
        // this.items = this.items.filter(el => el.id !== id);

        let tmpArr = [];

        for (let item of this.items) {
            if (item.id !== id) {
                tmpArr.push(item);
            }
        }

        this.items = tmpArr;

        return 'success!';
    }

}


const sklad = new Storage([{id: 1, name: 'table', pricve: 1000}]);


// sklad.addItem({id: 2, name: 'cup', price: 777});
// sklad.addItem({id: 3, name: 'chear', price: 999});
// sklad.item({id: 3, name: 'chear', price: 999});

// console.log(sklad);
// console.log(sklad.getItems());
// console.log(sklad.deleteItem(2));
// console.log(sklad.getItems());

console.log(JSON.stringify(sklad.item, null, 2));
sklad.item = {id: 2, name: 'cup', price: 777};
console.log(JSON.stringify(sklad.item, null, 2));
sklad.delete = 2;
console.log(JSON.stringify(sklad.item, null, 2));

console.log(sklad);