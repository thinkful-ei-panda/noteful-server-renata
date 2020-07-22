const winston = require('winston');
const { NODE_ENV } = require('./config');

const logs = winston.createlogs({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'info.log' })
  ]
});

if (NODE_ENV !== 'production') {
  logs.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logs;