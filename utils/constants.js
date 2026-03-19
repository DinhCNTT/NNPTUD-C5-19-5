const fs = require('fs');
const path = require('path');

const PRIVATE_KEY = fs.readFileSync(path.join(__dirname, '../private.pem'), 'utf8');
const PUBLIC_KEY = fs.readFileSync(path.join(__dirname, '../public.pem'), 'utf8');

const JWT_ALGORITHM = 'RS256';
const JWT_EXPIRES_IN = '1h';

module.exports = {
    PRIVATE_KEY,
    PUBLIC_KEY,
    JWT_ALGORITHM,
    JWT_EXPIRES_IN
};
