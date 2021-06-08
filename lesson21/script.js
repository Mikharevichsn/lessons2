const intervalID = setInterval(() => {
    console.log(123);
}, 2000);


setTimeout(() => {
    console.log('end');
    clearInterval(intervalID);
}, 10100);