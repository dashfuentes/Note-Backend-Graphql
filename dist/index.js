"use strict";

var _server = require("./server");
require("./database");
// import { connect } from "./database";

//connect()

_server.server.start({
  port: 3000
}, function (_ref) {
  var port = _ref.port;
  console.log('Server running!!');
});
//# sourceMappingURL=index.js.map