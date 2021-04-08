// Исправьте ошибки чтобы код работал.

const product = {
  price: 5000,
  showPrice() {
    console.log(this);
    console.log(this.price);
    return 777;
  }
}

function callAction(action) {
  console.log('action = ', action);
  action();
}

callAction(product.showPrice.bind(product));