const isOdd = require('is-odd');
const chalk = require('chalk');

const foo = (num) => {
  if (isOdd(num)) {
    console.log('Нечетное!');
  }
};

foo(3);
console.log(chalk.blue('Hello world!'));
console.log(chalk.cyan('Hello world!'));
console.log(chalk.bgCyan('Hello world!'));
console.log(chalk.rgb(100, 100, 0)('Hello world!'));
