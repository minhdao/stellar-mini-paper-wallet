const StellarBase = require('stellar-base');
const express = require('express');

var keyPair = StellarBase.Keypair.random();
var accountId = keyPair.publicKey();
var app = express();

// set view engine
app.set('view engine', 'hbs');

// register partials
hbs.registerPartials(__dirname + '/views/partials');

// route config
app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(3000, () => {
    console.log('server started .... ');
});
