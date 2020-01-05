const clipboardy = require('clipboardy');

module.exports = function(on) {
  on('task', {
    getClipboard() {
      return clipboardy.readSync();
    },
  });
};
