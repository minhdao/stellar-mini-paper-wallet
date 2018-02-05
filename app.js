const StellarBase = require('stellar-base');
const QR = require('qrcode');

var keyPair = StellarBase.Keypair.random();
var accountId = keyPair.publicKey();

console.log(keyPair.publicKey());
console.log(keyPair.secret());

QR.toCanvas(keyPair.publicKey(), { errorCorrectionLevel: 'H' }, function (err, canvas) {
  if (err) throw err;

  var container = document.getElementById('canvas');
  container.appendChild(canvas);
});
