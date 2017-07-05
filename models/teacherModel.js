var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var teacherSchema = new Schema({
  teachername: String,
  teacherId: String,
})

var Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
