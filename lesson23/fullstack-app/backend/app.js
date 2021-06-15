const express = require('express');
const bodyParser = require('body-parser');

const PORT = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

let hotels = [
    {name: 'SPb Resort', age: 21, stars: 4, roomsCnt: 145},
    {name: 'MSK Resort', age: 11, stars: 5, roomsCnt: 173},
    {name: 'Russia', age: 31, stars: 5, roomsCnt: 248},
    {name: 'Sochi Plaza', age: 41, stars: 6, roomsCnt: 471},
];

app.get('/', (req, res) => {
    res.send('Фронтенда нет, только API');
});

app.get('/hotel', (req, res) => {
    res.send(JSON.stringify(hotels));
});

app.post('/hotel', (req, res) => {
    console.log(req.body);
    hotels.push(req.body);
    res.send(JSON.stringify({success: true}));
});


app.delete('/hotel', (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    hotels = hotels.filter(el => el.name !== name);
    res.send(JSON.stringify({success: true}));
});



app.listen(PORT, () => {
    console.log('Бэк запустился на порту ' + PORT);
})