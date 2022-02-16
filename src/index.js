const { scryptSync } = require('crypto');

const salt = 'some-salt';
const keyLength = 64;

const crypt = (data) => {
  const derivedKey = scryptSync(data, salt, keyLength);
  return derivedKey.toString('hex');
};

const data = 'Some data plain';

const dataCrypt = crypt(data);

console.log(`Data=[${data}]`);
console.log(`Data crypted=[${dataCrypt}]`);
