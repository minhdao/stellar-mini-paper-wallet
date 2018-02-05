const StellarBase = require('stellar-base');

var keyPair = StellarBase.Keypair.random();
var accountId = keyPair.publicKey();

console.log(keyPair.publicKey());
console.log(keyPair.secret());
