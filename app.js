const express = require('express');
const hbs = require('hbs');

var app = express();

// set view engine
app.set('view engine', 'hbs');

// register partials
hbs.registerPartials(__dirname + '/views/partials');

// route config
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageName: 'welcome home',
        content: 'home sweet home',
    });
});

app.listen(3000, () => {
    console.log('server started .... ');
});
