var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var classModelSchema = new Schema({
  NameClass: String,
  Student:[{ type: Schema.Types.ObjectId, ref:"Student"}],
  teacher: {
    type: Schema.Types.ObjectId, ref: "TeacherModel"
  },
});
var classModel = mongoose.model("ClassModel", classModelSchema);
module.exports = classModel;
