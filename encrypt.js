const CryptoJS = require('crypto-js');
const fs = require('fs');
const SECRET_KEY = process.env.SECRET_KEY;
const plain = fs.readFileSync('private-data/data.json', 'utf8');
const encrypted = CryptoJS.AES.encrypt(plain, SECRET_KEY).toString();
fs.writeFileSync('data.json', encrypted);
