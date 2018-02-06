const express = require('express');
const hbs = require('hbs');

const stellar = require('./stellar/stellar.js');

var port = process.env.PORT || 3000;

var app = express();

// set view engine
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/views'));

// register partials
hbs.registerPartials(__dirname + '/views/partials');

// route config
app.get('/', (req, res) => {
    var keyPair = stellar.genKey();
    res.render('home.hbs', {
        pageName: 'welcome home',
        content: 'home sweet home',
        publicKey: stellar.getPublic(keyPair),
        privateKey: stellar.getPrivate(keyPair)
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
