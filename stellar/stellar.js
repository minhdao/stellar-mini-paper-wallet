const StellarBase = require('stellar-base');

var genKey = () => {
    return StellarBase.Keypair.random();
};

var getPublic = (keyPair) => {
    return keyPair.publicKey();
};

var getPrivate = (keyPair) => {
    return keyPair.secret();
};

var keyPair = genKey();

module.exports = {
    genKey,
    getPublic,
    getPrivate
};
