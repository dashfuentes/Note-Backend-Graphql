"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var noteSchema = new _mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
var _default = (0, _mongoose.model)("User", noteSchema);
exports["default"] = _default;
//# sourceMappingURL=User.js.map