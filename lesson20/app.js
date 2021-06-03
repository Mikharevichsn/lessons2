const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

const finalNewsArray = [
    {id: 1, newsTitle: 'Новость 1', newsText: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот.'}, 
    {id: 2, newsTitle: 'Новость 2', newsText: 'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого.'}, 
    {id: 3, newsTitle: 'Новость 3', newsText: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.'}
];

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({extname: 'hbs'}));

app.get('/', (req, res) => {
    console.log('есть запрос на /'); 
    res.render('index', {headline: 'Супер главная страница!!!', title: 'Главная'});
});

app.get('/o-nas', (req, res) => {
    res.render('about', {headline: 'Страница О НАС', title: 'О нас'});
})

app.get('/kontakti', (req, res) => {
    res.render('contacts', {headline: 'Страница КОНТАКТЫ', title: 'Контакты'});
})

app.get('/novosti', (req, res) => {
    console.log('/novosti');
    res.render('news', { 
        headline: 'Список новостей', 
        title: 'Новости',
        newsArray: ['Новость 1', 'Новость 2', 'Новость 3'],
        secondNewsArray: [
            {newsTitle: 'Новость 1'}, 
            {newsTitle: 'Новость 2'}, 
            {newsTitle: 'Новость 3'}
        ],
        finalNewsArray,
    });
})

app.get('/novosti/:id', (req, res) => {
    const { id } = req.params;
    const newsItemObj = finalNewsArray.find((el) => el.id == id);
    res.render('news-detail', {...newsItemObj, title: newsItemObj.newsTitle});
})

app.listen(7777, () => {
    console.log('Сервак запустился на порту 7777');
});