"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var noteSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});
var _default = (0, _mongoose.model)("Note", noteSchema);
exports["default"] = _default;
//# sourceMappingURL=Note.js.map