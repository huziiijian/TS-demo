// eslint-disable-next-line no-path-concat
process.env.NODE_CONFIG_DIR = __dirname + '/env';

const env = require('config');
const copy = require('./copy.config');

const conf = {
    copy,
    env
};

module.exports = conf;
