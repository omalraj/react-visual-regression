const backstop = require('backstopjs');
const config = require('./backstop.json');

backstop('test', { config: { ...config, report: ['CI'] } })
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
