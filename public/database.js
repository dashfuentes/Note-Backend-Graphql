"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// export async function connect() {

//     try {
//         await mongoose.connect( "mongodb://127.0.0.1:27017/mongodbgraphql", {
//             useNewUrlParser: true
//         } );

//         console.log('Database connected!!')
//     } catch (error) {
//         return console.log(error)
//     }

// }

var uri = "mongodb+srv://dashfuentes:Test123@cluster0.3pioj25.mongodb.net/?retryWrites=true&w=majority";
_mongoose["default"].connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('DB connected!!');
})["catch"](function (err) {
  return console.log(err);
});
//# sourceMappingURL=database.js.map