'use strict';
const jspmHmrServer = require('jspm-hmr');
const options = {
  open: true,
  port: 8000
};

jspmHmrServer.start(options);
