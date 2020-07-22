const { API_TOKEN } = require('./config');
const logs = require('./logs');

function token(req, res, next) {
  const authToken = req.get('Authorization');
  logs.error(`Unauthorized request to path: ${req.path}`);

  if (!authToken || authToken.split(' ')[1] !== API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized request' });
  }
  next();
}

module.exports = token;