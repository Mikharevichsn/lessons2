/*
Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
*/

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],

    getRandomID() {
        // return Math.round(Math.random(999999) * 1000000);
        return this.transactions.length + 1;
    },
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        return {
            id: this.getRandomID(),
            type,
            amount,
        }
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        const isValid = this.validateAmount(amount);
        if (!isValid) return;
        // if (!this.validateAmount(amount)) return;
        
        this.balance += amount;
        const transac = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transac);
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        const isValid = this.validateAmount(amount);
        if (!isValid) return;
        // if (!this.validateAmount(amount)) return;

        if (amount > this.balance) {
            console.log('Нет бабла! Иди работай ШАШЛЫК!');
            return;
        };
        this.balance -= amount;
        const transac = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transac);
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (transac of this.transactions) {
            if (transac.id === id) {
                return transac;
            }
        }
        return null;
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0;
        for (transac of this.transactions) {
            if (transac.type === type) {
                total += transac.amount;
            }
        }
        return total;
    },
    validateAmount(amount) {
        return typeof amount === 'number';
        // if (typeof amount !== 'number') {
        //     console.log('Ошибка! Некорректный amount');
        //     return false;
        // } else {
        //     return true;
        // };
    },
  };


console.log(JSON.stringify(account, null, 2));
account.deposit(500);
account.deposit('1000');
console.log(JSON.stringify(account, null, 2));
account.withdraw(200);
account.withdraw('1000');
console.log(JSON.stringify(account, null, 2));
console.log(account.getBalance());
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));