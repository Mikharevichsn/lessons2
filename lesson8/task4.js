// Напишите функцию для хранения скидки. 
// Функция возвращает другую функцию, 
// которая принимает сумму покупки 
// и возвращает финальную сумму с применённой скидкой.

const saveDiscount = (discount) => {
    return (price) => {
        const newPrice = price - price * discount;
        return newPrice;
    }
}

const getPriceAfterPartnerDiscount = saveDiscount(0.2);
const getPriceAfterMicroDiscount = saveDiscount(0.01);
const getPriceAfterSevenDiscount = saveDiscount(0.07);
const getPriceAfterOwnerDiscount = saveDiscount(1);


console.log(getPriceAfterPartnerDiscount(1000));
console.log(getPriceAfterMicroDiscount(1000));
console.log(getPriceAfterSevenDiscount(1000));
console.log(getPriceAfterOwnerDiscount(1000));




