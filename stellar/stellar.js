const StellarBase = require('stellar-base');
var keyPair = StellarBase.Keypair.random();
var accountId = keyPair.publicKey();
